"use client";

import React, { useEffect, useRef, forwardRef, useImperativeHandle, useState } from "react";

export type RichTextEditorHandle = {
    getContent: () => string;
};

// Internal Quill-based editor component
const QuillRichTextEditor = forwardRef<RichTextEditorHandle, {
    initialHtml?: string;
    className?: string;
    onChange?: (html: string) => void;
}>(
    ({ initialHtml = "", className, onChange }, ref) => {
        const containerRef = useRef<HTMLDivElement>(null);
        const editorRef = useRef<HTMLDivElement>(null);
        const quillRef = useRef<any>(null);
        const fileInputRef = useRef<HTMLInputElement>(null);
        const [ready, setReady] = useState(false);

        useEffect(() => {
            let mounted = true;
            const container = containerRef.current;
            const editor = editorRef.current;

            (async () => {
                const Quill = (await import("quill")).default;
                // @ts-expect-error - quill CSS has no type declarations
                await import("quill/dist/quill.snow.css");

                if (!mounted || !container || !editor) return;

                const existingToolbar = container.querySelector(":scope > .ql-toolbar");
                if (existingToolbar) existingToolbar.remove();

                quillRef.current = new Quill(editor, {
                    theme: "snow",
                    placeholder: "Start typing...",
                    modules: {
                        toolbar: {
                            container: [
                                [{ header: [1, 2, 3, false] }],
                                ["bold", "italic", "underline", "strike"],
                                [{ list: "ordered" }, { list: "bullet" }],
                                ["link", "image", "video"],
                                ["clean"],
                            ],
                            handlers: {
                                video: () => fileInputRef.current?.click(),
                            },
                        },
                        clipboard: {
                            matchVisual: false,
                        },
                    },
                });

                // Note: Quill doesn't natively preserve class attributes in its Delta format
                // Classes will be preserved when HTML is set directly via innerHTML
                // and retrieved via innerHTML, but may be lost during Quill's editing operations

                if (initialHtml) {
                    quillRef.current.root.innerHTML = initialHtml;
                }

                if (onChange) {
                    quillRef.current.on('text-change', () => {
                        const html = quillRef.current.root.innerHTML;
                        onChange(html);
                    });

                    const initialContent = quillRef.current.root.innerHTML;
                    onChange(initialContent);
                }

                setReady(true);
            })();

            return () => {
                mounted = false;
                if (container) {
                    const toolbar = container.querySelector(":scope > .ql-toolbar");
                    if (toolbar) toolbar.remove();
                }
                if (editor) editor.innerHTML = "";
                quillRef.current = null;
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps -- init once on mount; initialHtml/onChange updates handled by separate effect
        }, []);

        // Separate effect to update content when initialHtml changes
        useEffect(() => {
            if (quillRef.current && initialHtml !== undefined && ready) {
                const currentContent = quillRef.current.root.innerHTML;

                // Only update if the content is significantly different (not just whitespace)
                const cleanCurrent = currentContent.replace(/<p><br><\/p>/g, '').replace(/<p><\/p>/g, '').trim();
                const cleanInitial = initialHtml.replace(/<p><br><\/p>/g, '').replace(/<p><\/p>/g, '').trim();

                if (cleanCurrent !== cleanInitial) {

                    quillRef.current.root.innerHTML = initialHtml;
                }
            }
        }, [initialHtml, ready]);

        // Use a normal onChange on the hidden input rather than addEventListener
        const handleVideoUpload: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
            const file = e.target.files?.[0];
            if (!file || !quillRef.current) return;

            try {
                const formData = new FormData();
                formData.append("video", file);
                const res = await fetch("/api/upload-video", { method: "POST", body: formData });
                const data = await res.json();
                if (data?.url) {
                    const range = quillRef.current.getSelection();
                    if (range) quillRef.current.insertEmbed(range.index, "video", data.url);
                }
            } catch (err) {

            } finally {
                e.target.value = "";
            }
        };

        useImperativeHandle(ref, () => ({
            getContent: () => (quillRef.current ? quillRef.current.root.innerHTML : ""),
        }));

        return (
            <div ref={containerRef} className={className}>
                <div ref={editorRef} style={{ height: 300 }} />
                <input type="file" ref={fileInputRef} accept="video/*" onChange={handleVideoUpload} style={{ display: "none" }} />
                {!ready && <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">Loading editor…</div>}
            </div>
        );
    }
);

QuillRichTextEditor.displayName = "QuillRichTextEditor";

// Backward-compatible wrapper component
interface RichTextEditorProps {
    content?: string;
    onChange?: (html: string) => void;
    className?: string;
}

export function RichTextEditor({ content = "", onChange, className }: RichTextEditorProps) {
    return (
        <QuillRichTextEditor
            initialHtml={content}
            onChange={onChange}
            className={className}
        />
    );
}

// Also export as default for compatibility
export default RichTextEditor;

--
-- PostgreSQL database dump
--

\restrict MwLqXpuLlM5Rkq6Kffs6D5wbTQaJeA99q9HSNfNavOedwDgz7aIckS4jXk09lYE

-- Dumped from database version 16.11
-- Dumped by pg_dump version 18.1 (Ubuntu 18.1-1.pgdg24.04+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public.wladmin_backuplog DROP CONSTRAINT IF EXISTS wladmin_backuplog_service_id_10292c2d_fk_wladmin_b;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_userblock DROP CONSTRAINT IF EXISTS weblate_auth_userblock_user_id_06173205_fk_weblate_auth_user_id;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_userblock DROP CONSTRAINT IF EXISTS weblate_auth_userblock_project_id_44aae0be_fk_trans_project_id;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_user_groups DROP CONSTRAINT IF EXISTS weblate_auth_user_gr_user_id_37e61ff1_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_user_groups DROP CONSTRAINT IF EXISTS weblate_auth_user_gr_group_id_48c0a977_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_role_permissions DROP CONSTRAINT IF EXISTS weblate_auth_role_pe_role_id_fa163124_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_role_permissions DROP CONSTRAINT IF EXISTS weblate_auth_role_pe_permission_id_d0650152_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_invitation DROP CONSTRAINT IF EXISTS weblate_auth_invitat_user_id_6a0c6dec_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_invitation DROP CONSTRAINT IF EXISTS weblate_auth_invitat_group_id_07a52aff_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_invitation DROP CONSTRAINT IF EXISTS weblate_auth_invitat_author_id_a713ef92_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_roles DROP CONSTRAINT IF EXISTS weblate_auth_group_r_role_id_de6300ca_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_roles DROP CONSTRAINT IF EXISTS weblate_auth_group_r_group_id_ed18f8d0_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_projects DROP CONSTRAINT IF EXISTS weblate_auth_group_p_project_id_26b8e2b6_fk_trans_pro;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_projects DROP CONSTRAINT IF EXISTS weblate_auth_group_p_group_id_f713a220_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_languages DROP CONSTRAINT IF EXISTS weblate_auth_group_l_language_id_4b7f5d81_fk_lang_lang;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_languages DROP CONSTRAINT IF EXISTS weblate_auth_group_l_group_id_aa12d0a6_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group DROP CONSTRAINT IF EXISTS weblate_auth_group_defining_project_id_b2ad81a7_fk_trans_pro;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_components DROP CONSTRAINT IF EXISTS weblate_auth_group_c_group_id_a07e20aa_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_componentlists DROP CONSTRAINT IF EXISTS weblate_auth_group_c_group_id_7af40eb9_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_componentlists DROP CONSTRAINT IF EXISTS weblate_auth_group_c_componentlist_id_b59f8fe9_fk_trans_com;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_components DROP CONSTRAINT IF EXISTS weblate_auth_group_c_component_id_2b53d012_fk_trans_com;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_admins DROP CONSTRAINT IF EXISTS weblate_auth_group_a_user_id_f5851c1b_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_admins DROP CONSTRAINT IF EXISTS weblate_auth_group_a_group_id_fa29ae29_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_autogroup DROP CONSTRAINT IF EXISTS weblate_auth_autogro_group_id_37b7ff0b_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.trans_workflowsetting DROP CONSTRAINT IF EXISTS trans_workflowsetting_project_id_32daa6c8_fk_trans_project_id;
ALTER TABLE IF EXISTS ONLY public.trans_workflowsetting DROP CONSTRAINT IF EXISTS trans_workflowsetting_language_id_fcb1fa15_fk_lang_language_id;
ALTER TABLE IF EXISTS ONLY public.trans_vote DROP CONSTRAINT IF EXISTS trans_vote_user_id_86a644fd_fk_weblate_auth_user_id;
ALTER TABLE IF EXISTS ONLY public.trans_vote DROP CONSTRAINT IF EXISTS trans_vote_suggestion_id_0df2bda2_fk_trans_suggestion_id;
ALTER TABLE IF EXISTS ONLY public.trans_variant_defining_units DROP CONSTRAINT IF EXISTS trans_variant_defining_units_unit_id_f692977b_fk_trans_unit_id;
ALTER TABLE IF EXISTS ONLY public.trans_variant_defining_units DROP CONSTRAINT IF EXISTS trans_variant_defini_variant_id_20848c13_fk_trans_var;
ALTER TABLE IF EXISTS ONLY public.trans_variant DROP CONSTRAINT IF EXISTS trans_variant_component_id_0915cbfc_fk_trans_component_id;
ALTER TABLE IF EXISTS ONLY public.trans_unit DROP CONSTRAINT IF EXISTS trans_unit_variant_id_c3315c70_fk_trans_variant_id;
ALTER TABLE IF EXISTS ONLY public.trans_unit DROP CONSTRAINT IF EXISTS trans_unit_translation_id_513bb910_fk_trans_translation_id;
ALTER TABLE IF EXISTS ONLY public.trans_unit DROP CONSTRAINT IF EXISTS trans_unit_source_unit_id_7a735f87_fk_trans_unit_id;
ALTER TABLE IF EXISTS ONLY public.trans_unit_labels DROP CONSTRAINT IF EXISTS trans_unit_labels_unit_id_a3c2ddc5_fk_trans_unit_id;
ALTER TABLE IF EXISTS ONLY public.trans_unit_labels DROP CONSTRAINT IF EXISTS trans_unit_labels_label_id_4ca92ebd_fk_trans_label_id;
ALTER TABLE IF EXISTS ONLY public.trans_translation DROP CONSTRAINT IF EXISTS trans_translation_plural_id_5cf36dc7_fk_lang_plural_id;
ALTER TABLE IF EXISTS ONLY public.trans_translation DROP CONSTRAINT IF EXISTS trans_translation_language_id_030f0b30_fk_lang_language_id;
ALTER TABLE IF EXISTS ONLY public.trans_translation DROP CONSTRAINT IF EXISTS trans_translation_component_id_c4b70a26_fk_trans_component_id;
ALTER TABLE IF EXISTS ONLY public.trans_suggestion DROP CONSTRAINT IF EXISTS trans_suggestion_user_id_69ce0c2b_fk_weblate_auth_user_id;
ALTER TABLE IF EXISTS ONLY public.trans_suggestion DROP CONSTRAINT IF EXISTS trans_suggestion_unit_id_eb46fceb_fk_trans_unit_id;
ALTER TABLE IF EXISTS ONLY public.trans_project DROP CONSTRAINT IF EXISTS trans_project_secondary_language_i_57e84b09_fk_lang_lang;
ALTER TABLE IF EXISTS ONLY public.trans_pendingunitchange DROP CONSTRAINT IF EXISTS trans_pendingunitchange_unit_id_eda769c3_fk_trans_unit_id;
ALTER TABLE IF EXISTS ONLY public.trans_pendingunitchange DROP CONSTRAINT IF EXISTS trans_pendingunitcha_author_id_38073ef3_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.trans_label DROP CONSTRAINT IF EXISTS trans_label_project_id_8320ed70_fk_trans_project_id;
ALTER TABLE IF EXISTS ONLY public.trans_contributoragreement DROP CONSTRAINT IF EXISTS trans_contributoragr_user_id_220dedfc_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.trans_contributoragreement DROP CONSTRAINT IF EXISTS trans_contributoragr_component_id_31bafbef_fk_trans_com;
ALTER TABLE IF EXISTS ONLY public.trans_componentlist_components DROP CONSTRAINT IF EXISTS trans_componentlist__componentlist_id_44d9ba8f_fk_trans_com;
ALTER TABLE IF EXISTS ONLY public.trans_componentlist_components DROP CONSTRAINT IF EXISTS trans_componentlist__component_id_5642ff5c_fk_trans_com;
ALTER TABLE IF EXISTS ONLY public.trans_component DROP CONSTRAINT IF EXISTS trans_component_source_language_id_2610b49e_fk_lang_language_id;
ALTER TABLE IF EXISTS ONLY public.trans_component DROP CONSTRAINT IF EXISTS trans_component_secondary_language_i_496a8d45_fk_lang_lang;
ALTER TABLE IF EXISTS ONLY public.trans_component DROP CONSTRAINT IF EXISTS trans_component_project_id_04a8b52c_fk_trans_project_id;
ALTER TABLE IF EXISTS ONLY public.trans_component_links DROP CONSTRAINT IF EXISTS trans_component_links_project_id_840f1e11_fk_trans_project_id;
ALTER TABLE IF EXISTS ONLY public.trans_component DROP CONSTRAINT IF EXISTS trans_component_linked_component_id_82b0de9e_fk_trans_com;
ALTER TABLE IF EXISTS ONLY public.trans_component_links DROP CONSTRAINT IF EXISTS trans_component_link_component_id_2342af45_fk_trans_com;
ALTER TABLE IF EXISTS ONLY public.trans_component DROP CONSTRAINT IF EXISTS trans_component_category_id_7c9c5306_fk_trans_category_id;
ALTER TABLE IF EXISTS ONLY public.trans_comment DROP CONSTRAINT IF EXISTS trans_comment_user_id_c2f200eb_fk_weblate_auth_user_id;
ALTER TABLE IF EXISTS ONLY public.trans_comment DROP CONSTRAINT IF EXISTS trans_comment_unit_id_73ca7c89_fk_trans_unit_id;
ALTER TABLE IF EXISTS ONLY public.trans_change DROP CONSTRAINT IF EXISTS trans_change_user_id_8d1225f9_fk_weblate_auth_user_id;
ALTER TABLE IF EXISTS ONLY public.trans_change DROP CONSTRAINT IF EXISTS trans_change_unit_id_76b0c6c0_fk_trans_unit_id;
ALTER TABLE IF EXISTS ONLY public.trans_change DROP CONSTRAINT IF EXISTS trans_change_translation_id_c5aa927b_fk_trans_translation_id;
ALTER TABLE IF EXISTS ONLY public.trans_change DROP CONSTRAINT IF EXISTS trans_change_suggestion_id_0e61f1cb_fk_trans_suggestion_id;
ALTER TABLE IF EXISTS ONLY public.trans_change DROP CONSTRAINT IF EXISTS trans_change_screenshot_id_ebbee35e_fk_screensho;
ALTER TABLE IF EXISTS ONLY public.trans_change DROP CONSTRAINT IF EXISTS trans_change_project_id_b2db51ee_fk_trans_project_id;
ALTER TABLE IF EXISTS ONLY public.trans_change DROP CONSTRAINT IF EXISTS trans_change_language_id_73bd2ce4_fk_lang_language_id;
ALTER TABLE IF EXISTS ONLY public.trans_change DROP CONSTRAINT IF EXISTS trans_change_component_id_288ed925_fk_trans_component_id;
ALTER TABLE IF EXISTS ONLY public.trans_change DROP CONSTRAINT IF EXISTS trans_change_comment_id_9702b436_fk_trans_comment_id;
ALTER TABLE IF EXISTS ONLY public.trans_change DROP CONSTRAINT IF EXISTS trans_change_category_id_436958e0_fk_trans_category_id;
ALTER TABLE IF EXISTS ONLY public.trans_change DROP CONSTRAINT IF EXISTS trans_change_author_id_09329d48_fk_weblate_auth_user_id;
ALTER TABLE IF EXISTS ONLY public.trans_change DROP CONSTRAINT IF EXISTS trans_change_announcement_id_1ad27981_fk_trans_announcement_id;
ALTER TABLE IF EXISTS ONLY public.trans_change DROP CONSTRAINT IF EXISTS trans_change_alert_id_34808078_fk_trans_alert_id;
ALTER TABLE IF EXISTS ONLY public.trans_category DROP CONSTRAINT IF EXISTS trans_category_project_id_7dc717ed_fk_trans_project_id;
ALTER TABLE IF EXISTS ONLY public.trans_category DROP CONSTRAINT IF EXISTS trans_category_category_id_0f21e824_fk_trans_category_id;
ALTER TABLE IF EXISTS ONLY public.trans_autocomponentlist DROP CONSTRAINT IF EXISTS trans_autocomponentl_componentlist_id_9ff87f21_fk_trans_com;
ALTER TABLE IF EXISTS ONLY public.trans_announcement DROP CONSTRAINT IF EXISTS trans_announcement_project_id_3713e8a9_fk_trans_project_id;
ALTER TABLE IF EXISTS ONLY public.trans_announcement DROP CONSTRAINT IF EXISTS trans_announcement_language_id_f5f7a357_fk_lang_language_id;
ALTER TABLE IF EXISTS ONLY public.trans_announcement DROP CONSTRAINT IF EXISTS trans_announcement_component_id_72695410_fk_trans_component_id;
ALTER TABLE IF EXISTS ONLY public.trans_announcement DROP CONSTRAINT IF EXISTS trans_announcement_category_id_913f87b9_fk_trans_category_id;
ALTER TABLE IF EXISTS ONLY public.trans_alert DROP CONSTRAINT IF EXISTS trans_alert_component_id_e9bdfacb_fk_trans_component_id;
ALTER TABLE IF EXISTS ONLY public.social_auth_usersocialauth DROP CONSTRAINT IF EXISTS social_auth_usersoci_user_id_17d28448_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.screenshots_screenshot DROP CONSTRAINT IF EXISTS screenshots_screenshot_user_id_9350e149_fk_weblate_auth_user_id;
ALTER TABLE IF EXISTS ONLY public.screenshots_screenshot_units DROP CONSTRAINT IF EXISTS screenshots_screenshot_units_unit_id_2b24914f_fk_trans_unit_id;
ALTER TABLE IF EXISTS ONLY public.screenshots_screenshot DROP CONSTRAINT IF EXISTS screenshots_screensh_translation_id_3b239850_fk_trans_tra;
ALTER TABLE IF EXISTS ONLY public.screenshots_screenshot_units DROP CONSTRAINT IF EXISTS screenshots_screensh_screenshot_id_03db0a11_fk_screensho;
ALTER TABLE IF EXISTS ONLY public.otp_totp_totpdevice DROP CONSTRAINT IF EXISTS otp_totp_totpdevice_user_id_0fb18292_fk_weblate_auth_user_id;
ALTER TABLE IF EXISTS ONLY public.otp_static_statictoken DROP CONSTRAINT IF EXISTS otp_static_statictok_device_id_74b7c7d1_fk_otp_stati;
ALTER TABLE IF EXISTS ONLY public.otp_static_staticdevice DROP CONSTRAINT IF EXISTS otp_static_staticdev_user_id_7f9cff2b_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.memory_memory DROP CONSTRAINT IF EXISTS memory_memory_user_id_1f05b3bb_fk_weblate_auth_user_id;
ALTER TABLE IF EXISTS ONLY public.memory_memory DROP CONSTRAINT IF EXISTS memory_memory_target_language_id_c44dca3c_fk_lang_language_id;
ALTER TABLE IF EXISTS ONLY public.memory_memory DROP CONSTRAINT IF EXISTS memory_memory_source_language_id_c53ef4ff_fk_lang_language_id;
ALTER TABLE IF EXISTS ONLY public.memory_memory DROP CONSTRAINT IF EXISTS memory_memory_project_id_f26cda43_fk_trans_project_id;
ALTER TABLE IF EXISTS ONLY public.lang_plural DROP CONSTRAINT IF EXISTS lang_plural_language_id_b5f4646a_fk_lang_language_id;
ALTER TABLE IF EXISTS ONLY public.fonts_fontoverride DROP CONSTRAINT IF EXISTS fonts_fontoverride_language_id_ccb8c819_fk_lang_language_id;
ALTER TABLE IF EXISTS ONLY public.fonts_fontoverride DROP CONSTRAINT IF EXISTS fonts_fontoverride_group_id_cab65c09_fk_fonts_fontgroup_id;
ALTER TABLE IF EXISTS ONLY public.fonts_fontoverride DROP CONSTRAINT IF EXISTS fonts_fontoverride_font_id_ae703c52_fk_fonts_font_id;
ALTER TABLE IF EXISTS ONLY public.fonts_fontgroup DROP CONSTRAINT IF EXISTS fonts_fontgroup_project_id_5d47adf5_fk_trans_project_id;
ALTER TABLE IF EXISTS ONLY public.fonts_fontgroup DROP CONSTRAINT IF EXISTS fonts_fontgroup_font_id_e4c04e1d_fk_fonts_font_id;
ALTER TABLE IF EXISTS ONLY public.fonts_font DROP CONSTRAINT IF EXISTS fonts_font_user_id_5897e323_fk_weblate_auth_user_id;
ALTER TABLE IF EXISTS ONLY public.fonts_font DROP CONSTRAINT IF EXISTS fonts_font_project_id_855704e0_fk_trans_project_id;
ALTER TABLE IF EXISTS ONLY public.django_otp_webauthn_webauthnuserhandle DROP CONSTRAINT IF EXISTS django_otp_webauthn__user_id_47f479ce_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.django_otp_webauthn_webauthncredential DROP CONSTRAINT IF EXISTS django_otp_webauthn__user_id_023391d8_fk_weblate_a;
ALTER TABLE IF EXISTS ONLY public.django_otp_webauthn_webauthnattestation DROP CONSTRAINT IF EXISTS django_otp_webauthn__credential_id_b2e6f7e8_fk_django_ot;
ALTER TABLE IF EXISTS ONLY public.django_celery_beat_periodictask DROP CONSTRAINT IF EXISTS django_celery_beat_p_solar_id_a87ce72c_fk_django_ce;
ALTER TABLE IF EXISTS ONLY public.django_celery_beat_periodictask DROP CONSTRAINT IF EXISTS django_celery_beat_p_interval_id_a8ca27da_fk_django_ce;
ALTER TABLE IF EXISTS ONLY public.django_celery_beat_periodictask DROP CONSTRAINT IF EXISTS django_celery_beat_p_crontab_id_d3cba168_fk_django_ce;
ALTER TABLE IF EXISTS ONLY public.django_celery_beat_periodictask DROP CONSTRAINT IF EXISTS django_celery_beat_p_clocked_id_47a69f82_fk_django_ce;
ALTER TABLE IF EXISTS ONLY public.django_admin_log DROP CONSTRAINT IF EXISTS django_admin_log_user_id_c564eba6_fk_weblate_auth_user_id;
ALTER TABLE IF EXISTS ONLY public.django_admin_log DROP CONSTRAINT IF EXISTS django_admin_log_content_type_id_c4bce8eb_fk_django_co;
ALTER TABLE IF EXISTS ONLY public.checks_check DROP CONSTRAINT IF EXISTS checks_check_unit_id_c312ecef_fk_trans_unit_id;
ALTER TABLE IF EXISTS ONLY public.authtoken_token DROP CONSTRAINT IF EXISTS authtoken_token_user_id_35299eff_fk_weblate_auth_user_id;
ALTER TABLE IF EXISTS ONLY public.auth_permission DROP CONSTRAINT IF EXISTS auth_permission_content_type_id_2f476e4b_fk_django_co;
ALTER TABLE IF EXISTS ONLY public.auth_group_permissions DROP CONSTRAINT IF EXISTS auth_group_permissions_group_id_b120cbf9_fk_auth_group_id;
ALTER TABLE IF EXISTS ONLY public.auth_group_permissions DROP CONSTRAINT IF EXISTS auth_group_permissio_permission_id_84c5c92e_fk_auth_perm;
ALTER TABLE IF EXISTS ONLY public.addons_event DROP CONSTRAINT IF EXISTS addons_event_addon_id_66d8d06c_fk_addons_addon_id;
ALTER TABLE IF EXISTS ONLY public.addons_addonactivitylog DROP CONSTRAINT IF EXISTS addons_addonactivitylog_addon_id_44e38f98_fk_addons_addon_id;
ALTER TABLE IF EXISTS ONLY public.addons_addonactivitylog DROP CONSTRAINT IF EXISTS addons_addonactivity_component_id_baafffdc_fk_trans_com;
ALTER TABLE IF EXISTS ONLY public.addons_addon DROP CONSTRAINT IF EXISTS addons_addon_project_id_d2181050_fk_trans_project_id;
ALTER TABLE IF EXISTS ONLY public.addons_addon DROP CONSTRAINT IF EXISTS addons_addon_component_id_87dbd2fc_fk_trans_component_id;
ALTER TABLE IF EXISTS ONLY public.accounts_verifiedemail DROP CONSTRAINT IF EXISTS accounts_verifiedemail_social_id_c6d8a262_fk;
ALTER TABLE IF EXISTS ONLY public.accounts_subscription DROP CONSTRAINT IF EXISTS accounts_subscription_user_id_980c85f5_fk_weblate_auth_user_id;
ALTER TABLE IF EXISTS ONLY public.accounts_subscription DROP CONSTRAINT IF EXISTS accounts_subscription_project_id_0ac0474e_fk_trans_project_id;
ALTER TABLE IF EXISTS ONLY public.accounts_subscription DROP CONSTRAINT IF EXISTS accounts_subscriptio_component_id_f17fa0c7_fk_trans_com;
ALTER TABLE IF EXISTS ONLY public.accounts_profile_watched DROP CONSTRAINT IF EXISTS accounts_profile_wat_project_id_b8975f00_fk_trans_pro;
ALTER TABLE IF EXISTS ONLY public.accounts_profile_watched DROP CONSTRAINT IF EXISTS accounts_profile_wat_profile_id_adce7487_fk_accounts_;
ALTER TABLE IF EXISTS ONLY public.accounts_profile DROP CONSTRAINT IF EXISTS accounts_profile_user_id_49a85d32_fk_weblate_auth_user_id;
ALTER TABLE IF EXISTS ONLY public.accounts_profile_secondary_languages DROP CONSTRAINT IF EXISTS accounts_profile_sec_profile_id_acf6974e_fk_accounts_;
ALTER TABLE IF EXISTS ONLY public.accounts_profile_secondary_languages DROP CONSTRAINT IF EXISTS accounts_profile_sec_language_id_e0f1e325_fk_lang_lang;
ALTER TABLE IF EXISTS ONLY public.accounts_profile_languages DROP CONSTRAINT IF EXISTS accounts_profile_lan_profile_id_eabf6019_fk_accounts_;
ALTER TABLE IF EXISTS ONLY public.accounts_profile_languages DROP CONSTRAINT IF EXISTS accounts_profile_lan_language_id_194609ba_fk_lang_lang;
ALTER TABLE IF EXISTS ONLY public.accounts_profile DROP CONSTRAINT IF EXISTS accounts_profile_dashboard_component__4730151f_fk_trans_com;
ALTER TABLE IF EXISTS ONLY public.accounts_auditlog DROP CONSTRAINT IF EXISTS accounts_auditlog_user_id_1dfbca79_fk_weblate_auth_user_id;
DROP INDEX IF EXISTS public.wladmin_supportstatus_expiry_2855a549;
DROP INDEX IF EXISTS public.wladmin_supportstatus_enabled_fbe08b47;
DROP INDEX IF EXISTS public.wladmin_configurationerror_name_99ad2168_like;
DROP INDEX IF EXISTS public.wladmin_configurationerror_ignored_8a22575f;
DROP INDEX IF EXISTS public.wladmin_con_ignored_fb498d_idx;
DROP INDEX IF EXISTS public.wladmin_backuplog_service_id_10292c2d;
DROP INDEX IF EXISTS public.wladmin_backuplog_event_fbf23e08_like;
DROP INDEX IF EXISTS public.wladmin_backuplog_event_fbf23e08;
DROP INDEX IF EXISTS public.weblate_auth_userblock_project_id_44aae0be;
DROP INDEX IF EXISTS public.weblate_auth_user_username_d226e4a0_like;
DROP INDEX IF EXISTS public.weblate_auth_user_username_ci;
DROP INDEX IF EXISTS public.weblate_auth_user_is_bot_f4b1c6fb;
DROP INDEX IF EXISTS public.weblate_auth_user_groups_user_id_37e61ff1;
DROP INDEX IF EXISTS public.weblate_auth_user_groups_group_id_48c0a977;
DROP INDEX IF EXISTS public.weblate_auth_user_email_ci;
DROP INDEX IF EXISTS public.weblate_auth_user_email_aaabd769_like;
DROP INDEX IF EXISTS public.weblate_auth_role_permissions_role_id_fa163124;
DROP INDEX IF EXISTS public.weblate_auth_role_permissions_permission_id_d0650152;
DROP INDEX IF EXISTS public.weblate_auth_role_name_97854f8d_like;
DROP INDEX IF EXISTS public.weblate_auth_permission_codename_b551931f_like;
DROP INDEX IF EXISTS public.weblate_auth_invitation_user_id_6a0c6dec;
DROP INDEX IF EXISTS public.weblate_auth_invitation_group_id_07a52aff;
DROP INDEX IF EXISTS public.weblate_auth_invitation_author_id_a713ef92;
DROP INDEX IF EXISTS public.weblate_auth_group_roles_role_id_de6300ca;
DROP INDEX IF EXISTS public.weblate_auth_group_roles_group_id_ed18f8d0;
DROP INDEX IF EXISTS public.weblate_auth_group_projects_project_id_26b8e2b6;
DROP INDEX IF EXISTS public.weblate_auth_group_projects_group_id_f713a220;
DROP INDEX IF EXISTS public.weblate_auth_group_languages_language_id_4b7f5d81;
DROP INDEX IF EXISTS public.weblate_auth_group_languages_group_id_aa12d0a6;
DROP INDEX IF EXISTS public.weblate_auth_group_defining_project_id_b2ad81a7;
DROP INDEX IF EXISTS public.weblate_auth_group_components_group_id_a07e20aa;
DROP INDEX IF EXISTS public.weblate_auth_group_components_component_id_2b53d012;
DROP INDEX IF EXISTS public.weblate_auth_group_componentlists_group_id_7af40eb9;
DROP INDEX IF EXISTS public.weblate_auth_group_componentlists_componentlist_id_b59f8fe9;
DROP INDEX IF EXISTS public.weblate_auth_group_admins_user_id_f5851c1b;
DROP INDEX IF EXISTS public.weblate_auth_group_admins_group_id_fa29ae29;
DROP INDEX IF EXISTS public.weblate_auth_autogroup_group_id_37b7ff0b;
DROP INDEX IF EXISTS public.webauthncredential_sha256_idx;
DROP INDEX IF EXISTS public.unit_target_fulltext;
DROP INDEX IF EXISTS public.unit_source_fulltext;
DROP INDEX IF EXISTS public.unit_note_fulltext;
DROP INDEX IF EXISTS public.unit_location_fulltext;
DROP INDEX IF EXISTS public.unit_explanation_fulltext;
DROP INDEX IF EXISTS public.unit_context_fulltext;
DROP INDEX IF EXISTS public.trans_workflowsetting_project_id_32daa6c8;
DROP INDEX IF EXISTS public.trans_workflowsetting_language_id_fcb1fa15;
DROP INDEX IF EXISTS public.trans_vote_user_id_86a644fd;
DROP INDEX IF EXISTS public.trans_variant_defining_units_variant_id_20848c13;
DROP INDEX IF EXISTS public.trans_variant_defining_units_unit_id_f692977b;
DROP INDEX IF EXISTS public.trans_unit_variant_id_c3315c70;
DROP INDEX IF EXISTS public.trans_unit_target_md5;
DROP INDEX IF EXISTS public.trans_unit_source_unit_id_7a735f87;
DROP INDEX IF EXISTS public.trans_unit_source_md5;
DROP INDEX IF EXISTS public.trans_unit_labels_unit_id_a3c2ddc5;
DROP INDEX IF EXISTS public.trans_unit_labels_label_id_4ca92ebd;
DROP INDEX IF EXISTS public.trans_unit_context_md5;
DROP INDEX IF EXISTS public.trans_unit_automatically_translated_96d2b31d;
DROP INDEX IF EXISTS public.trans_translation_plural_id_5cf36dc7;
DROP INDEX IF EXISTS public.trans_translation_language_id_030f0b30;
DROP INDEX IF EXISTS public.trans_suggestion_user_id_69ce0c2b;
DROP INDEX IF EXISTS public.trans_suggestion_unit_id_eb46fceb;
DROP INDEX IF EXISTS public.trans_project_slug_77cd973b_like;
DROP INDEX IF EXISTS public.trans_project_secondary_language_id_57e84b09;
DROP INDEX IF EXISTS public.trans_project_name_a3285a23_like;
DROP INDEX IF EXISTS public.trans_project_access_control_c17e787a;
DROP INDEX IF EXISTS public.trans_pendingunitchange_unit_id_eda769c3;
DROP INDEX IF EXISTS public.trans_pendingunitchange_timestamp_1f1271fd;
DROP INDEX IF EXISTS public.trans_pendingunitchange_state_bbbe001f;
DROP INDEX IF EXISTS public.trans_pendingunitchange_author_id_38073ef3;
DROP INDEX IF EXISTS public.trans_contributoragreement_component_id_31bafbef;
DROP INDEX IF EXISTS public.trans_componentlist_slug_05ac37c2_like;
DROP INDEX IF EXISTS public.trans_componentlist_show_dashboard_1394f78f;
DROP INDEX IF EXISTS public.trans_componentlist_name_93196759_like;
DROP INDEX IF EXISTS public.trans_componentlist_components_componentlist_id_44d9ba8f;
DROP INDEX IF EXISTS public.trans_componentlist_components_component_id_5642ff5c;
DROP INDEX IF EXISTS public.trans_component_source_language_id_2610b49e;
DROP INDEX IF EXISTS public.trans_component_slug_5bd48be1_like;
DROP INDEX IF EXISTS public.trans_component_slug_5bd48be1;
DROP INDEX IF EXISTS public.trans_component_secondary_language_id_496a8d45;
DROP INDEX IF EXISTS public.trans_component_restricted_ec682d06;
DROP INDEX IF EXISTS public.trans_component_links_project_id_840f1e11;
DROP INDEX IF EXISTS public.trans_component_links_component_id_2342af45;
DROP INDEX IF EXISTS public.trans_component_linked_component_id_82b0de9e;
DROP INDEX IF EXISTS public.trans_component_is_glossary_b4b922b7;
DROP INDEX IF EXISTS public.trans_component_category_id_7c9c5306;
DROP INDEX IF EXISTS public.trans_compo_project_d044e1_idx;
DROP INDEX IF EXISTS public.trans_comment_user_id_c2f200eb;
DROP INDEX IF EXISTS public.trans_comment_unit_id_73ca7c89;
DROP INDEX IF EXISTS public.trans_comment_timestamp_1148a5ab;
DROP INDEX IF EXISTS public.trans_comment_resolved_81cae7f4;
DROP INDEX IF EXISTS public.trans_change_user_idx;
DROP INDEX IF EXISTS public.trans_change_user_id_8d1225f9;
DROP INDEX IF EXISTS public.trans_change_unit_idx;
DROP INDEX IF EXISTS public.trans_change_translation_idx;
DROP INDEX IF EXISTS public.trans_change_suggestion_id_0e61f1cb;
DROP INDEX IF EXISTS public.trans_change_screenshot_id_ebbee35e;
DROP INDEX IF EXISTS public.trans_change_project_idx;
DROP INDEX IF EXISTS public.trans_change_prj_language_idx;
DROP INDEX IF EXISTS public.trans_change_language_idx;
DROP INDEX IF EXISTS public.trans_change_component_idx;
DROP INDEX IF EXISTS public.trans_change_comment_id_9702b436;
DROP INDEX IF EXISTS public.trans_change_category_idx;
DROP INDEX IF EXISTS public.trans_change_announcement_id_1ad27981;
DROP INDEX IF EXISTS public.trans_change_alert_id_34808078;
DROP INDEX IF EXISTS public.trans_change_action_idx;
DROP INDEX IF EXISTS public.trans_category_slug_52f13beb_like;
DROP INDEX IF EXISTS public.trans_category_slug_52f13beb;
DROP INDEX IF EXISTS public.trans_category_project_id_7dc717ed;
DROP INDEX IF EXISTS public.trans_category_category_id_0f21e824;
DROP INDEX IF EXISTS public.trans_autocomponentlist_componentlist_id_9ff87f21;
DROP INDEX IF EXISTS public.trans_announcement_project_id_3713e8a9;
DROP INDEX IF EXISTS public.trans_announcement_language_id_f5f7a357;
DROP INDEX IF EXISTS public.trans_announcement_expiry_a06d62a1;
DROP INDEX IF EXISTS public.trans_announcement_component_id_72695410;
DROP INDEX IF EXISTS public.trans_announcement_category_id_913f87b9;
DROP INDEX IF EXISTS public.trans_alert_dismissed_93e9b793;
DROP INDEX IF EXISTS public.suggestion_target_fulltext;
DROP INDEX IF EXISTS public.social_auth_usersocialauth_user_id_17d28448;
DROP INDEX IF EXISTS public.social_auth_usersocialauth_uid_796e51dc_like;
DROP INDEX IF EXISTS public.social_auth_usersocialauth_uid_796e51dc;
DROP INDEX IF EXISTS public.social_auth_partial_token_3017fea3_like;
DROP INDEX IF EXISTS public.social_auth_partial_token_3017fea3;
DROP INDEX IF EXISTS public.social_auth_partial_timestamp_50f2119f;
DROP INDEX IF EXISTS public.social_auth_code_timestamp_176b341f;
DROP INDEX IF EXISTS public.social_auth_code_code_a2393167_like;
DROP INDEX IF EXISTS public.social_auth_code_code_a2393167;
DROP INDEX IF EXISTS public.screenshots_screenshot_user_id_9350e149;
DROP INDEX IF EXISTS public.screenshots_screenshot_units_unit_id_2b24914f;
DROP INDEX IF EXISTS public.screenshots_screenshot_units_screenshot_id_03db0a11;
DROP INDEX IF EXISTS public.screenshots_screenshot_translation_id_3b239850;
DROP INDEX IF EXISTS public.otp_totp_totpdevice_user_id_0fb18292;
DROP INDEX IF EXISTS public.otp_static_statictoken_token_d0a51866_like;
DROP INDEX IF EXISTS public.otp_static_statictoken_token_d0a51866;
DROP INDEX IF EXISTS public.otp_static_statictoken_device_id_74b7c7d1;
DROP INDEX IF EXISTS public.otp_static_staticdevice_user_id_7f9cff2b;
DROP INDEX IF EXISTS public.memory_source_trgm;
DROP INDEX IF EXISTS public.memory_memory_user_id_1f05b3bb;
DROP INDEX IF EXISTS public.memory_memory_target_language_id_c44dca3c;
DROP INDEX IF EXISTS public.memory_memory_source_language_id_c53ef4ff;
DROP INDEX IF EXISTS public.memory_memory_project_id_f26cda43;
DROP INDEX IF EXISTS public.memory_md5_index;
DROP INDEX IF EXISTS public.memory_from_file;
DROP INDEX IF EXISTS public.lang_plural_language_id_b5f4646a;
DROP INDEX IF EXISTS public.lang_language_code_764a7a1d_like;
DROP INDEX IF EXISTS public.fonts_fontoverride_language_id_ccb8c819;
DROP INDEX IF EXISTS public.fonts_fontoverride_font_id_ae703c52;
DROP INDEX IF EXISTS public.fonts_fontgroup_name_cf198a4d_like;
DROP INDEX IF EXISTS public.fonts_fontgroup_name_cf198a4d;
DROP INDEX IF EXISTS public.fonts_fontgroup_font_id_e4c04e1d;
DROP INDEX IF EXISTS public.fonts_font_user_id_5897e323;
DROP INDEX IF EXISTS public.fonts_font_project_id_855704e0;
DROP INDEX IF EXISTS public.django_session_session_key_c0390e0f_like;
DROP INDEX IF EXISTS public.django_session_expire_date_a5c62663;
DROP INDEX IF EXISTS public.django_otp_webauthn_webauthnuserhandle_handle_hex_ebcf77a1_like;
DROP INDEX IF EXISTS public.django_otp_webauthn_webauthncredential_user_id_023391d8;
DROP INDEX IF EXISTS public.django_otp_webauthn_weba_credential_id_sha256_1a385252_like;
DROP INDEX IF EXISTS public.django_celery_beat_periodictask_solar_id_a87ce72c;
DROP INDEX IF EXISTS public.django_celery_beat_periodictask_name_265a36b7_like;
DROP INDEX IF EXISTS public.django_celery_beat_periodictask_interval_id_a8ca27da;
DROP INDEX IF EXISTS public.django_celery_beat_periodictask_crontab_id_d3cba168;
DROP INDEX IF EXISTS public.django_celery_beat_periodictask_clocked_id_47a69f82;
DROP INDEX IF EXISTS public.django_admin_log_user_id_c564eba6;
DROP INDEX IF EXISTS public.django_admin_log_content_type_id_c4bce8eb;
DROP INDEX IF EXISTS public.comment_comment_fulltext;
DROP INDEX IF EXISTS public.checks_check_dismissed_a11836a3;
DROP INDEX IF EXISTS public.authtoken_token_key_10f0b77e_like;
DROP INDEX IF EXISTS public.auth_permission_content_type_id_2f476e4b;
DROP INDEX IF EXISTS public.auth_group_permissions_permission_id_84c5c92e;
DROP INDEX IF EXISTS public.auth_group_permissions_group_id_b120cbf9;
DROP INDEX IF EXISTS public.auth_group_name_a6ea08ec_like;
DROP INDEX IF EXISTS public.addons_addonactivitylog_component_id_baafffdc;
DROP INDEX IF EXISTS public.addons_addonactivitylog_addon_id_44e38f98;
DROP INDEX IF EXISTS public.addons_addon_repo_scope_20c74be8;
DROP INDEX IF EXISTS public.addons_addon_project_id_d2181050;
DROP INDEX IF EXISTS public.addons_addon_component_id_87dbd2fc;
DROP INDEX IF EXISTS public.accounts_verifiedemail_social_id_c6d8a262;
DROP INDEX IF EXISTS public.accounts_verifiedemail_email;
DROP INDEX IF EXISTS public.accounts_subscription_user_id_980c85f5;
DROP INDEX IF EXISTS public.accounts_subscription_project_id_0ac0474e;
DROP INDEX IF EXISTS public.accounts_subscription_component_id_f17fa0c7;
DROP INDEX IF EXISTS public.accounts_profile_watched_project_id_b8975f00;
DROP INDEX IF EXISTS public.accounts_profile_watched_profile_id_adce7487;
DROP INDEX IF EXISTS public.accounts_profile_uploaded_f5223324;
DROP INDEX IF EXISTS public.accounts_profile_translated_45d8856d;
DROP INDEX IF EXISTS public.accounts_profile_suggested_8e0fb145;
DROP INDEX IF EXISTS public.accounts_profile_secondary_languages_profile_id_acf6974e;
DROP INDEX IF EXISTS public.accounts_profile_secondary_languages_language_id_e0f1e325;
DROP INDEX IF EXISTS public.accounts_profile_languages_profile_id_eabf6019;
DROP INDEX IF EXISTS public.accounts_profile_languages_language_id_194609ba;
DROP INDEX IF EXISTS public.accounts_profile_dashboard_component_list_id_4730151f;
DROP INDEX IF EXISTS public.accounts_profile_commented_8e3a8722;
DROP INDEX IF EXISTS public.accounts_auditlog_user_id_1dfbca79;
DROP INDEX IF EXISTS public.accounts_auditlog_timestamp_fc82620d;
DROP INDEX IF EXISTS public.accounts_auditlog_activity_8f58593c_like;
DROP INDEX IF EXISTS public.accounts_auditlog_activity_8f58593c;
ALTER TABLE IF EXISTS ONLY public.wladmin_supportstatus DROP CONSTRAINT IF EXISTS wladmin_supportstatus_pkey;
ALTER TABLE IF EXISTS ONLY public.wladmin_configurationerror DROP CONSTRAINT IF EXISTS wladmin_configurationerror_pkey;
ALTER TABLE IF EXISTS ONLY public.wladmin_configurationerror DROP CONSTRAINT IF EXISTS wladmin_configurationerror_name_key;
ALTER TABLE IF EXISTS ONLY public.wladmin_backupservice DROP CONSTRAINT IF EXISTS wladmin_backupservice_pkey;
ALTER TABLE IF EXISTS ONLY public.wladmin_backuplog DROP CONSTRAINT IF EXISTS wladmin_backuplog_pkey;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_userblock DROP CONSTRAINT IF EXISTS weblate_auth_userblock_user_id_project_id_7e74a707_uniq;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_userblock DROP CONSTRAINT IF EXISTS weblate_auth_userblock_pkey;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_user DROP CONSTRAINT IF EXISTS weblate_auth_user_username_key;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_user DROP CONSTRAINT IF EXISTS weblate_auth_user_pkey;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_user_groups DROP CONSTRAINT IF EXISTS weblate_auth_user_groups_user_id_group_id_16cfc05b_uniq;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_user_groups DROP CONSTRAINT IF EXISTS weblate_auth_user_groups_pkey;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_user DROP CONSTRAINT IF EXISTS weblate_auth_user_email_aaabd769_uniq;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_role DROP CONSTRAINT IF EXISTS weblate_auth_role_pkey;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_role_permissions DROP CONSTRAINT IF EXISTS weblate_auth_role_permissions_pkey;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_role_permissions DROP CONSTRAINT IF EXISTS weblate_auth_role_permis_role_id_permission_id_58e25e9f_uniq;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_role DROP CONSTRAINT IF EXISTS weblate_auth_role_name_key;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_permission DROP CONSTRAINT IF EXISTS weblate_auth_permission_pkey;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_permission DROP CONSTRAINT IF EXISTS weblate_auth_permission_codename_key;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_invitation DROP CONSTRAINT IF EXISTS weblate_auth_invitation_pkey;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_roles DROP CONSTRAINT IF EXISTS weblate_auth_group_roles_pkey;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_roles DROP CONSTRAINT IF EXISTS weblate_auth_group_roles_group_id_role_id_9662132c_uniq;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_projects DROP CONSTRAINT IF EXISTS weblate_auth_group_projects_pkey;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_projects DROP CONSTRAINT IF EXISTS weblate_auth_group_projects_group_id_project_id_2a91e8e2_uniq;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group DROP CONSTRAINT IF EXISTS weblate_auth_group_pkey;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_languages DROP CONSTRAINT IF EXISTS weblate_auth_group_languages_pkey;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_languages DROP CONSTRAINT IF EXISTS weblate_auth_group_languages_group_id_language_id_c34f29db_uniq;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_components DROP CONSTRAINT IF EXISTS weblate_auth_group_components_pkey;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_componentlists DROP CONSTRAINT IF EXISTS weblate_auth_group_componentlists_pkey;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_componentlists DROP CONSTRAINT IF EXISTS weblate_auth_group_compo_group_id_componentlist_i_4a7f6bad_uniq;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_components DROP CONSTRAINT IF EXISTS weblate_auth_group_compo_group_id_component_id_57e2f006_uniq;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_admins DROP CONSTRAINT IF EXISTS weblate_auth_group_admins_pkey;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_group_admins DROP CONSTRAINT IF EXISTS weblate_auth_group_admins_group_id_user_id_8c69bc69_uniq;
ALTER TABLE IF EXISTS ONLY public.weblate_auth_autogroup DROP CONSTRAINT IF EXISTS weblate_auth_autogroup_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_workflowsetting DROP CONSTRAINT IF EXISTS trans_workflowsetting_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_vote DROP CONSTRAINT IF EXISTS trans_vote_suggestion_id_user_id_fe8bdce2_uniq;
ALTER TABLE IF EXISTS ONLY public.trans_vote DROP CONSTRAINT IF EXISTS trans_vote_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_variant DROP CONSTRAINT IF EXISTS trans_variant_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_variant_defining_units DROP CONSTRAINT IF EXISTS trans_variant_defining_units_variant_id_unit_id_cf32c9b3_uniq;
ALTER TABLE IF EXISTS ONLY public.trans_variant_defining_units DROP CONSTRAINT IF EXISTS trans_variant_defining_units_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_variant DROP CONSTRAINT IF EXISTS trans_variant_component_id_key_variant_regex_457e8bdd_uniq;
ALTER TABLE IF EXISTS ONLY public.trans_unit DROP CONSTRAINT IF EXISTS trans_unit_translation_id_id_hash_ab945589_uniq;
ALTER TABLE IF EXISTS ONLY public.trans_unit DROP CONSTRAINT IF EXISTS trans_unit_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_unit_labels DROP CONSTRAINT IF EXISTS trans_unit_labels_unit_id_label_id_6ab4c307_uniq;
ALTER TABLE IF EXISTS ONLY public.trans_unit_labels DROP CONSTRAINT IF EXISTS trans_unit_labels_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_translation DROP CONSTRAINT IF EXISTS trans_translation_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_translation DROP CONSTRAINT IF EXISTS trans_translation_component_id_language_id_331fa2a7_uniq;
ALTER TABLE IF EXISTS ONLY public.trans_suggestion DROP CONSTRAINT IF EXISTS trans_suggestion_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_project DROP CONSTRAINT IF EXISTS trans_project_slug_key;
ALTER TABLE IF EXISTS ONLY public.trans_project DROP CONSTRAINT IF EXISTS trans_project_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_project DROP CONSTRAINT IF EXISTS trans_project_name_key;
ALTER TABLE IF EXISTS ONLY public.trans_pendingunitchange DROP CONSTRAINT IF EXISTS trans_pendingunitchange_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_label DROP CONSTRAINT IF EXISTS trans_label_project_id_name_ef6f7cca_uniq;
ALTER TABLE IF EXISTS ONLY public.trans_label DROP CONSTRAINT IF EXISTS trans_label_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_contributoragreement DROP CONSTRAINT IF EXISTS trans_contributoragreement_user_id_component_id_4d86a703_uniq;
ALTER TABLE IF EXISTS ONLY public.trans_contributoragreement DROP CONSTRAINT IF EXISTS trans_contributoragreement_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_componentlist DROP CONSTRAINT IF EXISTS trans_componentlist_slug_key;
ALTER TABLE IF EXISTS ONLY public.trans_componentlist DROP CONSTRAINT IF EXISTS trans_componentlist_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_componentlist DROP CONSTRAINT IF EXISTS trans_componentlist_name_key;
ALTER TABLE IF EXISTS ONLY public.trans_componentlist_components DROP CONSTRAINT IF EXISTS trans_componentlist_components_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_componentlist_components DROP CONSTRAINT IF EXISTS trans_componentlist_comp_componentlist_id_compone_99528c41_uniq;
ALTER TABLE IF EXISTS ONLY public.trans_component DROP CONSTRAINT IF EXISTS trans_component_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_component_links DROP CONSTRAINT IF EXISTS trans_component_links_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_component_links DROP CONSTRAINT IF EXISTS trans_component_links_component_id_project_id_8e996e95_uniq;
ALTER TABLE IF EXISTS ONLY public.trans_comment DROP CONSTRAINT IF EXISTS trans_comment_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_change DROP CONSTRAINT IF EXISTS trans_change_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_category DROP CONSTRAINT IF EXISTS trans_category_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_autocomponentlist DROP CONSTRAINT IF EXISTS trans_autocomponentlist_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_announcement DROP CONSTRAINT IF EXISTS trans_announcement_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_alert DROP CONSTRAINT IF EXISTS trans_alert_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_alert DROP CONSTRAINT IF EXISTS trans_alert_component_id_name_4a5a9b1d_uniq;
ALTER TABLE IF EXISTS ONLY public.social_auth_usersocialauth DROP CONSTRAINT IF EXISTS social_auth_usersocialauth_provider_uid_e6b5e668_uniq;
ALTER TABLE IF EXISTS ONLY public.social_auth_usersocialauth DROP CONSTRAINT IF EXISTS social_auth_usersocialauth_pkey;
ALTER TABLE IF EXISTS ONLY public.social_auth_partial DROP CONSTRAINT IF EXISTS social_auth_partial_pkey;
ALTER TABLE IF EXISTS ONLY public.social_auth_nonce DROP CONSTRAINT IF EXISTS social_auth_nonce_server_url_timestamp_salt_f6284463_uniq;
ALTER TABLE IF EXISTS ONLY public.social_auth_nonce DROP CONSTRAINT IF EXISTS social_auth_nonce_pkey;
ALTER TABLE IF EXISTS ONLY public.social_auth_code DROP CONSTRAINT IF EXISTS social_auth_code_pkey;
ALTER TABLE IF EXISTS ONLY public.social_auth_code DROP CONSTRAINT IF EXISTS social_auth_code_email_code_801b2d02_uniq;
ALTER TABLE IF EXISTS ONLY public.social_auth_association DROP CONSTRAINT IF EXISTS social_auth_association_server_url_handle_078befa2_uniq;
ALTER TABLE IF EXISTS ONLY public.social_auth_association DROP CONSTRAINT IF EXISTS social_auth_association_pkey;
ALTER TABLE IF EXISTS ONLY public.screenshots_screenshot_units DROP CONSTRAINT IF EXISTS screenshots_screenshot_units_pkey;
ALTER TABLE IF EXISTS ONLY public.screenshots_screenshot_units DROP CONSTRAINT IF EXISTS screenshots_screenshot_u_screenshot_id_unit_id_c8f65eb6_uniq;
ALTER TABLE IF EXISTS ONLY public.screenshots_screenshot DROP CONSTRAINT IF EXISTS screenshots_screenshot_pkey;
ALTER TABLE IF EXISTS ONLY public.otp_totp_totpdevice DROP CONSTRAINT IF EXISTS otp_totp_totpdevice_pkey;
ALTER TABLE IF EXISTS ONLY public.otp_static_statictoken DROP CONSTRAINT IF EXISTS otp_static_statictoken_pkey;
ALTER TABLE IF EXISTS ONLY public.otp_static_staticdevice DROP CONSTRAINT IF EXISTS otp_static_staticdevice_pkey;
ALTER TABLE IF EXISTS ONLY public.metrics_metric DROP CONSTRAINT IF EXISTS metrics_metric_scope_relation_secondary_date_f0ac693e_uniq;
ALTER TABLE IF EXISTS ONLY public.metrics_metric DROP CONSTRAINT IF EXISTS metrics_metric_pkey;
ALTER TABLE IF EXISTS ONLY public.memory_memory DROP CONSTRAINT IF EXISTS memory_memory_pkey;
ALTER TABLE IF EXISTS ONLY public.lang_plural DROP CONSTRAINT IF EXISTS lang_plural_pkey;
ALTER TABLE IF EXISTS ONLY public.lang_language DROP CONSTRAINT IF EXISTS lang_language_pkey;
ALTER TABLE IF EXISTS ONLY public.lang_language DROP CONSTRAINT IF EXISTS lang_language_code_key;
ALTER TABLE IF EXISTS ONLY public.fonts_fontoverride DROP CONSTRAINT IF EXISTS fonts_fontoverride_pkey;
ALTER TABLE IF EXISTS ONLY public.fonts_fontoverride DROP CONSTRAINT IF EXISTS fonts_fontoverride_group_id_language_id_92a46b82_uniq;
ALTER TABLE IF EXISTS ONLY public.fonts_fontgroup DROP CONSTRAINT IF EXISTS fonts_fontgroup_project_id_name_0b0fa938_uniq;
ALTER TABLE IF EXISTS ONLY public.fonts_fontgroup DROP CONSTRAINT IF EXISTS fonts_fontgroup_pkey;
ALTER TABLE IF EXISTS ONLY public.fonts_font DROP CONSTRAINT IF EXISTS fonts_font_pkey;
ALTER TABLE IF EXISTS ONLY public.fonts_font DROP CONSTRAINT IF EXISTS fonts_font_family_style_project_id_9f3996b3_uniq;
ALTER TABLE IF EXISTS ONLY public.django_session DROP CONSTRAINT IF EXISTS django_session_pkey;
ALTER TABLE IF EXISTS ONLY public.django_otp_webauthn_webauthnuserhandle DROP CONSTRAINT IF EXISTS django_otp_webauthn_webauthnuserhandle_pkey;
ALTER TABLE IF EXISTS ONLY public.django_otp_webauthn_webauthnuserhandle DROP CONSTRAINT IF EXISTS django_otp_webauthn_webauthnuserhandle_handle_hex_key;
ALTER TABLE IF EXISTS ONLY public.django_otp_webauthn_webauthncredential DROP CONSTRAINT IF EXISTS django_otp_webauthn_webauthncredential_pkey;
ALTER TABLE IF EXISTS ONLY public.django_otp_webauthn_webauthncredential DROP CONSTRAINT IF EXISTS django_otp_webauthn_webauthncredential_credential_id_sha256_key;
ALTER TABLE IF EXISTS ONLY public.django_otp_webauthn_webauthnattestation DROP CONSTRAINT IF EXISTS django_otp_webauthn_webauthnattestation_pkey;
ALTER TABLE IF EXISTS ONLY public.django_otp_webauthn_webauthnattestation DROP CONSTRAINT IF EXISTS django_otp_webauthn_webauthnattestation_credential_id_key;
ALTER TABLE IF EXISTS ONLY public.django_migrations DROP CONSTRAINT IF EXISTS django_migrations_pkey;
ALTER TABLE IF EXISTS ONLY public.django_content_type DROP CONSTRAINT IF EXISTS django_content_type_pkey;
ALTER TABLE IF EXISTS ONLY public.django_content_type DROP CONSTRAINT IF EXISTS django_content_type_app_label_model_76bd3d3b_uniq;
ALTER TABLE IF EXISTS ONLY public.django_celery_beat_solarschedule DROP CONSTRAINT IF EXISTS django_celery_beat_solarschedule_pkey;
ALTER TABLE IF EXISTS ONLY public.django_celery_beat_solarschedule DROP CONSTRAINT IF EXISTS django_celery_beat_solar_event_latitude_longitude_ba64999a_uniq;
ALTER TABLE IF EXISTS ONLY public.django_celery_beat_periodictasks DROP CONSTRAINT IF EXISTS django_celery_beat_periodictasks_pkey;
ALTER TABLE IF EXISTS ONLY public.django_celery_beat_periodictask DROP CONSTRAINT IF EXISTS django_celery_beat_periodictask_pkey;
ALTER TABLE IF EXISTS ONLY public.django_celery_beat_periodictask DROP CONSTRAINT IF EXISTS django_celery_beat_periodictask_name_key;
ALTER TABLE IF EXISTS ONLY public.django_celery_beat_intervalschedule DROP CONSTRAINT IF EXISTS django_celery_beat_intervalschedule_pkey;
ALTER TABLE IF EXISTS ONLY public.django_celery_beat_crontabschedule DROP CONSTRAINT IF EXISTS django_celery_beat_crontabschedule_pkey;
ALTER TABLE IF EXISTS ONLY public.django_celery_beat_clockedschedule DROP CONSTRAINT IF EXISTS django_celery_beat_clockedschedule_pkey;
ALTER TABLE IF EXISTS ONLY public.django_admin_log DROP CONSTRAINT IF EXISTS django_admin_log_pkey;
ALTER TABLE IF EXISTS ONLY public.configuration_setting DROP CONSTRAINT IF EXISTS configuration_setting_pkey;
ALTER TABLE IF EXISTS ONLY public.configuration_setting DROP CONSTRAINT IF EXISTS configuration_setting_category_name_5144ffcf_uniq;
ALTER TABLE IF EXISTS ONLY public.trans_component DROP CONSTRAINT IF EXISTS component_slug_unique;
ALTER TABLE IF EXISTS ONLY public.trans_component DROP CONSTRAINT IF EXISTS component_name_unique;
ALTER TABLE IF EXISTS ONLY public.checks_check DROP CONSTRAINT IF EXISTS checks_check_unit_id_name_ea73a317_uniq;
ALTER TABLE IF EXISTS ONLY public.checks_check DROP CONSTRAINT IF EXISTS checks_check_pkey;
ALTER TABLE IF EXISTS ONLY public.trans_category DROP CONSTRAINT IF EXISTS category_slug_unique;
ALTER TABLE IF EXISTS ONLY public.trans_category DROP CONSTRAINT IF EXISTS category_name_unique;
ALTER TABLE IF EXISTS ONLY public.authtoken_token DROP CONSTRAINT IF EXISTS authtoken_token_user_id_key;
ALTER TABLE IF EXISTS ONLY public.authtoken_token DROP CONSTRAINT IF EXISTS authtoken_token_pkey;
ALTER TABLE IF EXISTS ONLY public.auth_permission DROP CONSTRAINT IF EXISTS auth_permission_pkey;
ALTER TABLE IF EXISTS ONLY public.auth_permission DROP CONSTRAINT IF EXISTS auth_permission_content_type_id_codename_01ab375a_uniq;
ALTER TABLE IF EXISTS ONLY public.auth_group DROP CONSTRAINT IF EXISTS auth_group_pkey;
ALTER TABLE IF EXISTS ONLY public.auth_group_permissions DROP CONSTRAINT IF EXISTS auth_group_permissions_pkey;
ALTER TABLE IF EXISTS ONLY public.auth_group_permissions DROP CONSTRAINT IF EXISTS auth_group_permissions_group_id_permission_id_0cd325b0_uniq;
ALTER TABLE IF EXISTS ONLY public.auth_group DROP CONSTRAINT IF EXISTS auth_group_name_key;
ALTER TABLE IF EXISTS ONLY public.addons_event DROP CONSTRAINT IF EXISTS addons_event_pkey;
ALTER TABLE IF EXISTS ONLY public.addons_event DROP CONSTRAINT IF EXISTS addons_event_addon_id_event_2407a5ef_uniq;
ALTER TABLE IF EXISTS ONLY public.addons_addonactivitylog DROP CONSTRAINT IF EXISTS addons_addonactivitylog_pkey;
ALTER TABLE IF EXISTS ONLY public.addons_addon DROP CONSTRAINT IF EXISTS addons_addon_pkey;
ALTER TABLE IF EXISTS ONLY public.accounts_verifiedemail DROP CONSTRAINT IF EXISTS accounts_verifiedemail_pkey;
ALTER TABLE IF EXISTS ONLY public.accounts_subscription DROP CONSTRAINT IF EXISTS accounts_subscription_pkey;
ALTER TABLE IF EXISTS ONLY public.accounts_subscription DROP CONSTRAINT IF EXISTS accounts_subscription_notification_unique;
ALTER TABLE IF EXISTS ONLY public.accounts_profile_watched DROP CONSTRAINT IF EXISTS accounts_profile_watched_profile_id_project_id_678d8754_uniq;
ALTER TABLE IF EXISTS ONLY public.accounts_profile_watched DROP CONSTRAINT IF EXISTS accounts_profile_watched_pkey;
ALTER TABLE IF EXISTS ONLY public.accounts_profile DROP CONSTRAINT IF EXISTS accounts_profile_user_id_key;
ALTER TABLE IF EXISTS ONLY public.accounts_profile_secondary_languages DROP CONSTRAINT IF EXISTS accounts_profile_secondary_languages_pkey;
ALTER TABLE IF EXISTS ONLY public.accounts_profile_secondary_languages DROP CONSTRAINT IF EXISTS accounts_profile_seconda_profile_id_language_id_cb800d1e_uniq;
ALTER TABLE IF EXISTS ONLY public.accounts_profile DROP CONSTRAINT IF EXISTS accounts_profile_pkey;
ALTER TABLE IF EXISTS ONLY public.accounts_profile_languages DROP CONSTRAINT IF EXISTS accounts_profile_languages_profile_id_language_id_48036091_uniq;
ALTER TABLE IF EXISTS ONLY public.accounts_profile_languages DROP CONSTRAINT IF EXISTS accounts_profile_languages_pkey;
ALTER TABLE IF EXISTS ONLY public.accounts_auditlog DROP CONSTRAINT IF EXISTS accounts_auditlog_pkey;
DROP TABLE IF EXISTS public.wladmin_supportstatus;
DROP TABLE IF EXISTS public.wladmin_configurationerror;
DROP TABLE IF EXISTS public.wladmin_backupservice;
DROP TABLE IF EXISTS public.wladmin_backuplog;
DROP TABLE IF EXISTS public.weblate_auth_userblock;
DROP TABLE IF EXISTS public.weblate_auth_user_groups;
DROP TABLE IF EXISTS public.weblate_auth_user;
DROP TABLE IF EXISTS public.weblate_auth_role_permissions;
DROP TABLE IF EXISTS public.weblate_auth_role;
DROP TABLE IF EXISTS public.weblate_auth_permission;
DROP TABLE IF EXISTS public.weblate_auth_invitation;
DROP TABLE IF EXISTS public.weblate_auth_group_roles;
DROP TABLE IF EXISTS public.weblate_auth_group_projects;
DROP TABLE IF EXISTS public.weblate_auth_group_languages;
DROP TABLE IF EXISTS public.weblate_auth_group_components;
DROP TABLE IF EXISTS public.weblate_auth_group_componentlists;
DROP TABLE IF EXISTS public.weblate_auth_group_admins;
DROP TABLE IF EXISTS public.weblate_auth_group;
DROP TABLE IF EXISTS public.weblate_auth_autogroup;
DROP TABLE IF EXISTS public.trans_workflowsetting;
DROP TABLE IF EXISTS public.trans_vote;
DROP TABLE IF EXISTS public.trans_variant_defining_units;
DROP TABLE IF EXISTS public.trans_variant;
DROP TABLE IF EXISTS public.trans_unit_labels;
DROP TABLE IF EXISTS public.trans_unit;
DROP TABLE IF EXISTS public.trans_translation;
DROP TABLE IF EXISTS public.trans_suggestion;
DROP TABLE IF EXISTS public.trans_project;
DROP TABLE IF EXISTS public.trans_pendingunitchange;
DROP TABLE IF EXISTS public.trans_label;
DROP TABLE IF EXISTS public.trans_contributoragreement;
DROP TABLE IF EXISTS public.trans_componentlist_components;
DROP TABLE IF EXISTS public.trans_componentlist;
DROP TABLE IF EXISTS public.trans_component_links;
DROP TABLE IF EXISTS public.trans_component;
DROP TABLE IF EXISTS public.trans_comment;
DROP TABLE IF EXISTS public.trans_change;
DROP TABLE IF EXISTS public.trans_category;
DROP TABLE IF EXISTS public.trans_autocomponentlist;
DROP TABLE IF EXISTS public.trans_announcement;
DROP TABLE IF EXISTS public.trans_alert;
DROP TABLE IF EXISTS public.social_auth_usersocialauth;
DROP TABLE IF EXISTS public.social_auth_partial;
DROP TABLE IF EXISTS public.social_auth_nonce;
DROP TABLE IF EXISTS public.social_auth_code;
DROP TABLE IF EXISTS public.social_auth_association;
DROP TABLE IF EXISTS public.screenshots_screenshot_units;
DROP TABLE IF EXISTS public.screenshots_screenshot;
DROP TABLE IF EXISTS public.otp_totp_totpdevice;
DROP TABLE IF EXISTS public.otp_static_statictoken;
DROP TABLE IF EXISTS public.otp_static_staticdevice;
DROP TABLE IF EXISTS public.metrics_metric;
DROP TABLE IF EXISTS public.memory_memory;
DROP TABLE IF EXISTS public.lang_plural;
DROP TABLE IF EXISTS public.lang_language;
DROP TABLE IF EXISTS public.fonts_fontoverride;
DROP TABLE IF EXISTS public.fonts_fontgroup;
DROP TABLE IF EXISTS public.fonts_font;
DROP TABLE IF EXISTS public.django_session;
DROP TABLE IF EXISTS public.django_otp_webauthn_webauthnuserhandle;
DROP TABLE IF EXISTS public.django_otp_webauthn_webauthncredential;
DROP TABLE IF EXISTS public.django_otp_webauthn_webauthnattestation;
DROP TABLE IF EXISTS public.django_migrations;
DROP TABLE IF EXISTS public.django_content_type;
DROP TABLE IF EXISTS public.django_celery_beat_solarschedule;
DROP TABLE IF EXISTS public.django_celery_beat_periodictasks;
DROP TABLE IF EXISTS public.django_celery_beat_periodictask;
DROP TABLE IF EXISTS public.django_celery_beat_intervalschedule;
DROP TABLE IF EXISTS public.django_celery_beat_crontabschedule;
DROP TABLE IF EXISTS public.django_celery_beat_clockedschedule;
DROP TABLE IF EXISTS public.django_admin_log;
DROP TABLE IF EXISTS public.configuration_setting;
DROP TABLE IF EXISTS public.checks_check;
DROP TABLE IF EXISTS public.authtoken_token;
DROP TABLE IF EXISTS public.auth_permission;
DROP TABLE IF EXISTS public.auth_group_permissions;
DROP TABLE IF EXISTS public.auth_group;
DROP TABLE IF EXISTS public.addons_event;
DROP TABLE IF EXISTS public.addons_addonactivitylog;
DROP TABLE IF EXISTS public.addons_addon;
DROP TABLE IF EXISTS public.accounts_verifiedemail;
DROP TABLE IF EXISTS public.accounts_subscription;
DROP TABLE IF EXISTS public.accounts_profile_watched;
DROP TABLE IF EXISTS public.accounts_profile_secondary_languages;
DROP TABLE IF EXISTS public.accounts_profile_languages;
DROP TABLE IF EXISTS public.accounts_profile;
DROP TABLE IF EXISTS public.accounts_auditlog;
DROP EXTENSION IF EXISTS pg_trgm;
DROP EXTENSION IF EXISTS btree_gin;
--
-- Name: btree_gin; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS btree_gin WITH SCHEMA public;


--
-- Name: EXTENSION btree_gin; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION btree_gin IS 'support for indexing common datatypes in GIN';


--
-- Name: pg_trgm; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;


--
-- Name: EXTENSION pg_trgm; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: accounts_auditlog; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.accounts_auditlog (
    id integer NOT NULL,
    activity character varying(20) NOT NULL,
    address inet,
    "timestamp" timestamp with time zone NOT NULL,
    user_id integer,
    user_agent character varying(200) NOT NULL,
    params jsonb NOT NULL
);


ALTER TABLE public.accounts_auditlog OWNER TO weblate;

--
-- Name: accounts_auditlog_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.accounts_auditlog ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.accounts_auditlog_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: accounts_profile; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.accounts_profile (
    id integer NOT NULL,
    language character varying(10) NOT NULL,
    suggested integer NOT NULL,
    translated integer NOT NULL,
    user_id integer NOT NULL,
    hide_completed boolean NOT NULL,
    secondary_in_zen boolean NOT NULL,
    hide_source_secondary boolean NOT NULL,
    dashboard_component_list_id integer,
    dashboard_view integer NOT NULL,
    editor_link character varying(200) NOT NULL,
    special_chars character varying(30) NOT NULL,
    uploaded integer NOT NULL,
    translate_mode integer NOT NULL,
    zen_mode integer NOT NULL,
    nearby_strings smallint NOT NULL,
    commented integer NOT NULL,
    company character varying(100) NOT NULL,
    github character varying(50) NOT NULL,
    linkedin character varying(50) NOT NULL,
    location character varying(100) NOT NULL,
    public_email character varying(190) NOT NULL,
    twitter character varying(50) NOT NULL,
    website character varying(200) NOT NULL,
    codesite character varying(200) NOT NULL,
    fediverse character varying(200) NOT NULL,
    liberapay character varying(50) NOT NULL,
    auto_watch boolean NOT NULL,
    commit_email character varying(190) NOT NULL,
    theme character varying(10) NOT NULL,
    last_2fa character varying(15) NOT NULL,
    contact character varying(200) NOT NULL,
    contribute_personal_tm boolean NOT NULL
);


ALTER TABLE public.accounts_profile OWNER TO weblate;

--
-- Name: accounts_profile_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.accounts_profile ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.accounts_profile_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: accounts_profile_languages; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.accounts_profile_languages (
    id integer NOT NULL,
    profile_id integer NOT NULL,
    language_id integer NOT NULL
);


ALTER TABLE public.accounts_profile_languages OWNER TO weblate;

--
-- Name: accounts_profile_languages_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.accounts_profile_languages ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.accounts_profile_languages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: accounts_profile_secondary_languages; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.accounts_profile_secondary_languages (
    id integer NOT NULL,
    profile_id integer NOT NULL,
    language_id integer NOT NULL
);


ALTER TABLE public.accounts_profile_secondary_languages OWNER TO weblate;

--
-- Name: accounts_profile_secondary_languages_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.accounts_profile_secondary_languages ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.accounts_profile_secondary_languages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: accounts_profile_watched; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.accounts_profile_watched (
    id integer NOT NULL,
    profile_id integer NOT NULL,
    project_id integer NOT NULL
);


ALTER TABLE public.accounts_profile_watched OWNER TO weblate;

--
-- Name: accounts_profile_watched_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.accounts_profile_watched ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.accounts_profile_watched_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: accounts_subscription; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.accounts_subscription (
    id integer NOT NULL,
    notification character varying(100) NOT NULL,
    scope integer NOT NULL,
    frequency integer NOT NULL,
    component_id integer,
    project_id integer,
    user_id integer NOT NULL,
    onetime boolean NOT NULL
);


ALTER TABLE public.accounts_subscription OWNER TO weblate;

--
-- Name: accounts_subscription_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.accounts_subscription ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.accounts_subscription_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: accounts_verifiedemail; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.accounts_verifiedemail (
    id integer NOT NULL,
    email character varying(190) NOT NULL,
    social_id bigint NOT NULL,
    is_deliverable boolean NOT NULL
);


ALTER TABLE public.accounts_verifiedemail OWNER TO weblate;

--
-- Name: accounts_verifiedemail_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.accounts_verifiedemail ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.accounts_verifiedemail_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: addons_addon; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.addons_addon (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    component_id integer,
    repo_scope boolean NOT NULL,
    configuration jsonb NOT NULL,
    state jsonb NOT NULL,
    project_id integer
);


ALTER TABLE public.addons_addon OWNER TO weblate;

--
-- Name: addons_addon_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.addons_addon ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.addons_addon_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: addons_addonactivitylog; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.addons_addonactivitylog (
    id integer NOT NULL,
    event integer NOT NULL,
    created timestamp with time zone NOT NULL,
    details jsonb NOT NULL,
    addon_id integer NOT NULL,
    component_id integer,
    pending boolean NOT NULL
);


ALTER TABLE public.addons_addonactivitylog OWNER TO weblate;

--
-- Name: addons_addonactivitylog_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.addons_addonactivitylog ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.addons_addonactivitylog_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: addons_event; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.addons_event (
    id integer NOT NULL,
    event integer NOT NULL,
    addon_id integer NOT NULL
);


ALTER TABLE public.addons_event OWNER TO weblate;

--
-- Name: addons_event_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.addons_event ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.addons_event_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO weblate;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.auth_group ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.auth_group_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO weblate;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.auth_group_permissions ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.auth_group_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO weblate;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.auth_permission ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.auth_permission_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: authtoken_token; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.authtoken_token (
    key character varying(40) NOT NULL,
    created timestamp with time zone NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.authtoken_token OWNER TO weblate;

--
-- Name: checks_check; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.checks_check (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    dismissed boolean NOT NULL,
    unit_id integer NOT NULL
);


ALTER TABLE public.checks_check OWNER TO weblate;

--
-- Name: checks_check_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.checks_check ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.checks_check_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: configuration_setting; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.configuration_setting (
    id integer NOT NULL,
    category integer NOT NULL,
    name character varying(100) NOT NULL,
    value jsonb NOT NULL
);


ALTER TABLE public.configuration_setting OWNER TO weblate;

--
-- Name: configuration_setting_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.configuration_setting ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.configuration_setting_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO weblate;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.django_admin_log ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_admin_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_celery_beat_clockedschedule; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.django_celery_beat_clockedschedule (
    id integer NOT NULL,
    clocked_time timestamp with time zone NOT NULL
);


ALTER TABLE public.django_celery_beat_clockedschedule OWNER TO weblate;

--
-- Name: django_celery_beat_clockedschedule_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.django_celery_beat_clockedschedule ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_celery_beat_clockedschedule_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_celery_beat_crontabschedule; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.django_celery_beat_crontabschedule (
    id integer NOT NULL,
    minute character varying(240) NOT NULL,
    hour character varying(96) NOT NULL,
    day_of_week character varying(64) NOT NULL,
    day_of_month character varying(124) NOT NULL,
    month_of_year character varying(64) NOT NULL,
    timezone character varying(63) NOT NULL
);


ALTER TABLE public.django_celery_beat_crontabschedule OWNER TO weblate;

--
-- Name: django_celery_beat_crontabschedule_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.django_celery_beat_crontabschedule ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_celery_beat_crontabschedule_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_celery_beat_intervalschedule; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.django_celery_beat_intervalschedule (
    id integer NOT NULL,
    every integer NOT NULL,
    period character varying(24) NOT NULL
);


ALTER TABLE public.django_celery_beat_intervalschedule OWNER TO weblate;

--
-- Name: django_celery_beat_intervalschedule_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.django_celery_beat_intervalschedule ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_celery_beat_intervalschedule_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_celery_beat_periodictask; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.django_celery_beat_periodictask (
    id integer NOT NULL,
    name character varying(200) NOT NULL,
    task character varying(200) NOT NULL,
    args text NOT NULL,
    kwargs text NOT NULL,
    queue character varying(200),
    exchange character varying(200),
    routing_key character varying(200),
    expires timestamp with time zone,
    enabled boolean NOT NULL,
    last_run_at timestamp with time zone,
    total_run_count integer NOT NULL,
    date_changed timestamp with time zone NOT NULL,
    description text NOT NULL,
    crontab_id integer,
    interval_id integer,
    solar_id integer,
    one_off boolean NOT NULL,
    start_time timestamp with time zone,
    priority integer,
    headers text NOT NULL,
    clocked_id integer,
    expire_seconds integer,
    CONSTRAINT django_celery_beat_periodictask_expire_seconds_check CHECK ((expire_seconds >= 0)),
    CONSTRAINT django_celery_beat_periodictask_priority_check CHECK ((priority >= 0)),
    CONSTRAINT django_celery_beat_periodictask_total_run_count_check CHECK ((total_run_count >= 0))
);


ALTER TABLE public.django_celery_beat_periodictask OWNER TO weblate;

--
-- Name: django_celery_beat_periodictask_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.django_celery_beat_periodictask ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_celery_beat_periodictask_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_celery_beat_periodictasks; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.django_celery_beat_periodictasks (
    ident smallint NOT NULL,
    last_update timestamp with time zone NOT NULL
);


ALTER TABLE public.django_celery_beat_periodictasks OWNER TO weblate;

--
-- Name: django_celery_beat_solarschedule; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.django_celery_beat_solarschedule (
    id integer NOT NULL,
    event character varying(24) NOT NULL,
    latitude numeric(9,6) NOT NULL,
    longitude numeric(9,6) NOT NULL
);


ALTER TABLE public.django_celery_beat_solarschedule OWNER TO weblate;

--
-- Name: django_celery_beat_solarschedule_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.django_celery_beat_solarschedule ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_celery_beat_solarschedule_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO weblate;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.django_content_type ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_content_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO weblate;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.django_migrations ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_otp_webauthn_webauthnattestation; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.django_otp_webauthn_webauthnattestation (
    id bigint NOT NULL,
    fmt character varying(255) NOT NULL,
    data bytea NOT NULL,
    client_data_json bytea NOT NULL,
    credential_id bigint NOT NULL
);


ALTER TABLE public.django_otp_webauthn_webauthnattestation OWNER TO weblate;

--
-- Name: django_otp_webauthn_webauthnattestation_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.django_otp_webauthn_webauthnattestation ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_otp_webauthn_webauthnattestation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_otp_webauthn_webauthncredential; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.django_otp_webauthn_webauthncredential (
    id bigint NOT NULL,
    name character varying(64) NOT NULL,
    confirmed boolean NOT NULL,
    credential_type character varying(32) NOT NULL,
    credential_id bytea NOT NULL,
    public_key bytea NOT NULL,
    transports jsonb NOT NULL,
    sign_count integer NOT NULL,
    backup_eligible boolean NOT NULL,
    backup_state boolean NOT NULL,
    created_at timestamp with time zone,
    last_used_at timestamp with time zone,
    aaguid character varying(36) NOT NULL,
    credential_id_sha256 character varying(64) NOT NULL,
    discoverable boolean,
    user_id integer NOT NULL,
    CONSTRAINT django_otp_webauthn_webauthncredential_sign_count_check CHECK ((sign_count >= 0))
);


ALTER TABLE public.django_otp_webauthn_webauthncredential OWNER TO weblate;

--
-- Name: django_otp_webauthn_webauthncredential_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.django_otp_webauthn_webauthncredential ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_otp_webauthn_webauthncredential_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_otp_webauthn_webauthnuserhandle; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.django_otp_webauthn_webauthnuserhandle (
    handle_hex character varying(128) NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.django_otp_webauthn_webauthnuserhandle OWNER TO weblate;

--
-- Name: django_session; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO weblate;

--
-- Name: fonts_font; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.fonts_font (
    id integer NOT NULL,
    family character varying(100) NOT NULL,
    style character varying(100) NOT NULL,
    font character varying(100) NOT NULL,
    "timestamp" timestamp with time zone NOT NULL,
    project_id integer NOT NULL,
    user_id integer
);


ALTER TABLE public.fonts_font OWNER TO weblate;

--
-- Name: fonts_font_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.fonts_font ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.fonts_font_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: fonts_fontgroup; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.fonts_fontgroup (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    font_id integer NOT NULL,
    project_id integer NOT NULL
);


ALTER TABLE public.fonts_fontgroup OWNER TO weblate;

--
-- Name: fonts_fontgroup_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.fonts_fontgroup ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.fonts_fontgroup_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: fonts_fontoverride; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.fonts_fontoverride (
    id integer NOT NULL,
    font_id integer NOT NULL,
    group_id integer NOT NULL,
    language_id integer NOT NULL
);


ALTER TABLE public.fonts_fontoverride OWNER TO weblate;

--
-- Name: fonts_fontoverride_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.fonts_fontoverride ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.fonts_fontoverride_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: lang_language; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.lang_language (
    id integer NOT NULL,
    code character varying(50) NOT NULL,
    name character varying(100) NOT NULL,
    direction character varying(3) NOT NULL,
    population bigint NOT NULL
);


ALTER TABLE public.lang_language OWNER TO weblate;

--
-- Name: lang_language_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.lang_language ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.lang_language_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: lang_plural; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.lang_plural (
    id integer NOT NULL,
    source smallint NOT NULL,
    number smallint NOT NULL,
    formula text NOT NULL,
    type integer NOT NULL,
    language_id integer NOT NULL
);


ALTER TABLE public.lang_plural OWNER TO weblate;

--
-- Name: lang_plural_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.lang_plural ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.lang_plural_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: memory_memory; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.memory_memory (
    id integer NOT NULL,
    source text NOT NULL,
    target text NOT NULL,
    origin text NOT NULL,
    from_file boolean NOT NULL,
    shared boolean NOT NULL,
    project_id integer,
    source_language_id integer NOT NULL,
    target_language_id integer NOT NULL,
    user_id integer,
    status integer NOT NULL,
    context text NOT NULL
);


ALTER TABLE public.memory_memory OWNER TO weblate;

--
-- Name: memory_memory_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.memory_memory ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.memory_memory_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: metrics_metric; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.metrics_metric (
    id bigint NOT NULL,
    date date NOT NULL,
    scope smallint NOT NULL,
    relation integer NOT NULL,
    secondary integer NOT NULL,
    changes integer NOT NULL,
    data jsonb
);


ALTER TABLE public.metrics_metric OWNER TO weblate;

--
-- Name: metrics_metric_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.metrics_metric ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.metrics_metric_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: otp_static_staticdevice; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.otp_static_staticdevice (
    id integer NOT NULL,
    name character varying(64) NOT NULL,
    confirmed boolean NOT NULL,
    user_id integer NOT NULL,
    throttling_failure_count integer NOT NULL,
    throttling_failure_timestamp timestamp with time zone,
    created_at timestamp with time zone,
    last_used_at timestamp with time zone,
    CONSTRAINT otp_static_staticdevice_throttling_failure_count_check CHECK ((throttling_failure_count >= 0))
);


ALTER TABLE public.otp_static_staticdevice OWNER TO weblate;

--
-- Name: otp_static_staticdevice_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.otp_static_staticdevice ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.otp_static_staticdevice_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: otp_static_statictoken; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.otp_static_statictoken (
    id integer NOT NULL,
    token character varying(16) NOT NULL,
    device_id integer NOT NULL
);


ALTER TABLE public.otp_static_statictoken OWNER TO weblate;

--
-- Name: otp_static_statictoken_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.otp_static_statictoken ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.otp_static_statictoken_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: otp_totp_totpdevice; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.otp_totp_totpdevice (
    id integer NOT NULL,
    name character varying(64) NOT NULL,
    confirmed boolean NOT NULL,
    key character varying(80) NOT NULL,
    step smallint NOT NULL,
    t0 bigint NOT NULL,
    digits smallint NOT NULL,
    tolerance smallint NOT NULL,
    drift smallint NOT NULL,
    last_t bigint NOT NULL,
    user_id integer NOT NULL,
    throttling_failure_count integer NOT NULL,
    throttling_failure_timestamp timestamp with time zone,
    created_at timestamp with time zone,
    last_used_at timestamp with time zone,
    CONSTRAINT otp_totp_totpdevice_digits_check CHECK ((digits >= 0)),
    CONSTRAINT otp_totp_totpdevice_step_check CHECK ((step >= 0)),
    CONSTRAINT otp_totp_totpdevice_throttling_failure_count_check CHECK ((throttling_failure_count >= 0)),
    CONSTRAINT otp_totp_totpdevice_tolerance_check CHECK ((tolerance >= 0))
);


ALTER TABLE public.otp_totp_totpdevice OWNER TO weblate;

--
-- Name: otp_totp_totpdevice_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.otp_totp_totpdevice ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.otp_totp_totpdevice_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: screenshots_screenshot; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.screenshots_screenshot (
    id integer NOT NULL,
    name character varying(200) NOT NULL,
    image character varying(100) NOT NULL,
    "timestamp" timestamp with time zone NOT NULL,
    user_id integer,
    translation_id integer NOT NULL,
    repository_filename character varying(200) NOT NULL
);


ALTER TABLE public.screenshots_screenshot OWNER TO weblate;

--
-- Name: screenshots_screenshot_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.screenshots_screenshot ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.screenshots_screenshot_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: screenshots_screenshot_units; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.screenshots_screenshot_units (
    id integer NOT NULL,
    screenshot_id integer NOT NULL,
    unit_id integer NOT NULL
);


ALTER TABLE public.screenshots_screenshot_units OWNER TO weblate;

--
-- Name: screenshots_screenshot_units_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.screenshots_screenshot_units ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.screenshots_screenshot_units_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: social_auth_association; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.social_auth_association (
    id bigint NOT NULL,
    server_url character varying(255) NOT NULL,
    handle character varying(255) NOT NULL,
    secret character varying(255) NOT NULL,
    issued integer NOT NULL,
    lifetime integer NOT NULL,
    assoc_type character varying(64) NOT NULL
);


ALTER TABLE public.social_auth_association OWNER TO weblate;

--
-- Name: social_auth_association_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.social_auth_association ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.social_auth_association_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: social_auth_code; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.social_auth_code (
    id bigint NOT NULL,
    email character varying(254) NOT NULL,
    code character varying(32) NOT NULL,
    verified boolean NOT NULL,
    "timestamp" timestamp with time zone NOT NULL
);


ALTER TABLE public.social_auth_code OWNER TO weblate;

--
-- Name: social_auth_code_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.social_auth_code ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.social_auth_code_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: social_auth_nonce; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.social_auth_nonce (
    id bigint NOT NULL,
    server_url character varying(255) NOT NULL,
    "timestamp" integer NOT NULL,
    salt character varying(65) NOT NULL
);


ALTER TABLE public.social_auth_nonce OWNER TO weblate;

--
-- Name: social_auth_nonce_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.social_auth_nonce ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.social_auth_nonce_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: social_auth_partial; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.social_auth_partial (
    id bigint NOT NULL,
    token character varying(32) NOT NULL,
    next_step smallint NOT NULL,
    backend character varying(32) NOT NULL,
    "timestamp" timestamp with time zone NOT NULL,
    data jsonb NOT NULL,
    CONSTRAINT social_auth_partial_next_step_check CHECK ((next_step >= 0))
);


ALTER TABLE public.social_auth_partial OWNER TO weblate;

--
-- Name: social_auth_partial_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.social_auth_partial ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.social_auth_partial_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: social_auth_usersocialauth; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.social_auth_usersocialauth (
    id bigint NOT NULL,
    provider character varying(32) NOT NULL,
    uid character varying(255) NOT NULL,
    user_id integer NOT NULL,
    created timestamp with time zone NOT NULL,
    modified timestamp with time zone NOT NULL,
    extra_data jsonb NOT NULL,
    CONSTRAINT user_social_auth_uid_required CHECK ((NOT ((uid)::text = ''::text)))
);


ALTER TABLE public.social_auth_usersocialauth OWNER TO weblate;

--
-- Name: social_auth_usersocialauth_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.social_auth_usersocialauth ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.social_auth_usersocialauth_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_alert; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_alert (
    id integer NOT NULL,
    "timestamp" timestamp with time zone NOT NULL,
    name character varying(150) NOT NULL,
    component_id integer NOT NULL,
    updated timestamp with time zone NOT NULL,
    dismissed boolean NOT NULL,
    details jsonb NOT NULL
);


ALTER TABLE public.trans_alert OWNER TO weblate;

--
-- Name: trans_alert_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_alert ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_alert_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_announcement; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_announcement (
    id integer NOT NULL,
    message text NOT NULL,
    language_id integer,
    project_id integer,
    component_id integer,
    severity character varying(25) NOT NULL,
    expiry date,
    notify boolean NOT NULL,
    category_id integer
);


ALTER TABLE public.trans_announcement OWNER TO weblate;

--
-- Name: trans_announcement_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_announcement ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_announcement_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_autocomponentlist; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_autocomponentlist (
    id integer NOT NULL,
    project_match character varying(200) NOT NULL,
    component_match character varying(200) NOT NULL,
    componentlist_id integer NOT NULL
);


ALTER TABLE public.trans_autocomponentlist OWNER TO weblate;

--
-- Name: trans_autocomponentlist_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_autocomponentlist ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_autocomponentlist_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_category; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_category (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    slug character varying(100) NOT NULL,
    category_id integer,
    project_id integer NOT NULL
);


ALTER TABLE public.trans_category OWNER TO weblate;

--
-- Name: trans_category_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_category ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_change; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_change (
    id integer NOT NULL,
    "timestamp" timestamp with time zone NOT NULL,
    action integer NOT NULL,
    target text NOT NULL,
    author_id integer,
    translation_id integer,
    unit_id integer,
    user_id integer,
    component_id integer,
    language_id integer,
    old text NOT NULL,
    project_id integer,
    comment_id integer,
    suggestion_id integer,
    alert_id integer,
    announcement_id integer,
    details jsonb NOT NULL,
    screenshot_id integer,
    category_id integer
);


ALTER TABLE public.trans_change OWNER TO weblate;

--
-- Name: trans_change_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_change ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_change_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_comment; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_comment (
    id integer NOT NULL,
    comment text NOT NULL,
    "timestamp" timestamp with time zone NOT NULL,
    user_id integer,
    unit_id integer NOT NULL,
    resolved boolean NOT NULL,
    userdetails jsonb NOT NULL
);


ALTER TABLE public.trans_comment OWNER TO weblate;

--
-- Name: trans_comment_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_comment ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_comment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_component; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_component (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    slug character varying(100) NOT NULL,
    repo character varying(300) NOT NULL,
    push character varying(300) NOT NULL,
    repoweb character varying(200) NOT NULL,
    git_export character varying(220) NOT NULL,
    report_source_bugs character varying(190) NOT NULL,
    branch character varying(200) NOT NULL,
    filemask character varying(400) NOT NULL,
    template character varying(400) NOT NULL,
    new_base character varying(400) NOT NULL,
    intermediate character varying(400) NOT NULL,
    file_format character varying(50) NOT NULL,
    locked boolean NOT NULL,
    allow_translation_propagation boolean NOT NULL,
    enable_suggestions boolean NOT NULL,
    suggestion_voting boolean NOT NULL,
    suggestion_autoaccept smallint NOT NULL,
    check_flags text NOT NULL,
    project_id integer NOT NULL,
    commit_message text NOT NULL,
    license character varying(150) NOT NULL,
    merge_style character varying(10) NOT NULL,
    new_lang character varying(10) NOT NULL,
    vcs character varying(20) NOT NULL,
    edit_template boolean NOT NULL,
    agreement text NOT NULL,
    language_regex character varying(500) NOT NULL,
    add_message text NOT NULL,
    delete_message text NOT NULL,
    priority integer NOT NULL,
    commit_pending_age smallint NOT NULL,
    push_on_commit boolean NOT NULL,
    linked_component_id integer,
    merge_message text NOT NULL,
    addon_message text NOT NULL,
    language_code_style character varying(20) NOT NULL,
    variant_regex character varying(190) NOT NULL,
    push_branch character varying(200) NOT NULL,
    restricted boolean NOT NULL,
    auto_lock_error boolean NOT NULL,
    source_language_id integer NOT NULL,
    manage_units boolean NOT NULL,
    glossary_color character varying(30) NOT NULL,
    is_glossary boolean NOT NULL,
    remote_revision character varying(200) NOT NULL,
    local_revision character varying(200) NOT NULL,
    pull_message text NOT NULL,
    screenshot_filemask character varying(400) NOT NULL,
    enforced_checks jsonb NOT NULL,
    category_id integer,
    processed_revision character varying(200) NOT NULL,
    key_filter character varying(500) NOT NULL,
    secondary_language_id integer,
    contribute_project_tm boolean NOT NULL,
    file_format_params jsonb NOT NULL,
    hide_glossary_matches boolean NOT NULL,
    CONSTRAINT trans_component_suggestion_autoaccept_check CHECK ((suggestion_autoaccept >= 0))
);


ALTER TABLE public.trans_component OWNER TO weblate;

--
-- Name: trans_component_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_component ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_component_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_component_links; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_component_links (
    id integer NOT NULL,
    component_id integer NOT NULL,
    project_id integer NOT NULL
);


ALTER TABLE public.trans_component_links OWNER TO weblate;

--
-- Name: trans_component_links_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_component_links ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_component_links_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_componentlist; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_componentlist (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    slug character varying(100) NOT NULL,
    show_dashboard boolean NOT NULL
);


ALTER TABLE public.trans_componentlist OWNER TO weblate;

--
-- Name: trans_componentlist_components; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_componentlist_components (
    id integer NOT NULL,
    componentlist_id integer NOT NULL,
    component_id integer NOT NULL
);


ALTER TABLE public.trans_componentlist_components OWNER TO weblate;

--
-- Name: trans_componentlist_components_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_componentlist_components ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_componentlist_components_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_componentlist_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_componentlist ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_componentlist_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_contributoragreement; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_contributoragreement (
    id integer NOT NULL,
    "timestamp" timestamp with time zone NOT NULL,
    component_id integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.trans_contributoragreement OWNER TO weblate;

--
-- Name: trans_contributoragreement_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_contributoragreement ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_contributoragreement_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_label; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_label (
    id integer NOT NULL,
    name character varying(190) NOT NULL,
    color character varying(30) NOT NULL,
    project_id integer NOT NULL,
    description character varying(250) NOT NULL
);


ALTER TABLE public.trans_label OWNER TO weblate;

--
-- Name: trans_label_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_label ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_label_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_pendingunitchange; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_pendingunitchange (
    id integer NOT NULL,
    target text NOT NULL,
    explanation text NOT NULL,
    source_unit_explanation text NOT NULL,
    state integer NOT NULL,
    "timestamp" timestamp with time zone NOT NULL,
    add_unit boolean NOT NULL,
    author_id integer NOT NULL,
    unit_id integer NOT NULL,
    metadata jsonb NOT NULL,
    automatically_translated boolean NOT NULL
);


ALTER TABLE public.trans_pendingunitchange OWNER TO weblate;

--
-- Name: trans_pendingunitchange_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_pendingunitchange ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_pendingunitchange_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_project; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_project (
    id integer NOT NULL,
    name character varying(60) NOT NULL,
    slug character varying(60) NOT NULL,
    web character varying(200) NOT NULL,
    instructions text NOT NULL,
    set_language_team boolean NOT NULL,
    enable_hooks boolean NOT NULL,
    access_control integer NOT NULL,
    translation_review boolean NOT NULL,
    source_review boolean NOT NULL,
    use_shared_tm boolean NOT NULL,
    contribute_shared_tm boolean NOT NULL,
    language_aliases text NOT NULL,
    machinery_settings jsonb NOT NULL,
    enforced_2fa boolean NOT NULL,
    secondary_language_id integer,
    check_flags text NOT NULL,
    commit_policy integer NOT NULL,
    autoclean_tm boolean NOT NULL
);


ALTER TABLE public.trans_project OWNER TO weblate;

--
-- Name: trans_project_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_project ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_project_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_suggestion; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_suggestion (
    id integer NOT NULL,
    target text NOT NULL,
    unit_id integer NOT NULL,
    user_id integer,
    "timestamp" timestamp with time zone NOT NULL,
    userdetails jsonb NOT NULL
);


ALTER TABLE public.trans_suggestion OWNER TO weblate;

--
-- Name: trans_suggestion_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_suggestion ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_suggestion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_translation; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_translation (
    id integer NOT NULL,
    revision character varying(200) NOT NULL,
    filename character varying(400) NOT NULL,
    language_code character varying(50) NOT NULL,
    language_id integer NOT NULL,
    component_id integer NOT NULL,
    plural_id integer NOT NULL,
    check_flags text NOT NULL
);


ALTER TABLE public.trans_translation OWNER TO weblate;

--
-- Name: trans_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_translation ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_unit; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_unit (
    id integer NOT NULL,
    location text NOT NULL,
    context text NOT NULL,
    note text NOT NULL,
    flags text NOT NULL,
    source text NOT NULL,
    previous_source text NOT NULL,
    target text NOT NULL,
    "position" integer NOT NULL,
    num_words integer NOT NULL,
    priority integer NOT NULL,
    translation_id integer NOT NULL,
    id_hash bigint NOT NULL,
    state integer NOT NULL,
    original_state integer NOT NULL,
    explanation text NOT NULL,
    extra_flags text NOT NULL,
    "timestamp" timestamp with time zone NOT NULL,
    source_unit_id integer,
    details jsonb NOT NULL,
    last_updated timestamp with time zone NOT NULL,
    variant_id integer,
    automatically_translated boolean NOT NULL
);


ALTER TABLE public.trans_unit OWNER TO weblate;

--
-- Name: trans_unit_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_unit ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_unit_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_unit_labels; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_unit_labels (
    id integer NOT NULL,
    unit_id integer NOT NULL,
    label_id integer NOT NULL
);


ALTER TABLE public.trans_unit_labels OWNER TO weblate;

--
-- Name: trans_unit_labels_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_unit_labels ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_unit_labels_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_variant; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_variant (
    id integer NOT NULL,
    variant_regex character varying(190) NOT NULL,
    key character varying(576) NOT NULL,
    component_id integer NOT NULL
);


ALTER TABLE public.trans_variant OWNER TO weblate;

--
-- Name: trans_variant_defining_units; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_variant_defining_units (
    id integer NOT NULL,
    variant_id integer NOT NULL,
    unit_id integer NOT NULL
);


ALTER TABLE public.trans_variant_defining_units OWNER TO weblate;

--
-- Name: trans_variant_defining_units_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_variant_defining_units ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_variant_defining_units_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_variant_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_variant ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_variant_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_vote; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_vote (
    id integer NOT NULL,
    suggestion_id integer NOT NULL,
    user_id integer NOT NULL,
    value smallint NOT NULL
);


ALTER TABLE public.trans_vote OWNER TO weblate;

--
-- Name: trans_vote_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_vote ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_vote_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trans_workflowsetting; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.trans_workflowsetting (
    id integer NOT NULL,
    translation_review boolean NOT NULL,
    enable_suggestions boolean NOT NULL,
    suggestion_voting boolean NOT NULL,
    suggestion_autoaccept smallint NOT NULL,
    language_id integer NOT NULL,
    project_id integer,
    CONSTRAINT trans_workflowsetting_suggestion_autoaccept_check CHECK ((suggestion_autoaccept >= 0))
);


ALTER TABLE public.trans_workflowsetting OWNER TO weblate;

--
-- Name: trans_workflowsetting_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.trans_workflowsetting ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trans_workflowsetting_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: weblate_auth_autogroup; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.weblate_auth_autogroup (
    id integer NOT NULL,
    match character varying(200) NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.weblate_auth_autogroup OWNER TO weblate;

--
-- Name: weblate_auth_autogroup_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.weblate_auth_autogroup ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.weblate_auth_autogroup_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: weblate_auth_group; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.weblate_auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL,
    project_selection integer NOT NULL,
    language_selection integer NOT NULL,
    internal boolean NOT NULL,
    defining_project_id integer,
    enforced_2fa boolean NOT NULL
);


ALTER TABLE public.weblate_auth_group OWNER TO weblate;

--
-- Name: weblate_auth_group_admins; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.weblate_auth_group_admins (
    id integer NOT NULL,
    group_id integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.weblate_auth_group_admins OWNER TO weblate;

--
-- Name: weblate_auth_group_admins_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.weblate_auth_group_admins ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.weblate_auth_group_admins_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: weblate_auth_group_componentlists; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.weblate_auth_group_componentlists (
    id integer NOT NULL,
    group_id integer NOT NULL,
    componentlist_id integer NOT NULL
);


ALTER TABLE public.weblate_auth_group_componentlists OWNER TO weblate;

--
-- Name: weblate_auth_group_componentlists_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.weblate_auth_group_componentlists ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.weblate_auth_group_componentlists_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: weblate_auth_group_components; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.weblate_auth_group_components (
    id integer NOT NULL,
    group_id integer NOT NULL,
    component_id integer NOT NULL
);


ALTER TABLE public.weblate_auth_group_components OWNER TO weblate;

--
-- Name: weblate_auth_group_components_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.weblate_auth_group_components ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.weblate_auth_group_components_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: weblate_auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.weblate_auth_group ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.weblate_auth_group_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: weblate_auth_group_languages; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.weblate_auth_group_languages (
    id integer NOT NULL,
    group_id integer NOT NULL,
    language_id integer NOT NULL
);


ALTER TABLE public.weblate_auth_group_languages OWNER TO weblate;

--
-- Name: weblate_auth_group_languages_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.weblate_auth_group_languages ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.weblate_auth_group_languages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: weblate_auth_group_projects; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.weblate_auth_group_projects (
    id integer NOT NULL,
    group_id integer NOT NULL,
    project_id integer NOT NULL
);


ALTER TABLE public.weblate_auth_group_projects OWNER TO weblate;

--
-- Name: weblate_auth_group_projects_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.weblate_auth_group_projects ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.weblate_auth_group_projects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: weblate_auth_group_roles; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.weblate_auth_group_roles (
    id integer NOT NULL,
    group_id integer NOT NULL,
    role_id integer NOT NULL
);


ALTER TABLE public.weblate_auth_group_roles OWNER TO weblate;

--
-- Name: weblate_auth_group_roles_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.weblate_auth_group_roles ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.weblate_auth_group_roles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: weblate_auth_invitation; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.weblate_auth_invitation (
    uuid uuid NOT NULL,
    "timestamp" timestamp with time zone NOT NULL,
    email character varying(190) NOT NULL,
    is_superuser boolean NOT NULL,
    group_id integer NOT NULL,
    user_id integer,
    author_id integer NOT NULL,
    full_name character varying(150) NOT NULL,
    username character varying(150) NOT NULL
);


ALTER TABLE public.weblate_auth_invitation OWNER TO weblate;

--
-- Name: weblate_auth_permission; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.weblate_auth_permission (
    id integer NOT NULL,
    codename character varying(100) NOT NULL,
    name character varying(200) NOT NULL
);


ALTER TABLE public.weblate_auth_permission OWNER TO weblate;

--
-- Name: weblate_auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.weblate_auth_permission ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.weblate_auth_permission_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: weblate_auth_role; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.weblate_auth_role (
    id integer NOT NULL,
    name character varying(200) NOT NULL
);


ALTER TABLE public.weblate_auth_role OWNER TO weblate;

--
-- Name: weblate_auth_role_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.weblate_auth_role ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.weblate_auth_role_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: weblate_auth_role_permissions; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.weblate_auth_role_permissions (
    id integer NOT NULL,
    role_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.weblate_auth_role_permissions OWNER TO weblate;

--
-- Name: weblate_auth_role_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.weblate_auth_role_permissions ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.weblate_auth_role_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: weblate_auth_user; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.weblate_auth_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    username character varying(150) NOT NULL,
    full_name character varying(150) NOT NULL,
    email character varying(190),
    is_superuser boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL,
    is_bot boolean NOT NULL,
    date_expires timestamp with time zone
);


ALTER TABLE public.weblate_auth_user OWNER TO weblate;

--
-- Name: weblate_auth_user_groups; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.weblate_auth_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.weblate_auth_user_groups OWNER TO weblate;

--
-- Name: weblate_auth_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.weblate_auth_user_groups ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.weblate_auth_user_groups_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: weblate_auth_user_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.weblate_auth_user ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.weblate_auth_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: weblate_auth_userblock; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.weblate_auth_userblock (
    id integer NOT NULL,
    expiry timestamp with time zone,
    project_id integer NOT NULL,
    user_id integer NOT NULL,
    note text NOT NULL
);


ALTER TABLE public.weblate_auth_userblock OWNER TO weblate;

--
-- Name: weblate_auth_userblock_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.weblate_auth_userblock ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.weblate_auth_userblock_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: wladmin_backuplog; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.wladmin_backuplog (
    id integer NOT NULL,
    "timestamp" timestamp with time zone NOT NULL,
    event character varying(100) NOT NULL,
    log text NOT NULL,
    service_id integer NOT NULL
);


ALTER TABLE public.wladmin_backuplog OWNER TO weblate;

--
-- Name: wladmin_backuplog_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.wladmin_backuplog ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.wladmin_backuplog_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: wladmin_backupservice; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.wladmin_backupservice (
    id integer NOT NULL,
    repository character varying(500) NOT NULL,
    enabled boolean NOT NULL,
    "timestamp" timestamp with time zone NOT NULL,
    paperkey text NOT NULL,
    passphrase character varying(100) NOT NULL
);


ALTER TABLE public.wladmin_backupservice OWNER TO weblate;

--
-- Name: wladmin_backupservice_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.wladmin_backupservice ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.wladmin_backupservice_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: wladmin_configurationerror; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.wladmin_configurationerror (
    id integer NOT NULL,
    name character varying(150) NOT NULL,
    message text NOT NULL,
    "timestamp" timestamp with time zone NOT NULL,
    ignored boolean NOT NULL
);


ALTER TABLE public.wladmin_configurationerror OWNER TO weblate;

--
-- Name: wladmin_configurationerror_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.wladmin_configurationerror ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.wladmin_configurationerror_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: wladmin_supportstatus; Type: TABLE; Schema: public; Owner: weblate
--

CREATE TABLE public.wladmin_supportstatus (
    id integer NOT NULL,
    name character varying(150) NOT NULL,
    secret character varying(400) NOT NULL,
    expiry timestamp with time zone,
    in_limits boolean NOT NULL,
    discoverable boolean NOT NULL,
    limits jsonb NOT NULL,
    backup_repository character varying(500) NOT NULL,
    has_subscription boolean NOT NULL,
    enabled boolean NOT NULL
);


ALTER TABLE public.wladmin_supportstatus OWNER TO weblate;

--
-- Name: wladmin_supportstatus_id_seq; Type: SEQUENCE; Schema: public; Owner: weblate
--

ALTER TABLE public.wladmin_supportstatus ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.wladmin_supportstatus_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: accounts_auditlog; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.accounts_auditlog (id, activity, address, "timestamp", user_id, user_agent, params) FROM stdin;
1	team-add	\N	2026-01-13 10:36:00.276718+00	2		{"team": "Users", "username": null}
2	team-add	\N	2026-01-13 10:36:00.312613+00	2		{"team": "Viewers", "username": null}
\.


--
-- Data for Name: accounts_profile; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.accounts_profile (id, language, suggested, translated, user_id, hide_completed, secondary_in_zen, hide_source_secondary, dashboard_component_list_id, dashboard_view, editor_link, special_chars, uploaded, translate_mode, zen_mode, nearby_strings, commented, company, github, linkedin, location, public_email, twitter, website, codesite, fediverse, liberapay, auto_watch, commit_email, theme, last_2fa, contact, contribute_personal_tm) FROM stdin;
1		0	0	1	f	t	f	\N	1			0	0	0	15	0											t		auto			t
2		0	0	2	f	t	f	\N	1			0	0	0	15	0											t		auto			t
\.


--
-- Data for Name: accounts_profile_languages; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.accounts_profile_languages (id, profile_id, language_id) FROM stdin;
\.


--
-- Data for Name: accounts_profile_secondary_languages; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.accounts_profile_secondary_languages (id, profile_id, language_id) FROM stdin;
\.


--
-- Data for Name: accounts_profile_watched; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.accounts_profile_watched (id, profile_id, project_id) FROM stdin;
\.


--
-- Data for Name: accounts_subscription; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.accounts_subscription (id, notification, scope, frequency, component_id, project_id, user_id, onetime) FROM stdin;
1	MentionCommentNotificaton	0	1	\N	\N	2	f
2	LastAuthorCommentNotificaton	10	1	\N	\N	2	f
3	MentionCommentNotificaton	10	1	\N	\N	2	f
4	NewAnnouncementNotificaton	10	1	\N	\N	2	f
5	NewStringNotificaton	10	3	\N	\N	2	f
6	MergeFailureNotification	20	1	\N	\N	2	f
7	ParseErrorNotification	20	1	\N	\N	2	f
8	NewTranslationNotificaton	20	1	\N	\N	2	f
9	NewAlertNotificaton	20	1	\N	\N	2	f
10	NewAnnouncementNotificaton	20	1	\N	\N	2	f
\.


--
-- Data for Name: accounts_verifiedemail; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.accounts_verifiedemail (id, email, social_id, is_deliverable) FROM stdin;
\.


--
-- Data for Name: addons_addon; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.addons_addon (id, name, component_id, repo_scope, configuration, state, project_id) FROM stdin;
\.


--
-- Data for Name: addons_addonactivitylog; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.addons_addonactivitylog (id, event, created, details, addon_id, component_id, pending) FROM stdin;
\.


--
-- Data for Name: addons_event; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.addons_event (id, event, addon_id) FROM stdin;
\.


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add add-on	1	add_addon
2	Can change add-on	1	change_addon
3	Can delete add-on	1	delete_addon
4	Can view add-on	1	view_addon
5	Can add add-on event	2	add_event
6	Can change add-on event	2	change_event
7	Can delete add-on event	2	delete_event
8	Can view add-on event	2	view_event
9	Can add add-on activity log	3	add_addonactivitylog
10	Can change add-on activity log	3	change_addonactivitylog
11	Can delete add-on activity log	3	delete_addonactivitylog
12	Can view add-on activity log	3	view_addonactivitylog
13	Can add User	4	add_user
14	Can change User	4	change_user
15	Can delete User	4	delete_user
16	Can view User	4	view_user
17	Can add Permission	5	add_permission
18	Can change Permission	5	change_permission
19	Can delete Permission	5	delete_permission
20	Can view Permission	5	view_permission
21	Can add Role	6	add_role
22	Can change Role	6	change_role
23	Can delete Role	6	delete_role
24	Can view Role	6	view_role
25	Can add Group	7	add_group
26	Can change Group	7	change_group
27	Can delete Group	7	delete_group
28	Can view Group	7	view_group
29	Can add Automatic team assignment	8	add_autogroup
30	Can change Automatic team assignment	8	change_autogroup
31	Can delete Automatic team assignment	8	delete_autogroup
32	Can view Automatic team assignment	8	view_autogroup
33	Can add invitation	9	add_invitation
34	Can change invitation	9	change_invitation
35	Can delete invitation	9	delete_invitation
36	Can view invitation	9	view_invitation
37	Can add Blocked user	10	add_userblock
38	Can change Blocked user	10	change_userblock
39	Can delete Blocked user	10	delete_userblock
40	Can view Blocked user	10	view_userblock
41	Can add Quality check	11	add_check
42	Can change Quality check	11	change_check
43	Can delete Quality check	11	delete_check
44	Can view Quality check	11	view_check
45	Can add Project	12	add_project
46	Can change Project	12	change_project
47	Can delete Project	12	delete_project
48	Can view Project	12	view_project
49	Can add Component	13	add_component
50	Can change Component	13	change_component
51	Can delete Component	13	delete_component
52	Can view Component	13	view_component
53	Can add translation	14	add_translation
54	Can change translation	14	change_translation
55	Can delete translation	14	delete_translation
56	Can view translation	14	view_translation
57	Can add label	15	add_label
58	Can change label	15	change_label
59	Can delete label	15	delete_label
60	Can view label	15	view_label
61	Can add string	16	add_unit
62	Can change string	16	change_unit
63	Can delete string	16	delete_unit
64	Can view string	16	view_unit
65	Can add string suggestion	17	add_suggestion
66	Can change string suggestion	17	change_suggestion
67	Can delete string suggestion	17	delete_suggestion
68	Can view string suggestion	17	view_suggestion
69	Can add suggestion vote	18	add_vote
70	Can change suggestion vote	18	change_vote
71	Can delete suggestion vote	18	delete_vote
72	Can view suggestion vote	18	view_vote
73	Can add Component list	19	add_componentlist
74	Can change Component list	19	change_componentlist
75	Can delete Component list	19	delete_componentlist
76	Can view Component list	19	view_componentlist
77	Can add component alert	20	add_alert
78	Can change component alert	20	change_alert
79	Can delete component alert	20	delete_alert
80	Can view component alert	20	view_alert
81	Can add Announcement	21	add_announcement
82	Can change Announcement	21	change_announcement
83	Can delete Announcement	21	delete_announcement
84	Can view Announcement	21	view_announcement
85	Can add string comment	22	add_comment
86	Can change string comment	22	change_comment
87	Can delete string comment	22	delete_comment
88	Can view string comment	22	view_comment
89	Can add contributor license agreement	23	add_contributoragreement
90	Can change contributor license agreement	23	change_contributoragreement
91	Can delete contributor license agreement	23	delete_contributoragreement
92	Can view contributor license agreement	23	view_contributoragreement
93	Can add Automatic component list assignment	24	add_autocomponentlist
94	Can change Automatic component list assignment	24	change_autocomponentlist
95	Can delete Automatic component list assignment	24	delete_autocomponentlist
96	Can view Automatic component list assignment	24	view_autocomponentlist
97	Can add variant definition	25	add_variant
98	Can change variant definition	25	change_variant
99	Can delete variant definition	25	delete_variant
100	Can view variant definition	25	view_variant
101	Can add Category	26	add_category
102	Can change Category	26	change_category
103	Can delete Category	26	delete_category
104	Can view Category	26	view_category
105	Can add history event	27	add_change
106	Can change history event	27	change_change
107	Can delete history event	27	delete_change
108	Can view history event	27	view_change
109	Can add workflow setting	28	add_workflowsetting
110	Can change workflow setting	28	change_workflowsetting
111	Can delete workflow setting	28	delete_workflowsetting
112	Can view workflow setting	28	view_workflowsetting
113	Can add pending change	29	add_pendingunitchange
114	Can change pending change	29	change_pendingunitchange
115	Can delete pending change	29	delete_pendingunitchange
116	Can view pending change	29	view_pendingunitchange
117	Can add Language	30	add_language
118	Can change Language	30	change_language
119	Can delete Language	30	delete_language
120	Can view Language	30	view_language
121	Can add Plural form	31	add_plural
122	Can change Plural form	31	change_plural
123	Can delete Plural form	31	delete_plural
124	Can view Plural form	31	view_plural
125	Can add Translation memory entry	32	add_memory
126	Can change Translation memory entry	32	change_memory
127	Can delete Translation memory entry	32	delete_memory
128	Can view Translation memory entry	32	view_memory
129	Can add Screenshot	33	add_screenshot
130	Can change Screenshot	33	change_screenshot
131	Can delete Screenshot	33	delete_screenshot
132	Can view Screenshot	33	view_screenshot
133	Can add Font	34	add_font
134	Can change Font	34	change_font
135	Can delete Font	34	delete_font
136	Can view Font	34	view_font
137	Can add Font group	35	add_fontgroup
138	Can change Font group	35	change_fontgroup
139	Can delete Font group	35	delete_fontgroup
140	Can view Font group	35	view_fontgroup
141	Can add Font override	36	add_fontoverride
142	Can change Font override	36	change_fontoverride
143	Can delete Font override	36	delete_fontoverride
144	Can view Font override	36	view_fontoverride
145	Can add User profile	37	add_profile
146	Can change User profile	37	change_profile
147	Can delete User profile	37	delete_profile
148	Can view User profile	37	view_profile
149	Can add Verified e-mail	38	add_verifiedemail
150	Can change Verified e-mail	38	change_verifiedemail
151	Can delete Verified e-mail	38	delete_verifiedemail
152	Can view Verified e-mail	38	view_verifiedemail
153	Can add Audit log entry	39	add_auditlog
154	Can change Audit log entry	39	change_auditlog
155	Can delete Audit log entry	39	delete_auditlog
156	Can view Audit log entry	39	view_auditlog
157	Can add Notification subscription	40	add_subscription
158	Can change Notification subscription	40	change_subscription
159	Can delete Notification subscription	40	delete_subscription
160	Can view Notification subscription	40	view_subscription
161	Can add Setting	41	add_setting
162	Can change Setting	41	change_setting
163	Can delete Setting	41	delete_setting
164	Can view Setting	41	view_setting
165	Can add Support service	42	add_backupservice
166	Can change Support service	42	change_backupservice
167	Can delete Support service	42	delete_backupservice
168	Can view Support service	42	view_backupservice
169	Can add Backup log	43	add_backuplog
170	Can change Backup log	43	change_backuplog
171	Can delete Backup log	43	delete_backuplog
172	Can view Backup log	43	view_backuplog
173	Can add Configuration error	44	add_configurationerror
174	Can change Configuration error	44	change_configurationerror
175	Can delete Configuration error	44	delete_configurationerror
176	Can view Configuration error	44	view_configurationerror
177	Can add Support status	45	add_supportstatus
178	Can change Support status	45	change_supportstatus
179	Can delete Support status	45	delete_supportstatus
180	Can view Support status	45	view_supportstatus
181	Can add Metric	46	add_metric
182	Can change Metric	46	change_metric
183	Can delete Metric	46	delete_metric
184	Can view Metric	46	view_metric
185	Can add permission	47	add_permission
186	Can change permission	47	change_permission
187	Can delete permission	47	delete_permission
188	Can view permission	47	view_permission
189	Can add group	48	add_group
190	Can change group	48	change_group
191	Can delete group	48	delete_group
192	Can view group	48	view_group
193	Can add content type	49	add_contenttype
194	Can change content type	49	change_contenttype
195	Can delete content type	49	delete_contenttype
196	Can view content type	49	view_contenttype
197	Can add session	50	add_session
198	Can change session	50	change_session
199	Can delete session	50	delete_session
200	Can view session	50	view_session
201	Can add log entry	51	add_logentry
202	Can change log entry	51	change_logentry
203	Can delete log entry	51	delete_logentry
204	Can view log entry	51	view_logentry
205	Can add association	52	add_association
206	Can change association	52	change_association
207	Can delete association	52	delete_association
208	Can view association	52	view_association
209	Can add code	53	add_code
210	Can change code	53	change_code
211	Can delete code	53	delete_code
212	Can view code	53	view_code
213	Can add nonce	54	add_nonce
214	Can change nonce	54	change_nonce
215	Can delete nonce	54	delete_nonce
216	Can view nonce	54	view_nonce
217	Can add user social auth	55	add_usersocialauth
218	Can change user social auth	55	change_usersocialauth
219	Can delete user social auth	55	delete_usersocialauth
220	Can view user social auth	55	view_usersocialauth
221	Can add partial	56	add_partial
222	Can change partial	56	change_partial
223	Can delete partial	56	delete_partial
224	Can view partial	56	view_partial
225	Can add Token	57	add_token
226	Can change Token	57	change_token
227	Can delete Token	57	delete_token
228	Can view Token	57	view_token
229	Can add Token	58	add_tokenproxy
230	Can change Token	58	change_tokenproxy
231	Can delete Token	58	delete_tokenproxy
232	Can view Token	58	view_tokenproxy
233	Can add crontab	59	add_crontabschedule
234	Can change crontab	59	change_crontabschedule
235	Can delete crontab	59	delete_crontabschedule
236	Can view crontab	59	view_crontabschedule
237	Can add interval	60	add_intervalschedule
238	Can change interval	60	change_intervalschedule
239	Can delete interval	60	delete_intervalschedule
240	Can view interval	60	view_intervalschedule
241	Can add periodic task	61	add_periodictask
242	Can change periodic task	61	change_periodictask
243	Can delete periodic task	61	delete_periodictask
244	Can view periodic task	61	view_periodictask
245	Can add periodic task track	62	add_periodictasks
246	Can change periodic task track	62	change_periodictasks
247	Can delete periodic task track	62	delete_periodictasks
248	Can view periodic task track	62	view_periodictasks
249	Can add solar event	63	add_solarschedule
250	Can change solar event	63	change_solarschedule
251	Can delete solar event	63	delete_solarschedule
252	Can view solar event	63	view_solarschedule
253	Can add clocked	64	add_clockedschedule
254	Can change clocked	64	change_clockedschedule
255	Can delete clocked	64	delete_clockedschedule
256	Can view clocked	64	view_clockedschedule
257	Can add static device	65	add_staticdevice
258	Can change static device	65	change_staticdevice
259	Can delete static device	65	delete_staticdevice
260	Can view static device	65	view_staticdevice
261	Can add static token	66	add_statictoken
262	Can change static token	66	change_statictoken
263	Can delete static token	66	delete_statictoken
264	Can view static token	66	view_statictoken
265	Can add TOTP device	67	add_totpdevice
266	Can change TOTP device	67	change_totpdevice
267	Can delete TOTP device	67	delete_totpdevice
268	Can view TOTP device	67	view_totpdevice
269	Can add WebAuthn credential	68	add_webauthncredential
270	Can change WebAuthn credential	68	change_webauthncredential
271	Can delete WebAuthn credential	68	delete_webauthncredential
272	Can view WebAuthn credential	68	view_webauthncredential
273	Can add WebAuthn attestation	69	add_webauthnattestation
274	Can change WebAuthn attestation	69	change_webauthnattestation
275	Can delete WebAuthn attestation	69	delete_webauthnattestation
276	Can view WebAuthn attestation	69	view_webauthnattestation
277	Can add WebAuthn user handle	70	add_webauthnuserhandle
278	Can change WebAuthn user handle	70	change_webauthnuserhandle
279	Can delete WebAuthn user handle	70	delete_webauthnuserhandle
280	Can view WebAuthn user handle	70	view_webauthnuserhandle
\.


--
-- Data for Name: authtoken_token; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.authtoken_token (key, created, user_id) FROM stdin;
wlu_m8E6a0FiCiJVieSCksoMLk3Zq1f5Tt6gcXmS	2026-01-13 10:35:49.063043+00	1
wlu_icbCL7oMiunXcfTwbEGeBGl5NcMLkASyHKIa	2026-01-13 10:36:00.321566+00	2
\.


--
-- Data for Name: checks_check; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.checks_check (id, name, dismissed, unit_id) FROM stdin;
\.


--
-- Data for Name: configuration_setting; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.configuration_setting (id, category, name, value) FROM stdin;
1	2	weblate	{}
2	2	weblate-translation-memory	{}
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
\.


--
-- Data for Name: django_celery_beat_clockedschedule; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.django_celery_beat_clockedschedule (id, clocked_time) FROM stdin;
\.


--
-- Data for Name: django_celery_beat_crontabschedule; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.django_celery_beat_crontabschedule (id, minute, hour, day_of_week, day_of_month, month_of_year, timezone) FROM stdin;
12	16	6	*	*	*	UTC
23	6	14	*	*	*	UTC
26	8	12	*	*	*	UTC
20	51	2	*	*	*	UTC
24	3	11	*	*	*	UTC
27	20	18	*	*	*	UTC
21	3	17	*	*	*	UTC
1	0	4	*	*	*	UTC
3	0	2	mon	*	*	UTC
4	0	3	*	1	*	UTC
5	30	*	*	*	*	UTC
6	45	3	*	*	*	UTC
8	45	0	*	*	*	UTC
22	21	15	*	*	*	UTC
9	50	0	*	*	*	UTC
10	30	2	*	*	*	UTC
2	0	1	*	*	*	UTC
11	30	1	*	*	*	UTC
28	50	7	*	*	*	UTC
13	0	2	*	*	*	UTC
14	45	*	*	*	*	UTC
15	6	6	*	*	*	UTC
16	35	0	*	*	*	UTC
25	55	8	*	*	*	UTC
17	55	0	*	*	*	UTC
18	1	0	*	*	*	UTC
19	1	23	*	*	*	UTC
7	40	0	*	*	*	UTC
\.


--
-- Data for Name: django_celery_beat_intervalschedule; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.django_celery_beat_intervalschedule (id, every, period) FROM stdin;
2	120	seconds
1	3600	seconds
\.


--
-- Data for Name: django_celery_beat_periodictask; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.django_celery_beat_periodictask (id, name, task, args, kwargs, queue, exchange, routing_key, expires, enabled, last_run_at, total_run_count, date_changed, description, crontab_id, interval_id, solar_id, one_off, start_time, priority, headers, clocked_id, expire_seconds) FROM stdin;
3	auditlog-cleanup	weblate.accounts.tasks.cleanup_auditlog	[]	{}	\N	\N	\N	\N	t	2026-01-16 05:39:03.598754+00	47	2026-01-19 10:12:06.740938+00		\N	1	\N	f	\N	\N	{}	\N	\N
22	backup	weblate.wladmin.tasks.backup	[]	{}	\N	\N	\N	\N	t	2026-01-16 02:39:03.480538+00	3	2026-01-19 10:12:06.982696+00		13	\N	\N	f	\N	\N	{}	\N	\N
23	daily-addons	weblate.addons.tasks.daily_addons	[]	{}	\N	\N	\N	\N	t	2026-01-16 05:45:00.001517+00	56	2026-01-19 10:12:06.986892+00		14	\N	\N	f	\N	\N	{}	\N	\N
4	notify-daily	weblate.accounts.tasks.notify_daily	[]	{}	\N	\N	\N	\N	t	2026-01-16 01:06:50.005753+00	3	2026-01-19 10:12:06.778196+00		2	\N	\N	f	\N	\N	{}	\N	\N
5	notify-weekly	weblate.accounts.tasks.notify_weekly	[]	{}	\N	\N	\N	\N	t	\N	0	2026-01-19 10:12:06.801643+00		3	\N	\N	f	\N	\N	{}	\N	\N
24	cleanup-addon-activity-log	weblate.addons.tasks.cleanup_addon_activity_log	[]	{}	\N	\N	\N	\N	t	2026-01-16 01:06:49.999437+00	3	2026-01-19 10:12:06.990459+00		7	\N	\N	f	\N	\N	{}	\N	\N
25	disable-expired	weblate.auth.tasks.disable_expired	[]	{}	\N	\N	\N	\N	t	2026-01-16 05:39:03.763087+00	47	2026-01-19 10:12:06.994209+00		\N	1	\N	f	\N	\N	{}	\N	\N
26	cleanup_invitations	weblate.auth.tasks.cleanup_invitations	[]	{}	\N	\N	\N	\N	t	2026-01-15 06:06:00.077917+00	1	2026-01-19 10:12:06.997835+00		15	\N	\N	f	\N	\N	{}	\N	\N
6	notify-monthly	weblate.accounts.tasks.notify_monthly	[]	{}	\N	\N	\N	\N	t	\N	0	2026-01-19 10:12:06.814732+00		4	\N	\N	f	\N	\N	{}	\N	\N
27	screenshot-files-cleanup	weblate.screenshots.tasks.cleanup_screenshot_files	[]	{}	\N	\N	\N	\N	t	2026-01-16 01:06:49.9908+00	3	2026-01-19 10:12:07.001446+00		16	\N	\N	f	\N	\N	{}	\N	\N
28	font-files-cleanup	weblate.fonts.tasks.cleanup_font_files	[]	{}	\N	\N	\N	\N	t	2026-01-16 01:06:49.987302+00	3	2026-01-19 10:12:07.004839+00		17	\N	\N	f	\N	\N	{}	\N	\N
29	collect-metrics	weblate.metrics.tasks.collect_metrics	[]	{}	\N	\N	\N	\N	t	2026-01-16 01:06:49.986201+00	3	2026-01-19 10:12:07.009278+00		18	\N	\N	f	\N	\N	{}	\N	\N
30	cleanup-metrics	weblate.metrics.tasks.cleanup_metrics	[]	{}	\N	\N	\N	\N	t	2026-01-15 23:54:26.567299+00	3	2026-01-19 10:12:07.013606+00		19	\N	\N	f	\N	\N	{}	\N	\N
31	update_gitexport_urls	weblate.gitexport.tasks.update_gitexport_urls	[]	{}	\N	\N	\N	\N	t	2026-01-16 01:06:49.984931+00	3	2026-01-19 10:12:07.024365+00		7	\N	\N	f	\N	\N	{}	\N	\N
7	commit-pending	weblate.trans.tasks.commit_pending	[]	{}	\N	\N	\N	\N	t	2026-01-16 05:39:03.770752+00	47	2026-01-19 10:12:06.834796+00		\N	1	\N	f	\N	\N	{}	\N	\N
8	update-remotes	weblate.trans.tasks.update_remotes	[]	{}	\N	\N	\N	\N	t	2026-01-16 05:39:03.701104+00	47	2026-01-19 10:12:06.855504+00		\N	1	\N	f	\N	\N	{}	\N	\N
2	social-auth-cleanup	weblate.accounts.tasks.cleanup_social_auth	[]	{}	\N	\N	\N	\N	t	2026-01-19 10:12:07.04295+00	48	2026-01-19 10:12:07.076425+00		\N	1	\N	f	\N	\N	{}	\N	\N
9	daily-update-checks	weblate.trans.tasks.daily_update_checks	[]	{}	\N	\N	\N	\N	t	2026-01-16 05:30:00.013249+00	53	2026-01-19 10:12:06.875215+00		5	\N	\N	f	\N	\N	{}	\N	\N
10	repository-alerts	weblate.trans.tasks.repository_alerts	[]	{}	\N	\N	\N	\N	t	2026-01-16 03:45:00.047418+00	3	2026-01-19 10:12:06.883684+00		6	\N	\N	f	\N	\N	{}	\N	\N
11	component-alerts	weblate.trans.tasks.component_alerts	[]	{}	\N	\N	\N	\N	t	2026-01-16 05:39:03.717876+00	47	2026-01-19 10:12:06.891745+00		\N	1	\N	f	\N	\N	{}	\N	\N
12	suggestions-cleanup	weblate.trans.tasks.cleanup_suggestions	[]	{}	\N	\N	\N	\N	t	2026-01-16 01:06:49.975589+00	3	2026-01-19 10:12:06.899771+00		7	\N	\N	f	\N	\N	{}	\N	\N
13	cleanup-stale-repos	weblate.trans.tasks.cleanup_stale_repos	[]	{}	\N	\N	\N	\N	t	2026-01-16 01:06:49.974097+00	3	2026-01-19 10:12:06.908277+00		7	\N	\N	f	\N	\N	{}	\N	\N
14	cleanup-old-suggestions	weblate.trans.tasks.cleanup_old_suggestions	[]	{}	\N	\N	\N	\N	t	2026-01-16 01:06:49.969905+00	3	2026-01-19 10:12:06.918214+00		8	\N	\N	f	\N	\N	{}	\N	\N
15	cleanup-old-comments	weblate.trans.tasks.cleanup_old_comments	[]	{}	\N	\N	\N	\N	t	2026-01-16 01:06:49.968155+00	3	2026-01-19 10:12:06.926475+00		9	\N	\N	f	\N	\N	{}	\N	\N
16	cleanup-project-backups	weblate.trans.tasks.cleanup_project_backups	[]	{}	\N	\N	\N	\N	t	2026-01-16 02:39:03.364206+00	3	2026-01-19 10:12:06.933793+00		10	\N	\N	f	\N	\N	{}	\N	\N
17	cleanup-project-backup-download	weblate.trans.tasks.cleanup_project_backup_download	[]	{}	\N	\N	\N	\N	t	2026-01-16 05:39:03.750158+00	47	2026-01-19 10:12:06.941685+00		\N	1	\N	f	\N	\N	{}	\N	\N
18	settings-backup	weblate.utils.tasks.settings_backup	[]	{}	\N	\N	\N	\N	t	2026-01-16 01:06:49.924839+00	3	2026-01-19 10:12:06.95537+00		2	\N	\N	f	\N	\N	{}	\N	\N
19	database-backup	weblate.utils.tasks.database_backup	[]	{}	\N	\N	\N	\N	t	2026-01-16 02:39:02.533859+00	3	2026-01-19 10:12:06.961898+00		11	\N	\N	f	\N	\N	{}	\N	\N
20	heartbeat	weblate.utils.tasks.heartbeat	[]	{}	\N	\N	\N	\N	t	2026-01-16 05:52:08.716702+00	499	2026-01-19 10:12:06.966715+00		\N	2	\N	f	\N	\N	{}	\N	\N
1	celery.backend_cleanup	celery.backend_cleanup	[]	{}	\N	\N	\N	\N	t	2026-01-16 04:00:00.056438+00	3	2026-01-19 10:12:06.691856+00		1	\N	\N	f	\N	\N	{}	\N	43200
21	support-status-update	weblate.wladmin.tasks.support_status_update	[]	{}	\N	\N	\N	\N	t	2026-01-15 19:34:57.188503+00	4	2026-01-19 10:12:06.976609+00		28	\N	\N	f	\N	\N	{}	\N	\N
\.


--
-- Data for Name: django_celery_beat_periodictasks; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.django_celery_beat_periodictasks (ident, last_update) FROM stdin;
1	2026-01-19 10:12:07.024686+00
\.


--
-- Data for Name: django_celery_beat_solarschedule; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.django_celery_beat_solarschedule (id, event, latitude, longitude) FROM stdin;
\.


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	addons	addon
2	addons	event
3	addons	addonactivitylog
4	weblate_auth	user
5	weblate_auth	permission
6	weblate_auth	role
7	weblate_auth	group
8	weblate_auth	autogroup
9	weblate_auth	invitation
10	weblate_auth	userblock
11	checks	check
12	trans	project
13	trans	component
14	trans	translation
15	trans	label
16	trans	unit
17	trans	suggestion
18	trans	vote
19	trans	componentlist
20	trans	alert
21	trans	announcement
22	trans	comment
23	trans	contributoragreement
24	trans	autocomponentlist
25	trans	variant
26	trans	category
27	trans	change
28	trans	workflowsetting
29	trans	pendingunitchange
30	lang	language
31	lang	plural
32	memory	memory
33	screenshots	screenshot
34	fonts	font
35	fonts	fontgroup
36	fonts	fontoverride
37	accounts	profile
38	accounts	verifiedemail
39	accounts	auditlog
40	accounts	subscription
41	configuration	setting
42	wladmin	backupservice
43	wladmin	backuplog
44	wladmin	configurationerror
45	wladmin	supportstatus
46	metrics	metric
47	auth	permission
48	auth	group
49	contenttypes	contenttype
50	sessions	session
51	admin	logentry
52	social_django	association
53	social_django	code
54	social_django	nonce
55	social_django	usersocialauth
56	social_django	partial
57	authtoken	token
58	authtoken	tokenproxy
59	django_celery_beat	crontabschedule
60	django_celery_beat	intervalschedule
61	django_celery_beat	periodictask
62	django_celery_beat	periodictasks
63	django_celery_beat	solarschedule
64	django_celery_beat	clockedschedule
65	otp_static	staticdevice
66	otp_static	statictoken
67	otp_totp	totpdevice
68	django_otp_webauthn	webauthncredential
69	django_otp_webauthn	webauthnattestation
70	django_otp_webauthn	webauthnuserhandle
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	weblate_auth	0001_initial	2026-01-13 10:35:15.715333+00
2	lang	0001_squashed_0008_auto_20200408_0436	2026-01-13 10:35:16.01881+00
3	lang	0009_auto_20200521_0753	2026-01-13 10:35:16.023103+00
4	lang	0010_auto_20200627_0508	2026-01-13 10:35:16.026223+00
5	lang	0011_alter_plural_source	2026-01-13 10:35:16.02831+00
6	lang	0012_alter_plural_type	2026-01-13 10:35:16.029887+00
7	lang	0013_alter_plural_formula	2026-01-13 10:35:16.032425+00
8	lang	0014_language_population	2026-01-13 10:35:16.035152+00
9	lang	0015_population	2026-01-13 10:35:16.038862+00
10	lang	0016_alter_plural_source	2026-01-13 10:35:16.04117+00
11	lang	0017_alter_plural_type	2026-01-13 10:35:16.041943+00
12	lang	0018_alter_plural_type	2026-01-13 10:35:16.042644+00
13	lang	0019_alter_plural_type	2026-01-13 10:35:16.043183+00
14	lang	0020_alter_plural_source	2026-01-13 10:35:16.043595+00
15	trans	0001_squashed_0074_fix_broken_browser_alert	2026-01-13 10:35:17.381695+00
16	trans	0075_auto_20200501_1428	2026-01-13 10:35:17.388175+00
17	trans	0076_comment_userdetails	2026-01-13 10:35:17.389422+00
18	trans	0077_auto_20200513_1512	2026-01-13 10:35:17.390423+00
19	trans	0078_auto_20200515_0729	2026-01-13 10:35:17.391356+00
20	trans	0079_auto_20200519_1436	2026-01-13 10:35:17.392253+00
21	trans	0080_auto_20200522_0909	2026-01-13 10:35:17.392948+00
22	trans	0081_announcement_notify	2026-01-13 10:35:17.393816+00
23	trans	0082_component_push_branch	2026-01-13 10:35:17.394739+00
24	trans	0083_component_restricted	2026-01-13 10:35:17.39574+00
25	trans	0084_auto_20200605_0648	2026-01-13 10:35:17.39659+00
26	trans	0085_change_glossary_term	2026-01-13 10:35:17.397573+00
27	trans	0086_auto_20200609_1134	2026-01-13 10:35:17.398427+00
28	trans	0087_auto_20200615_0747	2026-01-13 10:35:17.399619+00
29	trans	0088_component_auto_lock_error	2026-01-13 10:35:17.400688+00
30	trans	0089_auto_20200630_1321	2026-01-13 10:35:17.401534+00
31	trans	0090_alert_updated	2026-01-13 10:35:17.402351+00
32	trans	0091_json_key	2026-01-13 10:35:17.403336+00
33	trans	0092_alert_dismissed	2026-01-13 10:35:17.404061+00
34	trans	0093_auto_20200730_1432	2026-01-13 10:35:17.405184+00
35	trans	0094_project_language_aliases	2026-01-13 10:35:17.406108+00
36	trans	0095_fix_json_units	2026-01-13 10:35:17.406992+00
37	trans	0096_fix_enforced_checks	2026-01-13 10:35:17.407854+00
38	trans	0097_component_source_language	2026-01-13 10:35:17.408691+00
39	trans	0098_move_source_language	2026-01-13 10:35:17.409528+00
40	trans	0099_remove_project_source_language	2026-01-13 10:35:17.410309+00
41	trans	0100_auto_20200912_1131	2026-01-13 10:35:17.411147+00
42	trans	0101_fix_rename_changes	2026-01-13 10:35:17.411905+00
43	trans	0102_unit_source_unit	2026-01-13 10:35:17.412608+00
44	trans	0103_update_source_unit	2026-01-13 10:35:17.413339+00
45	trans	0104_update_source_unit_source	2026-01-13 10:35:17.41404+00
46	trans	0105_auto_20201006_1254	2026-01-13 10:35:17.414888+00
47	trans	0106_remove_unit_content_hash	2026-01-13 10:35:17.415789+00
48	trans	0107_component_links	2026-01-13 10:35:17.416521+00
49	trans	0108_move_mailing	2026-01-13 10:35:17.417308+00
50	trans	0109_remove_project_mail	2026-01-13 10:35:17.418118+00
51	trans	0110_auto_20210120_0845	2026-01-13 10:35:17.418833+00
52	trans	0111_index_explanation	2026-01-13 10:35:17.419445+00
53	trans	0112_component_new_unit	2026-01-13 10:35:17.420529+00
54	trans	0113_component_new_unit	2026-01-13 10:35:17.421246+00
55	trans	0114_auto_20210129_1239	2026-01-13 10:35:17.422029+00
56	trans	0115_auto_20210201_1305	2026-01-13 10:35:17.4227+00
57	trans	0116_migrate_glossaries	2026-01-13 10:35:17.423598+00
58	trans	0117_remove_change_glossary_term	2026-01-13 10:35:17.424421+00
59	trans	0118_fixup_glossary_changes	2026-01-13 10:35:17.424919+00
60	trans	0119_auto_20210206_1141	2026-01-13 10:35:17.425479+00
61	trans	0120_glossary_name	2026-01-13 10:35:17.425922+00
62	trans	0121_remove_component_glossary_name	2026-01-13 10:35:17.426493+00
63	trans	0122_auto_20210228_1846	2026-01-13 10:35:17.426979+00
64	trans	0123_fix_enforced_checks	2026-01-13 10:35:17.42759+00
65	trans	0124_glossary_new_lang	2026-01-13 10:35:17.428122+00
66	trans	0125_unit_details	2026-01-13 10:35:17.428773+00
67	trans	0126_auto_20210312_1348	2026-01-13 10:35:17.429438+00
68	trans	0127_fix_source_glossary	2026-01-13 10:35:17.430006+00
69	trans	0128_fix_pending_read_only	2026-01-13 10:35:17.43041+00
70	trans	0130_glossary_target	2026-01-13 10:35:17.43085+00
71	trans	0131_alter_unit_index_together	2026-01-13 10:35:17.431339+00
72	trans	0132_alter_unit_state	2026-01-13 10:35:17.431946+00
73	trans	0133_glossary_missing_files	2026-01-13 10:35:17.432406+00
74	trans	0134_component_remote_revision	2026-01-13 10:35:17.432856+00
75	trans	0135_component_local_revision	2026-01-13 10:35:17.433361+00
76	trans	0136_auto_20210611_0731	2026-01-13 10:35:17.433896+00
77	trans	0137_alter_project_language_aliases	2026-01-13 10:35:17.434549+00
78	trans	0138_alter_component_report_source_bugs	2026-01-13 10:35:17.435137+00
79	trans	0139_alter_component_repoweb	2026-01-13 10:35:17.435562+00
80	trans	0140_fix_commit_age	2026-01-13 10:35:17.435954+00
81	trans	0141_alter_component_commit_pending_age	2026-01-13 10:35:17.436634+00
82	trans	0142_projecttoken	2026-01-13 10:35:17.437255+00
83	trans	0143_alter_unit_labels	2026-01-13 10:35:17.437678+00
84	trans	0144_projecttoken_user	2026-01-13 10:35:17.43825+00
85	trans	0145_alter_change_action	2026-01-13 10:35:17.438632+00
86	trans	0146_alter_component_merge_style	2026-01-13 10:35:17.439123+00
87	trans	0147_delete_projecttoken	2026-01-13 10:35:17.439495+00
88	trans	0148_alter_component_language_code_style	2026-01-13 10:35:17.43999+00
89	trans	0149_component_pull_message	2026-01-13 10:35:17.440545+00
90	trans	0150_convert_context	2026-01-13 10:35:17.440878+00
91	trans	0151_project_machinery_settings	2026-01-13 10:35:17.441211+00
92	trans	0152_alter_change_action	2026-01-13 10:35:17.441554+00
93	trans	0153_rename_java_language	2026-01-13 10:35:17.442045+00
94	trans	0154_alter_component_language_code_style	2026-01-13 10:35:17.442719+00
95	trans	0155_java_format	2026-01-13 10:35:17.443429+00
96	trans	0156_alter_change_action	2026-01-13 10:35:17.443818+00
97	trans	0157_alter_alert_details_alter_component_enforced_checks	2026-01-13 10:35:17.444313+00
98	trans	0158_alter_change_action	2026-01-13 10:35:17.44483+00
99	trans	0159_alter_change_index_together_alter_change_timestamp_and_more	2026-01-13 10:35:17.445275+00
100	trans	0160_alter_change_index_together	2026-01-13 10:35:17.445767+00
101	trans	0161_alter_project_name_alter_project_web	2026-01-13 10:35:17.446363+00
102	trans	0162_alter_component_language_code_style	2026-01-13 10:35:17.446867+00
103	trans	0163_update_indexes	2026-01-13 10:35:17.447335+00
104	trans	0164_alter_component_push_alter_component_repo	2026-01-13 10:35:17.447899+00
200	accounts	0006_auto_20200903_0817	2026-01-13 10:35:21.8472+00
105	trans	0165_rename_change_timestamp_project_component_language_action_trans_chang_timesta_33178f_idx_and_more	2026-01-13 10:35:17.448438+00
106	trans	0166_alter_change_action	2026-01-13 10:35:17.44946+00
107	trans	0167_pending_explanation	2026-01-13 10:35:17.450055+00
108	trans	0168_unit_last_updated_unit_target_hash	2026-01-13 10:35:17.451069+00
109	trans	0169_unit_trans_unit_source_md5_index_and_more	2026-01-13 10:35:17.451855+00
110	trans	0170_component_screenshot_filemask	2026-01-13 10:35:17.452664+00
111	trans	0171_alter_component_language_code_style	2026-01-13 10:35:17.45356+00
112	trans	0172_alter_change_action	2026-01-13 10:35:17.454273+00
113	trans	0173_change_duplicate_string	2026-01-13 10:35:17.455092+00
114	trans	0174_adjust_fluent_unit_flags	2026-01-13 10:35:17.455934+00
115	trans	0175_alert_details_new_change_details_new_and_more	2026-01-13 10:35:17.456647+00
116	trans	0176_jsonfield	2026-01-13 10:35:17.457532+00
117	trans	0177_remove_alert_details_remove_change_details_and_more	2026-01-13 10:35:17.458317+00
118	trans	0178_rename_details_new_alert_details_and_more	2026-01-13 10:35:17.458866+00
119	trans	0179_alter_change_action	2026-01-13 10:35:17.4595+00
120	trans	0180_change_duplicate_language	2026-01-13 10:35:17.460449+00
121	trans	0181_change_trans_chang_user_id_b1b554_idx	2026-01-13 10:35:17.461393+00
122	trans	0182_category_component_category	2026-01-13 10:35:17.462314+00
123	trans	0183_alter_component_unique_together	2026-01-13 10:35:17.463347+00
124	trans	0184_alter_change_action	2026-01-13 10:35:17.464419+00
125	trans	0185_alter_component_allow_translation_propagation_and_more	2026-01-13 10:35:17.465174+00
126	trans	0186_alter_unit_translation	2026-01-13 10:35:17.466185+00
127	trans	0187_alter_variant_unique_together_alter_alert_component_and_more	2026-01-13 10:35:17.466939+00
128	trans	0188_remove_change_trans_chang_timesta_33178f_idx_and_more	2026-01-13 10:35:17.467706+00
129	trans	0189_remove_unit_trans_unit_source_md5_index_and_more	2026-01-13 10:35:17.468658+00
130	screenshots	0001_squashed_0006_remove_screenshot_sources	2026-01-13 10:35:17.533587+00
131	screenshots	0002_screenshot_translation	2026-01-13 10:35:17.53502+00
132	screenshots	0003_fill_translation	2026-01-13 10:35:17.53575+00
133	screenshots	0004_auto_20201002_1423	2026-01-13 10:35:17.536417+00
134	screenshots	0005_alter_screenshot_options	2026-01-13 10:35:17.537004+00
135	screenshots	0006_screenshot_repository_filename	2026-01-13 10:35:17.537618+00
136	screenshots	0007_alter_screenshot_image	2026-01-13 10:35:17.53836+00
137	trans	0129_auto_20210319_1419	2026-01-13 10:35:17.56352+00
138	trans	0003_alter_project_access_control	2026-01-13 10:35:17.5909+00
139	trans	0004_alter_change_action	2026-01-13 10:35:17.678514+00
140	trans	0005_alter_change_alert_alter_change_announcement_and_more	2026-01-13 10:35:18.068839+00
141	trans	0006_alter_change_action	2026-01-13 10:35:18.14466+00
142	trans	0007_alter_change_action	2026-01-13 10:35:18.412252+00
143	trans	0008_workflowsetting	2026-01-13 10:35:18.471261+00
144	trans	0009_alter_change_action	2026-01-13 10:35:18.501814+00
145	trans	0010_unit_trans_unit_pending	2026-01-13 10:35:18.524884+00
146	trans	0011_alter_component_suggestion_autoaccept_and_more	2026-01-13 10:35:18.572652+00
147	trans	0012_alter_announcement_notify	2026-01-13 10:35:18.593033+00
148	lang	0002_alter_plural_source	2026-01-13 10:35:18.605443+00
149	lang	0003_alter_plural_type	2026-01-13 10:35:18.622323+00
150	trans	0013_alter_category_options_category_category_slug_unique_and_more	2026-01-13 10:35:18.72707+00
151	trans	0014_alter_component_repoweb_alter_project_web	2026-01-13 10:35:18.780902+00
152	trans	0015_alter_component_language_code_style	2026-01-13 10:35:18.801405+00
153	trans	0016_alter_component_repoweb	2026-01-13 10:35:18.822676+00
154	trans	0017_announcement_severity_change_category_and_more	2026-01-13 10:35:18.959823+00
155	trans	0017_alter_change_action	2026-01-13 10:35:18.97881+00
156	trans	0018_merge_20240529_1359	2026-01-13 10:35:18.981209+00
157	trans	0019_label_description	2026-01-13 10:35:18.997246+00
158	trans	0019_alter_change_action	2026-01-13 10:35:19.028978+00
159	trans	0020_merge_0019_alter_change_action_0019_label_description	2026-01-13 10:35:19.031338+00
160	trans	0021_component_processed_revision	2026-01-13 10:35:19.051189+00
161	trans	0022_project_enforced_2fa	2026-01-13 10:35:19.065297+00
162	trans	0023_alter_label_description	2026-01-13 10:35:19.090714+00
163	trans	0024_component_key_filter	2026-01-13 10:35:19.172974+00
164	trans	0025_alter_announcement_notify	2026-01-13 10:35:19.223669+00
165	authtoken	0001_initial	2026-01-13 10:35:19.416803+00
166	authtoken	0002_auto_20160226_1747	2026-01-13 10:35:20.250207+00
167	weblate_auth	0002_auto_20180507_1540_squashed_0011_auto_20180509_0739_squashed_0007_group_components	2026-01-13 10:35:21.175064+00
168	weblate_auth	0008_auto_20200611_1232	2026-01-13 10:35:21.180494+00
169	weblate_auth	0009_migrate_componentlist	2026-01-13 10:35:21.181243+00
170	weblate_auth	0010_migrate_componentlist	2026-01-13 10:35:21.181803+00
171	weblate_auth	0011_unique_case_insensitive	2026-01-13 10:35:21.182401+00
172	weblate_auth	0012_auto_20200729_1200	2026-01-13 10:35:21.183053+00
173	weblate_auth	0013_rename_sources_group	2026-01-13 10:35:21.184235+00
174	weblate_auth	0014_auto_20210512_1955	2026-01-13 10:35:21.188977+00
175	weblate_auth	0015_userblock	2026-01-13 10:35:21.189786+00
176	weblate_auth	0016_alter_userblock_unique_together	2026-01-13 10:35:21.190282+00
177	weblate_auth	0017_alter_user_email	2026-01-13 10:35:21.190737+00
178	weblate_auth	0018_fixup_role	2026-01-13 10:35:21.191136+00
179	weblate_auth	0019_alter_role_name	2026-01-13 10:35:21.191657+00
180	weblate_auth	0020_group_defining_project	2026-01-13 10:35:21.192037+00
181	weblate_auth	0021_migrate_internal_groups	2026-01-13 10:35:21.192416+00
182	weblate_auth	0022_alter_user_managers	2026-01-13 10:35:21.192751+00
183	weblate_auth	0023_user_is_bot	2026-01-13 10:35:21.193034+00
184	weblate_auth	0024_bot_users	2026-01-13 10:35:21.193399+00
185	weblate_auth	0025_group_admins	2026-01-13 10:35:21.193733+00
186	weblate_auth	0026_remove_selection_lists	2026-01-13 10:35:21.194098+00
187	weblate_auth	0027_alter_group_components	2026-01-13 10:35:21.194467+00
188	weblate_auth	0028_alter_autogroup_match	2026-01-13 10:35:21.194865+00
189	weblate_auth	0029_invitation	2026-01-13 10:35:21.195355+00
190	weblate_auth	0030_alter_invitation_group_alter_user_groups	2026-01-13 10:35:21.195895+00
191	weblate_auth	0031_alter_userblock_user	2026-01-13 10:35:21.196457+00
192	weblate_auth	0003_alter_autogroup_options_alter_autogroup_group_and_more	2026-01-13 10:35:21.310776+00
193	default	0001_initial	2026-01-13 10:35:21.406359+00
194	social_auth	0001_initial	2026-01-13 10:35:21.406911+00
195	accounts	0001_squashed_0019_auto_20200403_2004	2026-01-13 10:35:21.838739+00
196	accounts	0002_profile_nearby_strings	2026-01-13 10:35:21.842473+00
197	accounts	0003_auto_20200630_1321	2026-01-13 10:35:21.844776+00
198	accounts	0004_profile_commented	2026-01-13 10:35:21.845884+00
199	accounts	0005_update_comment_count	2026-01-13 10:35:21.846577+00
201	accounts	0007_auto_20200904_0840	2026-01-13 10:35:21.848801+00
202	accounts	0008_auto_20200923_1216	2026-01-13 10:35:21.850811+00
203	accounts	0009_auto_20200923_2023	2026-01-13 10:35:21.853339+00
204	accounts	0010_auto_20201213_1314	2026-01-13 10:35:21.854557+00
205	accounts	0011_auto_20210106_1903	2026-01-13 10:35:21.855197+00
206	accounts	0012_profile_auto_watch	2026-01-13 10:35:21.85568+00
207	accounts	0013_auto_20210217_1653	2026-01-13 10:35:21.856161+00
208	accounts	0014_auto_20210506_1421	2026-01-13 10:35:21.856562+00
209	accounts	0015_auto_20210512_1955	2026-01-13 10:35:21.856944+00
210	accounts	0016_alter_auditlog_activity	2026-01-13 10:35:21.857451+00
211	accounts	0017_alter_verifiedemail_email	2026-01-13 10:35:21.858187+00
212	accounts	0018_alter_profile_language	2026-01-13 10:35:21.859307+00
213	accounts	0019_alter_auditlog_user	2026-01-13 10:35:21.862557+00
214	accounts	0020_anonymous_auditlog	2026-01-13 10:35:21.865575+00
215	accounts	0021_profile_commit_email_verifiedemail_is_deliverable	2026-01-13 10:35:21.867954+00
216	accounts	0022_alter_profile_linkedin	2026-01-13 10:35:21.870563+00
217	accounts	0023_cleanup_deleted_users	2026-01-13 10:35:21.872263+00
218	accounts	0024_rename_be_latn	2026-01-13 10:35:21.872997+00
219	accounts	0025_profile_theme	2026-01-13 10:35:21.873622+00
220	accounts	0026_alter_subscription_notification_and_more	2026-01-13 10:35:21.874282+00
221	accounts	0027_alter_subscription_notification	2026-01-13 10:35:21.874729+00
222	accounts	0028_auditlog_params_new	2026-01-13 10:35:21.875478+00
223	accounts	0029_jsonfield	2026-01-13 10:35:21.876001+00
224	accounts	0030_remove_auditlog_params	2026-01-13 10:35:21.876471+00
225	accounts	0031_rename_params_new_auditlog_params	2026-01-13 10:35:21.877182+00
226	accounts	0032_alter_auditlog_activity	2026-01-13 10:35:21.877788+00
227	accounts	0033_alter_auditlog_activity	2026-01-13 10:35:21.87827+00
228	accounts	0034_alter_subscription_frequency_and_more	2026-01-13 10:35:21.879672+00
229	accounts	0002_new_string_notification	2026-01-13 10:35:22.0153+00
230	accounts	0003_alter_auditlog_activity	2026-01-13 10:35:22.068541+00
231	accounts	0004_alter_profile_twitter	2026-01-13 10:35:22.657107+00
232	accounts	0005_verifiedemail_accounts_verifiedemail_email	2026-01-13 10:35:23.121182+00
233	accounts	0006_alter_auditlog_activity	2026-01-13 10:35:23.189746+00
234	accounts	0007_alter_profile_codesite_alter_profile_fediverse_and_more	2026-01-13 10:35:23.578254+00
235	accounts	0008_alter_auditlog_activity	2026-01-13 10:35:23.660149+00
236	accounts	0009_alter_profile_dashboard_view	2026-01-13 10:35:23.938607+00
237	accounts	0010_alter_subscription_notification	2026-01-13 10:35:24.43753+00
238	accounts	0011_alter_subscription_notification	2026-01-13 10:35:24.88173+00
239	accounts	0012_alter_auditlog_activity_profile_last_2fa	2026-01-13 10:35:25.925679+00
240	accounts	0013_bot_notifications	2026-01-13 10:35:26.681893+00
241	accounts	0014_alter_subscription_unique_together_and_more	2026-01-13 10:35:27.599778+00
242	accounts	0015_alter_auditlog_activity	2026-01-13 10:35:27.754561+00
243	accounts	0016_profile_contact	2026-01-13 10:35:28.085234+00
244	accounts	0017_profile_contribute_personal_tm	2026-01-13 10:35:28.302901+00
245	accounts	0018_alter_profile_dashboard_view	2026-01-13 10:35:28.651178+00
246	accounts	0019_alter_auditlog_activity	2026-01-13 10:35:28.870007+00
247	accounts	0020_alter_auditlog_activity	2026-01-13 10:35:29.049856+00
248	accounts	0021_audit_address	2026-01-13 10:35:29.685449+00
249	weblate_auth	0003_fixup_teams	2026-01-13 10:35:31.927105+00
250	weblate_auth	0004_merge_20240219_0936	2026-01-13 10:35:31.939475+00
251	weblate_auth	0005_invitation_full_name_invitation_username	2026-01-13 10:35:32.06675+00
252	weblate_auth	0006_group_enforced_2fa	2026-01-13 10:35:32.131296+00
253	trans	0026_alter_contributoragreement_options_and_more	2026-01-13 10:35:32.36411+00
254	trans	0027_alter_change_action	2026-01-13 10:35:32.447037+00
255	trans	0028_alter_change_action	2026-01-13 10:35:32.527262+00
256	trans	0029_alter_change_action	2026-01-13 10:35:32.616109+00
257	trans	0030_alter_change_action	2026-01-13 10:35:32.689952+00
258	trans	0031_alter_change_action	2026-01-13 10:35:32.799383+00
259	lang	0004_alter_language_direction	2026-01-13 10:35:32.935141+00
260	trans	0032_remove_change_trans_chang_timesta_2565db_idx_and_more	2026-01-13 10:35:34.753742+00
261	trans	0033_component_secondary_language_and_more	2026-01-13 10:35:36.100766+00
262	trans	0034_project_check_flags	2026-01-13 10:35:36.230333+00
263	trans	0035_alter_comment_timestamp	2026-01-13 10:35:36.317975+00
264	trans	0036_alter_component_is_glossary	2026-01-13 10:35:36.440148+00
265	trans	0037_component_contribute_project_tm	2026-01-13 10:35:36.542786+00
266	trans	0038_alter_change_action	2026-01-13 10:35:36.603825+00
267	trans	0039_pendingunitchange	2026-01-13 10:35:37.053142+00
268	trans	0040_auto_20250613_1813	2026-01-13 10:35:37.343822+00
269	trans	0041_remove_unit_trans_unit_pending_remove_unit_pending	2026-01-13 10:35:37.587714+00
270	trans	0042_project_commit_policy	2026-01-13 10:35:37.746107+00
271	trans	0043_alter_pendingunitchange_state	2026-01-13 10:35:37.810811+00
272	trans	0042_project_autoclean_tm	2026-01-13 10:35:38.168769+00
273	trans	0044_merge_20250721_1211	2026-01-13 10:35:38.184467+00
274	trans	0045_alter_change_action	2026-01-13 10:35:38.359537+00
275	addons	0001_squashed_0021_linguas_daily	2026-01-13 10:35:38.740616+00
276	addons	0002_cleanup_addon_events	2026-01-13 10:35:38.742793+00
277	addons	0003_alter_event_event	2026-01-13 10:35:38.744199+00
278	addons	0004_addon_configuration_new_addon_state_new	2026-01-13 10:35:38.745737+00
279	addons	0005_jsonfield	2026-01-13 10:35:38.746352+00
280	addons	0006_remove_addon_configuration_remove_addon_state	2026-01-13 10:35:38.748716+00
281	addons	0007_rename_configuration_new_addon_configuration_and_more	2026-01-13 10:35:38.752849+00
282	addons	0008_alter_event_addon	2026-01-13 10:35:38.755689+00
283	addons	0002_remove_addon_project_scope_addon_project_and_more	2026-01-13 10:35:39.407926+00
284	addons	0003_addonactivitylog	2026-01-13 10:35:39.593895+00
285	addons	0004_alter_addonactivitylog_event_alter_event_event	2026-01-13 10:35:39.837975+00
286	addons	0005_alter_addonactivitylog_event_alter_event_event	2026-01-13 10:35:40.26692+00
287	addons	0006_alter_addonactivitylog_component	2026-01-13 10:35:41.245376+00
288	trans	0046_component_file_format_params	2026-01-13 10:35:41.504562+00
289	addons	0007_update_autotranslate_filter_type	2026-01-13 10:35:41.655238+00
290	addons	0008_alter_addonactivitylog_event_alter_event_event	2026-01-13 10:35:41.774532+00
291	addons	0009_remove_migrated_customize_addons	2026-01-13 10:35:41.906331+00
292	addons	0010_alter_addonactivitylog_event_alter_event_event	2026-01-13 10:35:42.066674+00
293	addons	0011_addonactivitylog_pending	2026-01-13 10:35:42.2541+00
294	addons	0012_add_change_event_to_autotranslate	2026-01-13 10:35:42.434041+00
295	contenttypes	0001_initial	2026-01-13 10:35:42.475987+00
296	admin	0001_initial	2026-01-13 10:35:42.673013+00
297	admin	0002_logentry_remove_auto_add	2026-01-13 10:35:42.753867+00
298	admin	0003_logentry_add_action_flag_choices	2026-01-13 10:35:42.853764+00
299	contenttypes	0002_remove_content_type_name	2026-01-13 10:35:43.079055+00
300	auth	0001_initial	2026-01-13 10:35:43.580411+00
301	auth	0002_alter_permission_name_max_length	2026-01-13 10:35:43.661822+00
302	auth	0003_alter_user_email_max_length	2026-01-13 10:35:43.669483+00
303	auth	0004_alter_user_username_opts	2026-01-13 10:35:43.691438+00
304	auth	0005_alter_user_last_login_null	2026-01-13 10:35:43.714409+00
305	auth	0006_require_contenttypes_0002	2026-01-13 10:35:43.717074+00
306	auth	0007_alter_validators_add_error_messages	2026-01-13 10:35:43.727956+00
307	auth	0008_alter_user_username_max_length	2026-01-13 10:35:43.743619+00
308	auth	0009_alter_user_last_name_max_length	2026-01-13 10:35:43.756786+00
309	auth	0010_alter_group_name_max_length	2026-01-13 10:35:43.871505+00
310	auth	0011_update_proxy_permissions	2026-01-13 10:35:43.995377+00
311	auth	0012_alter_user_first_name_max_length	2026-01-13 10:35:43.999487+00
312	authtoken	0003_tokenproxy	2026-01-13 10:35:44.001146+00
313	authtoken	0004_alter_tokenproxy_options	2026-01-13 10:35:44.017298+00
314	checks	0001_squashed_0003_auto_20191212_1441	2026-01-13 10:35:44.252881+00
315	checks	0004_auto_20200516_1821	2026-01-13 10:35:44.254825+00
316	checks	0005_alter_check_options	2026-01-13 10:35:44.257088+00
317	checks	0006_auto_20210923_0807	2026-01-13 10:35:44.261023+00
318	checks	0007_alter_check_unit	2026-01-13 10:35:44.261708+00
319	configuration	0001_initial	2026-01-13 10:35:44.482598+00
320	configuration	0002_alter_setting_options	2026-01-13 10:35:44.483578+00
321	configuration	0003_alter_setting_category	2026-01-13 10:35:44.484192+00
322	configuration	0004_machinery	2026-01-13 10:35:44.484853+00
323	configuration	0002_alter_setting_category	2026-01-13 10:35:44.557572+00
324	django_celery_beat	0001_initial	2026-01-13 10:35:44.683775+00
325	django_celery_beat	0002_auto_20161118_0346	2026-01-13 10:35:44.731413+00
326	django_celery_beat	0003_auto_20161209_0049	2026-01-13 10:35:44.751222+00
327	django_celery_beat	0004_auto_20170221_0000	2026-01-13 10:35:44.754424+00
328	django_celery_beat	0005_add_solarschedule_events_choices	2026-01-13 10:35:44.757867+00
329	django_celery_beat	0006_auto_20180322_0932	2026-01-13 10:35:44.818506+00
330	django_celery_beat	0007_auto_20180521_0826	2026-01-13 10:35:44.861612+00
331	django_celery_beat	0008_auto_20180914_1922	2026-01-13 10:35:44.890566+00
332	django_celery_beat	0006_auto_20180210_1226	2026-01-13 10:35:44.906513+00
333	django_celery_beat	0006_periodictask_priority	2026-01-13 10:35:44.915344+00
334	django_celery_beat	0009_periodictask_headers	2026-01-13 10:35:44.922794+00
335	django_celery_beat	0010_auto_20190429_0326	2026-01-13 10:35:45.437564+00
336	django_celery_beat	0011_auto_20190508_0153	2026-01-13 10:35:45.451983+00
337	django_celery_beat	0012_periodictask_expire_seconds	2026-01-13 10:35:45.465741+00
338	django_celery_beat	0013_auto_20200609_0727	2026-01-13 10:35:45.487272+00
339	django_celery_beat	0014_remove_clockedschedule_enabled	2026-01-13 10:35:45.493396+00
340	django_celery_beat	0015_edit_solarschedule_events_choices	2026-01-13 10:35:45.497423+00
341	django_celery_beat	0016_alter_crontabschedule_timezone	2026-01-13 10:35:45.503146+00
342	django_celery_beat	0017_alter_crontabschedule_month_of_year	2026-01-13 10:35:45.50815+00
343	django_celery_beat	0018_improve_crontab_helptext	2026-01-13 10:35:45.512878+00
344	django_celery_beat	0019_alter_periodictasks_options	2026-01-13 10:35:45.514927+00
345	django_otp_webauthn	0001_initial	2026-01-13 10:35:45.606359+00
346	django_otp_webauthn	0002_timestamps	2026-01-13 10:35:45.606834+00
347	django_otp_webauthn	0003_webauthncredential_hash_binary_to_hex	2026-01-13 10:35:45.607172+00
348	django_otp_webauthn	0004_webauthnuserhandle	2026-01-13 10:35:45.633911+00
349	fonts	0001_squashed_0007_auto_20190517_1907	2026-01-13 10:35:45.782364+00
350	fonts	0002_auto_20210512_1955	2026-01-13 10:35:45.783162+00
351	fonts	0003_alter_fontgroup_unique_together_and_more	2026-01-13 10:35:45.783601+00
352	gitexport	0001_squashed_0002_fill_in_url	2026-01-13 10:35:45.895219+00
353	glossary	0001_initial	2026-01-13 10:35:45.896131+00
354	glossary	0002_migrate_dictionary	2026-01-13 10:35:45.896677+00
355	glossary	0003_fulltext	2026-01-13 10:35:45.896917+00
356	glossary	0004_glossary_source_language	2026-01-13 10:35:45.897149+00
357	glossary	0005_set_source_language	2026-01-13 10:35:45.897355+00
358	glossary	0006_auto_20210203_1342	2026-01-13 10:35:45.897513+00
359	memory	0001_squashed_0006_memory_update	2026-01-13 10:35:45.992228+00
360	memory	0007_use_trigram	2026-01-13 10:35:45.992719+00
361	memory	0008_adjust_similarity	2026-01-13 10:35:45.993028+00
362	memory	0009_pg_index	2026-01-13 10:35:45.993309+00
363	memory	0010_auto_20210506_1439	2026-01-13 10:35:45.993586+00
364	memory	0011_alter_memory_options	2026-01-13 10:35:45.993821+00
365	memory	0012_remove_blank	2026-01-13 10:35:45.994053+00
366	memory	0013_reindex	2026-01-13 10:35:45.994305+00
367	memory	0014_rename_index	2026-01-13 10:35:45.994572+00
368	memory	0015_remove_blank	2026-01-13 10:35:45.994851+00
369	memory	0016_remove_blank	2026-01-13 10:35:45.99514+00
370	memory	0002_memory_memory_md5_index	2026-01-13 10:35:46.070011+00
371	memory	0003_drop_hash_index	2026-01-13 10:35:46.119232+00
372	memory	0004_memory_status_and_context	2026-01-13 10:35:46.223498+00
373	metrics	0001_initial	2026-01-13 10:35:46.231067+00
374	metrics	0002_import_user_metrics	2026-01-13 10:35:46.231489+00
375	metrics	0003_fixup_non_unique	2026-01-13 10:35:46.231811+00
376	metrics	0004_auto_20210330_0633	2026-01-13 10:35:46.232083+00
377	metrics	0005_add_missing_user	2026-01-13 10:35:46.232367+00
378	metrics	0006_auto_20210331_1047	2026-01-13 10:35:46.232628+00
379	metrics	0007_auto_20210402_1205	2026-01-13 10:35:46.232904+00
380	metrics	0008_alter_metric_value	2026-01-13 10:35:46.233167+00
381	metrics	0009_alter_metric_name	2026-01-13 10:35:46.233406+00
382	metrics	0010_alter_metric_options	2026-01-13 10:35:46.233676+00
383	metrics	0011_metric_kind	2026-01-13 10:35:46.234024+00
384	metrics	0012_migrate_kind	2026-01-13 10:35:46.234397+00
385	metrics	0013_auto_20210930_1841	2026-01-13 10:35:46.234643+00
386	metrics	0014_metricfuture	2026-01-13 10:35:46.234876+00
387	metrics	0015_migrate_metrics	2026-01-13 10:35:46.23516+00
388	metrics	0016_delete_metric	2026-01-13 10:35:46.235443+00
389	metrics	0017_rename_metricfuture_metric	2026-01-13 10:35:46.235685+00
390	metrics	0018_alter_metric_unique_together	2026-01-13 10:35:46.235974+00
391	metrics	0002_new_public_projects_metric_data	2026-01-13 10:35:46.673023+00
392	otp_static	0001_initial	2026-01-13 10:35:46.819897+00
393	otp_static	0002_throttling	2026-01-13 10:35:46.868826+00
394	otp_static	0003_add_timestamps	2026-01-13 10:35:46.911024+00
395	otp_totp	0001_initial	2026-01-13 10:35:46.963858+00
396	otp_totp	0002_auto_20190420_0723	2026-01-13 10:35:47.002427+00
397	otp_totp	0003_add_timestamps	2026-01-13 10:35:47.03805+00
398	sessions	0001_initial	2026-01-13 10:35:47.050504+00
399	default	0002_add_related_name	2026-01-13 10:35:47.087192+00
400	social_auth	0002_add_related_name	2026-01-13 10:35:47.087949+00
401	default	0003_alter_email_max_length	2026-01-13 10:35:47.09409+00
402	social_auth	0003_alter_email_max_length	2026-01-13 10:35:47.094459+00
403	default	0004_auto_20160423_0400	2026-01-13 10:35:47.118864+00
404	social_auth	0004_auto_20160423_0400	2026-01-13 10:35:47.119609+00
405	social_auth	0005_auto_20160727_2333	2026-01-13 10:35:47.130897+00
406	social_django	0006_partial	2026-01-13 10:35:47.141629+00
407	social_django	0007_code_timestamp	2026-01-13 10:35:47.14874+00
408	social_django	0008_partial_timestamp	2026-01-13 10:35:47.153674+00
409	social_django	0009_auto_20191118_0520	2026-01-13 10:35:47.199433+00
410	social_django	0010_uid_db_index	2026-01-13 10:35:47.223227+00
411	social_django	0011_alter_id_fields	2026-01-13 10:35:47.329853+00
412	social_django	0012_usersocialauth_extra_data_new	2026-01-13 10:35:47.36759+00
413	social_django	0013_migrate_extra_data	2026-01-13 10:35:47.466582+00
414	social_django	0014_remove_usersocialauth_extra_data	2026-01-13 10:35:47.526049+00
415	social_django	0015_rename_extra_data_new_usersocialauth_extra_data	2026-01-13 10:35:47.561355+00
416	social_django	0016_alter_usersocialauth_extra_data	2026-01-13 10:35:47.580757+00
417	social_django	0017_usersocialauth_user_social_auth_uid_required	2026-01-13 10:35:47.596742+00
418	trans	0047_pendingunitchange_metadata	2026-01-13 10:35:47.616279+00
419	trans	0048_change_trans_change_category_idx	2026-01-13 10:35:47.646063+00
420	trans	0049_component_hide_glossary_matches	2026-01-13 10:35:47.689401+00
421	trans	0050_alter_component_file_format_params	2026-01-13 10:35:47.741092+00
422	trans	0051_alter_pendingunitchange_state_and_more	2026-01-13 10:35:47.99936+00
423	trans	0052_unit_automatically_translated_alter_unit_labels	2026-01-13 10:35:48.016045+00
424	trans	0053_migrate_automatically_translated_label_to_unit_field	2026-01-13 10:35:48.049388+00
425	trans	0052_migrate_laravel	2026-01-13 10:35:48.083836+00
426	trans	0054_merge_20251129_1406	2026-01-13 10:35:48.084494+00
427	trans	0055_alter_change_action	2026-01-13 10:35:48.107524+00
428	trans	0056_alter_change_action	2026-01-13 10:35:48.140375+00
429	trans	0057_alter_component_push_alter_component_repo	2026-01-13 10:35:48.248666+00
430	trans	0058_alter_component_push_branch	2026-01-13 10:35:48.28763+00
431	trans	0059_alter_change_action	2026-01-13 10:35:48.32961+00
432	trans	0060_alter_component_language_regex	2026-01-13 10:35:48.375923+00
433	trans	0061_pendingunitchange_automatically_translated	2026-01-13 10:35:48.410093+00
434	utils	0001_alter_role	2026-01-13 10:35:48.50946+00
435	vcs	0001_cleanup_ssh_hosts	2026-01-13 10:35:48.574588+00
436	weblate_auth	0007_alter_user_date_expires	2026-01-13 10:35:48.715769+00
437	weblate_auth	0008_userblock_note	2026-01-13 10:35:48.74566+00
438	wladmin	0001_squashed_0008_auto_20191011_0816	2026-01-13 10:35:48.781235+00
439	wladmin	0002_supportstatus_discoverable	2026-01-13 10:35:48.78214+00
440	wladmin	0003_auto_20210512_1955	2026-01-13 10:35:48.782807+00
441	wladmin	0004_alter_backupservice_repository	2026-01-13 10:35:48.783575+00
442	wladmin	0005_alter_backuplog_event	2026-01-13 10:35:48.784169+00
443	wladmin	0006_rename_configurationerror_ignored_timestamp_wladmin_con_ignored_fb498d_idx	2026-01-13 10:35:48.784773+00
444	wladmin	0007_supportstatus_limits	2026-01-13 10:35:48.785428+00
445	wladmin	0008_alter_backupservice_repository	2026-01-13 10:35:48.786247+00
446	wladmin	0002_update_default_focus_color	2026-01-13 10:35:48.833854+00
447	wladmin	0003_supportstatus_backup_repository_and_more	2026-01-13 10:35:48.841606+00
448	wladmin	0004_supportstatus_enabled	2026-01-13 10:35:48.848632+00
449	addons	0001_squashed_weblate_5	2026-01-13 10:35:48.852852+00
450	weblate_auth	0002_squashed_weblate_5	2026-01-13 10:35:48.853703+00
451	checks	0001_squashed_weblate_5	2026-01-13 10:35:48.854134+00
452	glossary	0001_squashed_weblate_5	2026-01-13 10:35:48.854552+00
453	trans	0001_squashed_weblate_5	2026-01-13 10:35:48.854939+00
454	trans	0002_change_screenshot	2026-01-13 10:35:48.855306+00
455	lang	0001_squashed_weblate_5	2026-01-13 10:35:48.855627+00
456	memory	0001_squashed_weblate_5	2026-01-13 10:35:48.856007+00
457	screenshots	0001_squashed_weblate_5	2026-01-13 10:35:48.856338+00
458	fonts	0001_squashed_weblate_5	2026-01-13 10:35:48.856634+00
459	accounts	0001_squashed_weblate_5	2026-01-13 10:35:48.857018+00
460	configuration	0001_squashed_weblate_5	2026-01-13 10:35:48.857343+00
461	wladmin	0001_squashed_weblate_5	2026-01-13 10:35:48.85768+00
462	metrics	0001_squashed_weblate_5	2026-01-13 10:35:48.858059+00
463	social_django	0004_auto_20160423_0400	2026-01-13 10:35:48.858422+00
464	social_django	0005_auto_20160727_2333	2026-01-13 10:35:48.858777+00
465	social_django	0001_initial	2026-01-13 10:35:48.85909+00
466	social_django	0002_add_related_name	2026-01-13 10:35:48.859385+00
467	social_django	0003_alter_email_max_length	2026-01-13 10:35:48.859651+00
468	django_otp_webauthn	0001_squashed_0003_webauthncredential_hash_binary_to_hex	2026-01-13 10:35:48.859946+00
\.


--
-- Data for Name: django_otp_webauthn_webauthnattestation; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.django_otp_webauthn_webauthnattestation (id, fmt, data, client_data_json, credential_id) FROM stdin;
\.


--
-- Data for Name: django_otp_webauthn_webauthncredential; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.django_otp_webauthn_webauthncredential (id, name, confirmed, credential_type, credential_id, public_key, transports, sign_count, backup_eligible, backup_state, created_at, last_used_at, aaguid, credential_id_sha256, discoverable, user_id) FROM stdin;
\.


--
-- Data for Name: django_otp_webauthn_webauthnuserhandle; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.django_otp_webauthn_webauthnuserhandle (handle_hex, user_id) FROM stdin;
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
\.


--
-- Data for Name: fonts_font; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.fonts_font (id, family, style, font, "timestamp", project_id, user_id) FROM stdin;
\.


--
-- Data for Name: fonts_fontgroup; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.fonts_fontgroup (id, name, font_id, project_id) FROM stdin;
\.


--
-- Data for Name: fonts_fontoverride; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.fonts_fontoverride (id, font_id, group_id, language_id) FROM stdin;
\.


--
-- Data for Name: lang_language; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.lang_language (id, code, name, direction, population) FROM stdin;
1	aa	Afar	ltr	2305971
2	ab	Abkhazian	ltr	111858
3	abr	Abron	ltr	1729455
4	ace	Acehnese	ltr	3941867
5	ach	Acholi	ltr	1823471
6	ada	Adangme	ltr	1037673
7	ady	Adyghe	ltr	451988
8	ae	Avestan	rtl	0
9	aeb	Arabic (Tunisian)	rtl	10843920
10	af	Afrikaans	ltr	9966164
11	afh	Afrihili	ltr	0
12	aii	Assyrian Neo-Aramaic	rtl	0
13	ain	Ainu (Japan)	ltr	0
14	ak	Akan	ltr	13489749
15	akk	Akkadian	ltr	0
16	ale	Aleut	ltr	0
17	aln	Albanian (Gheg)	ltr	1463046
18	alt	Altai (Southern)	ltr	19714
19	am	Amharic	ltr	39176975
20	ami	Amis	ltr	0
21	an	Aragonese	ltr	24585
22	ang	English (Old)	ltr	0
23	anp	Angika	ltr	0
24	apc	Arabic (Levantine)	rtl	43682528
25	apd	Arabic (Sudanese)	rtl	30785053
26	ar	Arabic	rtl	378792526
27	ar_BH	Arabic (Bahrain)	rtl	1363194
28	ar_DZ	Arabic (Algeria)	rtl	34796650
29	ar_EG	Arabic (Egypt)	rtl	104572180
30	ar_KW	Arabic (Kuwait)	rtl	3138360
31	ar_LY	Arabic (Libya)	rtl	5447332
32	ar_MA	Arabic (Morocco)	rtl	23180312
33	ar_SA	Arabic (Saudi Arabia)	rtl	36544400
34	ar_XB	Arabic (XB pseudolocale)	rtl	0
35	ar_YE	Arabic (Yemen)	rtl	23783896
36	arc	Aramaic	rtl	0
37	arn	Mapudungun	ltr	279970
38	arp	Arapaho	ltr	0
39	arq	Arabic (Algerian)	rtl	39028675
40	ars	Arabic (Najdi)	rtl	1096332
41	arw	Arawak	ltr	0
42	arz	Arabic (Egyptian)	rtl	71198080
43	as	Assamese	ltr	18318690
44	asa	Asu	ltr	809545
45	ast	Asturian	ltr	614645
46	av	Avaric	ltr	549201
47	avk	Kotava	ltr	0
48	awa	Awadhi	ltr	27458162
49	ay	Aymara	ltr	2984003
50	ayc	Aymara (Southern)	ltr	0
51	az	Azerbaijani	ltr	10101162
52	azb	Azerbaijani (Southern)	ltr	0
53	ba	Bashkir	ltr	1830673
54	bal	Baluchi	rtl	8751140
55	ban	Balinese	ltr	5068116
56	bar	Bavarian	ltr	22819828
57	bas	Basa (Cameroon)	ltr	371593
58	bbc	Batak Toba	ltr	2590370
59	bci	Baoulé	ltr	3297998
60	be	Belarusian	ltr	2991098
61	be_Latn	Belarusian (Latin script)	ltr	2991098
62	bej	Beja	ltr	2725234
63	bem	Bemba	ltr	7071694
64	ber	Berber	ltr	0
65	bew	Betawi	ltr	5912802
66	bez	Bena	ltr	1146855
67	bg	Bulgarian	ltr	7684020
68	bgc	Haryanvi	ltr	16909560
69	bgn	Balochi (Western)	rtl	2186207
70	bh	Bihari	ltr	0
71	bhb	Bhili	ltr	1690955
72	bhi	Bhilali	ltr	1296399
73	bho	Bhojpuri	ltr	34639016
74	bi	Bislama	ltr	286206
75	bik	Bikol	ltr	3548310
76	bin	Bini	ltr	1680903
77	bjj	Kanauji	ltr	7891128
78	bjn	Banjar	ltr	4228269
79	bla	Siksika	ltr	6595
80	blo	Anii	ltr	57468
81	bm	Bambara	ltr	10115676
82	bn	Bengali	ltr	279893704
83	bn_BD	Bengali (Bangladesh)	ltr	165323060
84	bn_IN	Bengali (India)	ltr	114139530
85	bnt	Bantu (Other)	ltr	0
86	bo	Tibetan	ltr	3061778
87	bo_CN	Tibetan (China)	ltr	2832080
88	bqi	Luri (Bakhtiari)	rtl	1237416
89	br	Breton	ltr	567509
90	bra	Braj	ltr	57774
91	brb	Brao	ltr	0
92	brh	Brahui	ltr	3280732
93	brx	Bodo	ltr	1972782
94	bs	Bosnian	ltr	3760683
95	bs_Cyrl	Bosnian (Cyrillic script)	ltr	3760683
96	bs_Latn	Bosnian (Latin script)	ltr	3760683
97	bua	Buriat	ltr	309806
98	bug	Buginese	ltr	4532298
99	bum	Bulu (Cameroon)	ltr	1424440
100	byn	Bilen	ltr	82471
101	ca	Catalan	ltr	8218781
102	ca@valencia	Valencian	ltr	8218781
103	ca_AD	Catalan (Andorra)	ltr	43538
104	cad	Caddo	ltr	0
105	cak	Kaqchikel	ltr	1606457
106	car	Galibi Carib	ltr	0
107	cdo_Hans	Mindong (Simplified Han script)	ltr	0
108	cdo_Hant	Mindong (Traditional Han script)	ltr	0
109	cdo_Latn	Mindong (Latin script)	ltr	0
110	ce	Chechen	ltr	929418
111	ceb	Cebuano	ltr	28386480
112	cgg	Chiga	ltr	2661282
113	ch	Chamorro	ltr	46498
114	chb	Chibcha	ltr	0
115	chg	Chagatai	ltr	0
116	chk	Chuukese	ltr	29880
117	chm	Mari	ltr	521037
118	chn	Chinook jargon	ltr	0
119	cho	Choctaw	ltr	11284
120	chp	Chipewyan	ltr	12414
121	chr	Cherokee	ltr	26331
122	chy	Cheyenne	ltr	0
123	ckb	Kurdish (Central)	rtl	5606845
124	ckb_IQ	Kurdish (Central, Iraq)	rtl	5050008
125	ckb_IR	Kurdish (Central, Iran)	rtl	556837
126	cnr	Montenegrin	ltr	0
127	cnr_Cyrl	Montenegrin (Cyrillic script)	ltr	0
128	co	Corsican	ltr	164099
129	cop	Coptic	ltr	6674820
130	cpe	Creoles and pidgins (English based)	ltr	0
131	cpf	Creoles and pidgins (French-based)	ltr	0
132	cpp	Creoles and pidgins (Portuguese-based)	ltr	0
133	cpx_Hans	Puxian (Simplified Han script)	ltr	0
134	cpx_Hant	Puxian (Traditional Han script)	ltr	0
135	cpx_Latn	Puxian (Latin script)	ltr	0
136	cr	Cree	ltr	5043
137	crh	Crimean Tatar	ltr	199706
138	crp	Creoles and pidgins	ltr	0
139	cs	Czech	ltr	13236057
140	csb	Kashubian	ltr	50370
141	csw	Cree (Swampy)	ltr	4655
142	cu	Slavonic (Old Church)	ltr	0
143	cv	Chuvash	ltr	1830673
144	cy	Welsh	ltr	920984
145	da	Danish	ltr	7247744
146	dak	Dakota	ltr	21688
147	dar	Dargwa	ltr	366134
148	dcc	Deccan	ltr	13950386
149	de	German	ltr	141873196
150	de@formal	German (formal)	ltr	141873196
151	de@informal	German (informal)	ltr	141873196
152	de_1901	German (old spelling)	ltr	0
153	de_AT	German (Austria)	ltr	8698940
154	de_CH	German (Switzerland)	ltr	6734033
155	de_LU	German (Luxembourg)	ltr	422890
156	del	Delaware	ltr	0
157	den	Slave (Athapascan)	ltr	2327
158	dgr	Dogrib	ltr	2133
159	din	Dinka	ltr	0
160	dje	Zarma	ltr	4478276
161	dnj	Dan	ltr	1628814
162	dnk	Dengka	ltr	0
163	doi	Dogri	ltr	2818260
164	dru	Rukai	ltr	0
165	dry	Darai	ltr	0
166	dsb	Lower Sorbian	ltr	6981
167	dua	Duala	ltr	148637
168	dum	Dutch (Middle)	ltr	0
169	dv	Dhivehi	rtl	385308
170	dyu	Dyula	ltr	7373504
171	dz	Dzongkha	ltr	418554
172	ee	Ewe	ltr	5320859
173	efi	Efik	ltr	3314457
174	egl	Emilian	ltr	30482
175	egy	Egyptian (Ancient)	rtl	0
176	eka	Ekajuk	ltr	0
177	el	Greek	ltr	12249401
178	elx	Elamite	ltr	0
179	en	English	ltr	1728473503
180	en@pirate	English (Pirate)	ltr	1728473503
181	en_AU	English (Australia)	ltr	25697856
182	en_CA	English (Canada)	ltr	33751476
183	en_GB	English (United Kingdom)	ltr	67089918
184	en_IE	English (Ireland)	ltr	5128790
185	en_IN	English (India)	ltr	267734700
186	en_NZ	English (New Zealand)	ltr	5057985
187	en_PH	English (Philippines)	ltr	75697280
188	en_Shaw	English (Shavian)	ltr	0
189	en_Shaw_GB	English (Shavian script, United Kingdom)	ltr	0
190	en_Shaw_US	English (Shavian script, United States)	ltr	0
191	en_US	English (United States)	ltr	328284480
192	en_XA	English (XA pseudolocale)	ltr	0
193	en_ZA	English (South Africa)	ltr	18737206
194	en_devel	English (Developer)	ltr	1728473503
195	enm	English (Middle)	ltr	0
196	eo	Esperanto	ltr	298
197	es	Spanish	ltr	507599381
198	es@formal	Spanish (formal)	ltr	507599381
199	es@informal	Spanish (informal)	ltr	507599381
200	es_419	Spanish (Latin America)	ltr	0
201	es_AR	Spanish (Argentina)	ltr	46994400
202	es_BO	Spanish (Bolivia)	ltr	7510320
203	es_CL	Spanish (Chile)	ltr	18291406
204	es_CO	Spanish (Colombia)	ltr	46117212
205	es_CR	Spanish (Costa Rica)	ltr	5002301
206	es_CU	Spanish (Cuba)	ltr	10966000
207	es_DO	Spanish (Dominican Republic)	ltr	8436402
208	es_EC	Spanish (Ecuador)	ltr	17577600
209	es_MX	Spanish (Mexico)	ltr	108514200
210	es_NI	Spanish (Nicaragua)	ltr	5208021
211	es_PA	Spanish (Panama)	ltr	3084465
212	es_PE	Spanish (Peru)	ltr	23798146
213	es_PR	Spanish (Puerto Rico)	ltr	2626921
214	es_SV	Spanish (El Salvador)	ltr	5899543
215	es_US	Spanish (American)	ltr	32828448
216	es_UY	Spanish (Uruguay)	ltr	3014290
217	es_VE	Spanish (Venezuela)	ltr	25625246
218	et	Estonian	ltr	853779
219	eu	Basque	ltr	1034494
220	ewo	Ewondo	ltr	959949
221	ext	Extremaduran	ltr	231673
222	fa	Persian	rtl	89208445
223	fan	Fang (Equatorial Guinea)	ltr	915873
224	fat	Fanti	ltr	0
225	fbl	Bikol (West Albay)	ltr	2720371
226	ff	Fulah	ltr	8955864
227	ffm	Fulfulde (Maasina)	ltr	1693276
228	fi	Finnish	ltr	5789395
229	fil	Filipino	ltr	73198317
230	fj	Fijian	ltr	371128
231	fo	Faroese	ltr	72984
232	fon	Fon	ltr	3674275
233	fr	French	ltr	332956350
234	fr@formal	French (formal)	ltr	332956350
235	fr@informal	French (informal)	ltr	332956350
236	fr_AG	French (Antigua and Barbuda)	ltr	0
237	fr_BE	French (Belgium)	ltr	4551488
238	fr_CA	French (Canada)	ltr	11250492
239	fr_CH	French (Switzerland)	ltr	3455622
240	fr_LU	French (Luxembourg)	ltr	617553
241	fr_SN	French (Senegal)	ltr	4900350
242	frc	French (Louisiana)	ltr	28724
243	frk	Frankish	ltr	0
244	frm	French (Middle)	ltr	0
245	fro	French (Old)	ltr	0
246	frp	Franco-Provençal	ltr	64272
247	frr	Frisian (Northern)	ltr	10094
248	frs	Frisian (Eastern)	ltr	2018
249	fuq	Fulfulde (Central-Eastern Niger)	ltr	1843996
250	fur	Friulian	ltr	36578
251	fuv	Fulfulde (Nigerian)	ltr	15862049
252	fvr	Fur	ltr	1362617
253	fy	Frisian	ltr	764213
254	ga	Irish	ltr	1254049
255	gaa	Ga	ltr	968494
256	gan_Hans	Gan (Simplified Han script)	ltr	24072680
257	gan_Hant	Gan (Traditional Han script)	ltr	24072680
258	gay	Gayo	ltr	337874
259	gba	Gbaya (Central African Republic)	ltr	0
260	gbm	Garhwali	ltr	3804651
261	gd	Gaelic	ltr	75305
262	gez	Ge'ez	ltr	0
263	gil	Gilbertese	ltr	69927
264	gl	Galician	ltr	3323918
265	glk	Gilaki	ltr	4065797
266	gmh	High German (Middle)	ltr	0
267	gn	Guarani	ltr	6095531
268	goh	High German (Old)	ltr	0
269	gom	Konkani (Goan)	ltr	0
270	gon	Gondi	ltr	3381911
271	gor	Gorontalo	ltr	1154404
272	got	Gothic	ltr	0
273	grb	Grebo	ltr	538287
274	grc	Greek (Ancient)	ltr	0
275	gsw	Alemannic	ltr	8439155
276	gu	Gujarati	ltr	65626182
277	gu_IN	Gujarati (India)	ltr	63410850
278	guc	Wayuu	ltr	133888
279	gug	Guaraní (Paraguayan)	ltr	0
280	gum	Guambiano	ltr	0
281	gun	Guaraní (Mbyá)	ltr	0
282	gur	Farefare	ltr	1210618
283	guw	Gun	ltr	0
284	guz	Gusii	ltr	2854073
285	gv	Manx	ltr	1660
286	gwi	Gwichʼin	ltr	310
287	ha	Hausa	rtl	41875124
288	hai	Haida	ltr	0
289	hak_Hans	Hakka (Simplified Han script)	ltr	32568920
290	hak_Hant	Hakka (Traditional Han script)	ltr	2595483
291	hak_Latn	Hakka (Latin script)	ltr	32568920
292	haw	Hawaiian	ltr	30434
293	haz	Hazaragi	ltr	2367174
294	he	Hebrew	rtl	9402620
295	he_IL	Hebrew (Israel)	rtl	9402620
296	hi	Hindi	ltr	580318483
297	hi@hinglish	Hindi (Hinglish)	ltr	580318483
298	hi_Latn	Hindi (Latin script)	ltr	1409130
299	hil	Hiligaynon	ltr	9935268
300	hit	Hittite	ltr	0
301	hmn	Hmong	ltr	0
302	hnd	Hindko (Southern)	ltr	1034692
303	hne	Chhattisgarhi	ltr	15500430
304	hnj	Hmong Njua	ltr	815127
305	hno	Hindko (Northern)	ltr	4290188
306	ho	Hiri Motu	ltr	210970
307	hoc	Ho	ltr	1395038
308	hoj	Hadothi	ltr	1155486
309	hr	Croatian	ltr	6790797
310	hrx	Hunsrik	ltr	0
311	hsb	Upper Sorbian	ltr	13459
312	hsn	Xiang	ltr	41065160
313	ht	Haitian	ltr	9520659
314	hu	Hungarian	ltr	12313191
315	hup	Hupa	ltr	0
316	hus	Huastec	ltr	0
317	hy	Armenian	ltr	5443504
318	hz	Herero	ltr	255133
319	ia	Interlingua	ltr	136
320	iba	Iban	ltr	864120
321	ibb	Ibibio	ltr	3314457
322	id	Indonesian	ltr	180519583
323	ie	Occidental	ltr	1
324	ig	Igbo	ltr	30777110
325	ii	Nuosu	ltr	8496240
326	ik	Inupiaq	ltr	7865
327	ilo	Iloko	ltr	11354592
328	inh	Ingush	ltr	225313
329	io	Ido	ltr	0
330	is	Icelandic	ltr	364036
331	isv	Interslavic	ltr	0
332	it	Italian	ltr	70475318
333	it@formal	Italian (formal)	ltr	70475318
334	it@informal	Italian (informal)	ltr	70475318
335	it_CH	Italian (Switzerland)	ltr	1329085
336	iu	Inuktitut	ltr	42674
337	iu_Latn	Inuktitut (Latin script)	ltr	42674
338	ja	Japanese	ltr	117608755
339	ja_KS	Japanese (Kansai)	ltr	0
340	jam	Jamaican Patois	ltr	2682524
341	jbo	Lojban	ltr	0
342	jgo	Ngomba	ltr	105284
343	jmc	Machame	ltr	499219
344	jpr	Judeo-Persian	ltr	0
345	jrb	Judeo-Arabic	ltr	0
346	jv	Javanese	ltr	96145857
347	ka	Georgian	ltr	4324687
348	kaa	Karakalpak	ltr	1458023
349	kab	Kabyle	ltr	3667755
350	kac	Kachin	ltr	977960
351	kaj	Jju	ltr	497168
352	kam	Kamba (Kenya)	ltr	4426726
353	kaw	Kawi	ltr	0
354	kbd	Kabardian	ltr	1084265
355	kcg	Tyap	ltr	220174
356	kde	Makonde	ltr	1686552
357	kea	Kabuverdianu	ltr	556022
358	kek	Kekchí	ltr	1633483
359	kfr	Kachhi	ltr	1056847
360	kfy	Kumaoni	ltr	3100086
361	kg	Kongo	ltr	1731045
362	kha	Khasi	ltr	1127304
363	khn	Khandesi	ltr	2113695
364	kho	Khotanese	ltr	0
365	ki	Gikuyu	ltr	9901888
366	kj	Kwanyama	ltr	981280
367	kk	Kazakh	ltr	12966988
368	kk_Latn	Kazakh (Latin script)	ltr	12966988
369	kkj	Kako	ltr	167216
370	kl	Greenlandic	ltr	55678
371	kln	Kalenjin	ltr	4426726
372	km	Khmer (Central)	ltr	15186693
373	kmb	Kimbundu	ltr	9300525
374	kmr	Kurdish (Northern)	ltr	0
501	nb_NO	Norwegian Bokmål	ltr	5509730
375	kmr_Latn	Kurdish (Northern, Latin script)	ltr	0
376	kn	Kannada	ltr	52137810
377	ko	Korean	ltr	79278717
378	kok	Konkani	ltr	4509216
379	kok_Latn	Konkani (Latin script)	ltr	4509216
380	kos	Kosraean	ltr	7968
381	kpe	Kpelle	ltr	1618925
382	kr	Kanuri	ltr	0
383	krc	Karachay-Balkar	ltr	239395
384	kri	Krio	ltr	8664997
385	krl	Karelian	ltr	115473
386	kru	Kurukh	ltr	2677347
387	ks	Kashmiri	rtl	5951564
388	ksb	Shambala	ltr	1146855
389	ksh	Colognian	ltr	252357
390	ku	Kurdish	ltr	7214784
391	kum	Kumyk	ltr	281642
392	kut	Kutenai	ltr	0
393	kv	Komi	ltr	253477
394	kw	Cornish	ltr	1985
395	kxm	Khmer (Northern)	ltr	1188657
396	ky	Kyrgyz	ltr	2962608
397	la	Latin	ltr	820
398	lad	Ladino	ltr	122234
399	lag	Langi	ltr	586920
400	laj	Lango (Uganda)	ltr	1872754
401	lam	Lamba	ltr	0
402	lb	Luxembourgish	ltr	449740
403	lez	Lezghian	ltr	253477
404	lfn	Lingua Franca Nova	ltr	0
405	lg	Luganda	ltr	6406790
406	li	Limburgish	ltr	977482
407	lij	Ligurian	ltr	524298
408	lir	English (Liberian)	ltr	4023565
409	ljp	Lampung Api	ltr	1942777
410	lki	Laki	ltr	671740
411	lkt	Lakota	ltr	8207
412	lld	Ladin	ltr	29263
413	lmn	Lambadi	ltr	3804651
414	lmo	Lombard	ltr	3838282
415	ln	Lingala	ltr	3986653
416	lo	Lao	ltr	5487956
417	lol	Mongo	ltr	703958
418	loz	Lozi	ltr	1143950
419	lrc	Luri (Northern)	rtl	2112833
420	lt	Lithuanian	ltr	2405298
421	ltg	Latgalian	ltr	160311
422	lu	Luba-Katanga	ltr	2654269
423	lua	Luba-Lulua	ltr	11078688
424	lui	Luiseno	ltr	0
425	lun	Lunda	ltr	395182
426	luo	Luo (Kenya and Tanzania)	ltr	5708147
427	lus	Lushai	ltr	0
428	luy	Luyia	ltr	6407104
429	luz	Luri (Southern)	rtl	1060642
430	lv	Latvian	ltr	1098762
431	lv@formal	Latvian (formal)	ltr	1098762
432	lv@informal	Latvian (informal)	ltr	1098762
433	lzh	Literary Chinese	ltr	0
434	mad	Madurese	ltr	17738406
435	mag	Magahi	ltr	16909560
436	mai	Maithili	ltr	20333024
437	mak	Makasar	ltr	2055402
438	man	Mandingo	ltr	3948591
439	mas	Masai	ltr	1943873
440	mdf	Moksha	ltr	295724
441	mdh	Maguindanaon	ltr	1419324
442	mdr	Mandar	ltr	259037
443	men	Mende (Sierra Leone)	ltr	2555116
444	mer	Meru	ltr	2329856
445	mey	Hassaniyya	ltr	9244449
446	mfa	Malay (Pattani)	ltr	3496050
447	mfe	Morisyen	ltr	1179450
448	mg	Malagasy	ltr	26507430
449	mga	Irish (Middle)	ltr	0
450	mgh	Makhuwa-Meetto	ltr	1500795
451	mgo	Metaʼ	ltr	145540
452	mh	Marshallese	ltr	59868
453	mhr	Meadow Mari	ltr	0
454	mi	Maori	ltr	144513
455	mia	Miami	ltr	0
456	mic	Mi'kmaq	ltr	9310
457	min	Minangkabau	ltr	8446860
458	mis	Milang	ltr	0
459	mjw	Karbi	ltr	0
460	mk	Macedonian	ltr	1612846
461	ml	Malayalam	ltr	45922589
462	mn	Mongolian	ltr	3054074
463	mn_Cyrl	Mongolian (Cyrillic script)	ltr	3054074
464	mn_Mong	Mongolian (Traditional script)	ltr	3681704
465	mnc	Manchu	ltr	0
466	mni	Manipuri	ltr	1568599
467	mnk	Mandinka	ltr	0
468	mnw	Mon	ltr	981772
469	moe	Innu	ltr	11638
470	moh	Mohawk	ltr	1590
471	mos	Mossi	ltr	9216880
472	mr	Marathi	ltr	98639100
473	mrh	Mara	ltr	0
474	ms	Malay	ltr	36798159
475	ms_Arab	Malay (Jawi)	rtl	3403837
476	mt	Maltese	ltr	469730
477	mtr	Mewari	ltr	1366856
478	mus	Creek	ltr	4103
479	mwk	Maninkakan (Kita)	ltr	1099530
480	mwl	Mirandese	ltr	0
481	mwr	Marwari	ltr	16909560
482	mww	Hmong Daw	ltr	2179938
483	mxc	Manyika	ltr	1114776
484	my	Burmese	ltr	37171607
485	my@Zawgyi	Burmese (Zawgyi)	ltr	37171607
486	myv	Erzya	ltr	436545
487	myx	Masaaba	ltr	1429207
488	mzn	Mazanderani	rtl	4419345
489	na	Nauru	ltr	6924
490	nah	Nahuatl	ltr	0
491	nan_Hans	Minnan (Simplified Han script)	ltr	26904760
492	nan_Hant	Minnan (Traditional Han script)	ltr	13473164
493	nan_Hntl_pehoeji	Minnan (Traditional Hàn-lô script, Pe̍h-ōe-jī)	ltr	0
494	nan_Hntl_tailo	Minnan (Traditional Hàn-lô script, Tâi-lô)	ltr	0
495	nan_Latn_pehoeji	Minnan (Pe̍h-ōe-jī)	ltr	26904760
496	nan_Latn_tailo	Minnan (Tâi-lô)	ltr	26904760
497	nan_Qabs_pehoeji	Minnan (Simplified Hàn-lô script, Pe̍h-ōe-jī)	ltr	0
498	nan_Qabs_tailo	Minnan (Simplified Hàn-lô script, Tâi-lô)	ltr	0
499	nap	Neapolitan	ltr	591359
500	naq	Nama	ltr	308402
502	nd	Ndebele (Northern)	ltr	2058048
503	ndc	Ndau	ltr	4347923
504	nds	German (Low)	ltr	12049256
505	ne	Nepali	ltr	21735356
506	new	Newari	ltr	1027039
507	ng	Ndonga	ltr	588768
508	ngl	Lomwe	ltr	2267868
509	nia	Nias	ltr	0
510	nij	Ngaju	ltr	1041779
511	niu	Niuean	ltr	1120
512	nl	Dutch	ltr	32854898
513	nl@formal	Dutch (formal)	ltr	32854898
514	nl@informal	Dutch (informal)	ltr	32854898
515	nl_BE	Dutch (Belgium)	ltr	6587680
516	nn	Norwegian Nynorsk	ltr	1377432
517	nnh	Ngiemboon	ltr	433525
518	nod	Thai (Northern)	ltr	6712416
519	noe	Nimadi	ltr	1831869
520	nog	Nogai	ltr	0
521	non	Norse (Old)	ltr	0
522	nqo	N’Ko	rtl	699310
523	nr	Ndebele (Southern)	ltr	967081
524	nso	Pedi	ltr	5681604
525	nuk	Nuu-chah-nulth	ltr	0
526	nv	Navaho	ltr	170981
527	nwc	Newari (Classical)	ltr	0
528	ny	Nyanja	ltr	18855691
529	nym	Nyamwezi	ltr	2226249
530	nyn	Nyankole	ltr	3104829
531	nyo	Nyoro	ltr	0
532	nzi	Nzima	ltr	345891
533	oc	Occitan	ltr	2055966
534	oc_ES	Aranese	ltr	4728
535	oj	Ojibwe	ltr	27932
536	om	Oromo	ltr	38264430
537	or	Odia	ltr	45092160
538	os	Ossetian	ltr	558448
539	osa	Osage	ltr	0
540	ota	Turkish (Ottoman)	ltr	0
541	otk	Kokturk	ltr	0
542	otq	Otomi (Querétaro)	ltr	0
543	ovd	Elfdalian	ltr	0
544	pa	Punjabi	ltr	42948379
545	pa_PK	Punjabi (Pakistan)	rtl	0
546	pag	Pangasinan	ltr	1655877
547	pal	Pahlavi	rtl	0
548	pam	Pampanga	ltr	2720371
549	pap	Papiamento	ltr	216652
550	pau	Palauan	ltr	16179
551	pbb	Páez	ltr	0
552	pcm	Pidgin (Nigeria)	ltr	49716870
553	pdt	Plautdietsch	ltr	42674
554	peo	Persian (Old)	ltr	0
555	phn	Phoenician	rtl	0
556	pi	Pali	ltr	136
557	pl	Polish	ltr	41500500
558	pl@formal	Polish (formal)	ltr	41500500
559	pl@informal	Polish (informal)	ltr	41500500
560	pms	Piemontese	ltr	670613
561	pon	Pohnpeian	ltr	22908
562	prg	Prussian	ltr	38
563	pro	Provençal (Old)	ltr	0
564	prs	Dari	ltr	0
565	ps	Pashto	rtl	58062880
566	pt	Portuguese	ltr	249463918
567	pt@formal	Portuguese (formal)	ltr	249463918
568	pt@informal	Portuguese (informal)	ltr	249463918
569	pt_AO	Portuguese (Angola)	ltr	24925407
570	pt_BR	Portuguese (Brazil)	ltr	200247320
571	pt_BR@formal	Portuguese (Brazil, formal)	ltr	200247320
572	pt_BR@informal	Portuguese (Brazil, informal)	ltr	200247320
573	pt_PT	Portuguese (Portugal)	ltr	9798912
574	pwn	Paiwan	ltr	0
575	qdt	Eskimo (Pacific Coast Alaskan)	ltr	0
576	qpv	Viossa	ltr	0
577	qtp	Gayón	ltr	0
578	qu	Quechua	ltr	11942570
579	qu_EC	Quechua (Ecuador)	ltr	3112700
580	quc	K'iche'	ltr	1569947
581	qug	Quichua (Chimborazo Highland)	ltr	1043670
582	qya	Quenya	ltr	0
583	raj	Rajasthani	ltr	1409130
584	rap	Rapanui	ltr	0
585	rar	Rarotongan	ltr	0
586	rcf	Réunion Creole	ltr	559184
587	rej	Rejang	ltr	1295185
588	rhg	Rohingya	rtl	1872054
589	rif	Tarifit	ltr	2045261
590	rkt	Rangpuri	ltr	17024564
591	rm	Romansh	ltr	44302
592	rmt	Domari	ltr	1679351
593	rn	Rundi	ltr	8561763
594	rng	Ronga	ltr	1133934
595	ro	Romanian	ltr	20043506
596	ro_MD	Moldavian	ltr	2267703
597	rof	Rombo	ltr	499219
598	rom	Romany	ltr	0
599	ru	Russian	ltr	201151468
600	ru@formal	Russian (formal)	ltr	201151468
601	ru@informal	Russian (informal)	ltr	201151468
602	ru_UA	Russian (Ukraine)	ltr	16404428
603	rue	Rusyn	ltr	427941
604	rup	Macedo-Romanian	ltr	0
605	rw	Kinyarwanda	ltr	11963415
606	rwk	Rwa	ltr	148416
607	sa	Sanskrit	ltr	16909
608	sad	Sandawe	ltr	0
609	sah	Yakut	ltr	450627
610	sai	South American Indian (Other)	ltr	0
611	sam	Samaritan Aramaic	rtl	0
612	saq	Samburu	ltr	267933
613	sas	Sasak	ltr	2731151
614	sat	Santali	ltr	7750215
615	sc	Sardinian	ltr	1036403
616	sck	Sadri	ltr	2536434
617	scn	Sicilian	ltr	499912
618	sco	Scots	ltr	1711477
619	sd	Sindhi	rtl	41518338
620	sdh	Kurdish (Southern)	rtl	3977410
621	se	Sami (Northern)	ltr	52950
622	sef	Senoufo (Cebaara)	ltr	1289217
623	seh	Sena	ltr	1534146
624	sel	Selkup	ltr	0
625	ses	Koyraboro Senni	ltr	747680
626	sg	Sango	ltr	2768970
627	sga	Irish (Old)	ltr	0
628	sgn	Sign Languages	ltr	0
629	sgs	Samogitian	ltr	0
630	shi	Tachelhit	ltr	3252721
631	shn	Shan	ltr	3748858
632	si	Sinhala	ltr	14948168
633	sid	Sidamo	ltr	4149250
634	sjd	Sami (Kildin)	ltr	0
635	sk	Slovak	ltr	6809719
636	skr	Saraiki	rtl	30283680
637	sl	Slovenian	ltr	1967012
638	sm	Samoan	ltr	252638
639	sma	Sami (Southern)	ltr	296
640	smi	Sami	ltr	0
641	smj	Sami (Lule)	ltr	1482
642	sml	Sama (Central)	ltr	0
643	smn	Sami (Inari)	ltr	618
644	sms	Sami (Skolt)	ltr	618
645	sn	Shona	ltr	13891824
646	snk	Soninke	ltr	1297445
647	so	Somali	ltr	18630626
648	sog	Sogdian	ltr	0
649	son	Songhai	ltr	0
650	sou	Thai (Southern)	ltr	5593680
651	sq	Albanian	ltr	6798943
652	sr	Serbian	ltr	7189403
653	sr@ijekavian	Serbian (Ijekavian)	ltr	7189403
654	sr@ijekavian_Latn	Serbian (Ijekavian, latin)	ltr	7189403
655	sr_Cyrl	Serbian (Cyrillic script)	ltr	7189403
656	sr_Latn	Serbian (Latin script)	ltr	7709589
657	srn	Sranan Tongo	ltr	439795
658	srr	Serer	ltr	2073225
659	ss	Swati	ltr	2345503
660	ssy	Saho	ltr	228382
661	st	Sotho (Southern)	ltr	6957964
662	su	Sundanese	ltr	33787440
663	suk	Sukuma	ltr	5869202
664	sus	Susu	ltr	1538482
665	sux	Sumerian	ltr	0
666	sv	Swedish	ltr	13338376
667	sw	Swahili	ltr	194102079
668	sw_CD	Swahili (Congo)	ltr	57701500
669	sw_TZ	Swahili (Tanzania)	ltr	60715890
670	swb	Maore Comorian	ltr	170720
671	swg	Swabian	ltr	841191
672	swv	Shekhawati	ltr	3945564
673	sxu	Saxon (Upper)	ltr	0
674	syc	Syriac (Classical)	rtl	0
675	syl	Sylheti	ltr	8434850
676	syr	Syriac	rtl	230463
677	szl	Silesian	ltr	503701
678	szy	Sakizaya	ltr	0
679	ta	Tamil	ltr	90608136
680	ta_LK	Tamil (Sri Lanka)	ltr	3297390
681	tay	Atayal	ltr	0
682	tcy	Tulu	ltr	2113695
683	te	Telugu	ltr	101457360
684	tem	Timne	ltr	2371473
685	teo	Teso	ltr	2353060
686	ter	Tereno	ltr	0
687	tet	Tetum	ltr	889076
688	tg	Tajik	ltr	10394100
689	th	Thai	ltr	55936800
690	ti	Tigrinya	ltr	10929718
691	tig	Tigre	ltr	1141912
692	tiv	Tiv	ltr	3787952
693	tk	Turkmen	ltr	7177805
694	tkl	Tokelau	ltr	1136
695	tl	Tagalog	ltr	0
696	tlh	Klingon	ltr	0
697	tlh_Piqd	Klingon (pIqaD)	ltr	0
698	tli	Tlingit	ltr	0
699	tly	Talysh	ltr	1043719
700	tmh	Tamashek	ltr	2042370
701	tn	Tswana	ltr	6529139
702	to	Tongan	ltr	99644
703	tog	Tonga (Nyasa)	ltr	213280
704	toi	Tonga (Zambia)	ltr	2287901
705	tok	Toki Pona	ltr	0
706	tpi	Tok Pisin	ltr	7132802
707	tr	Turkish	ltr	82419542
708	trv	Taroko	ltr	4719
709	ts	Tsonga	ltr	5313550
710	tsg	Tausug	ltr	1301047
711	tsi	Tsimshian	ltr	0
712	tsj	Tshangla	ltr	132681
713	tt	Tatar	ltr	1971493
714	tt@iqtelif	Tatar (IQTElif)	ltr	1971493
715	tts	Thai (Northeastern)	ltr	16781040
716	tum	Tumbuka	ltr	2368893
717	tvl	Tuvalu	ltr	9973
718	tw	Twi	ltr	0
719	ty	Tahitian	ltr	94097
720	tyv	Tuvinian	ltr	183067
721	tzj	Tz'utujil	ltr	111356
722	tzl	Talossan	ltr	0
723	tzm	Tamazight (Central Atlas)	ltr	3663984
724	udm	Udmurt	ltr	535119
725	ug	Uyghur	rtl	7791229
726	uga	Ugaritic	ltr	0
727	uk	Ukrainian	ltr	24080585
728	umb	Umbundu	ltr	10788609
729	und	Undetermined	ltr	302
730	unr	Mundari	ltr	1324582
731	ur	Urdu	rtl	313093257
732	ur_IN	Urdu (India)	rtl	70456500
733	ur_PK	Urdu (Pakistan)	rtl	239745800
734	uz	Uzbek	ltr	31561502
735	uz_Latn	Uzbek (Latin script)	ltr	31561502
736	vai	Vai	ltr	206615
737	ve	Venda	ltr	1499942
738	vec	Venetian	ltr	1381573
739	vi	Vietnamese	ltr	92370781
740	vls	Flemish (West)	ltr	1197760
741	vmf	Mainfränkisch	ltr	5047146
742	vmw	Makhuwa	ltr	4335630
743	vo	Volapük	ltr	0
744	vot	Votic	ltr	0
745	vro	Võro	ltr	68046
746	vun	Vunjo	ltr	499219
747	wa	Walloon	ltr	694700
748	wae	German (Walser)	ltr	11035
749	wal	Wolaytta	ltr	2133900
750	war	Waray (Philippines)	ltr	3434688
751	was	Washo	ltr	0
752	wbq	Waddar	ltr	2536434
753	wbr	Wagdi	ltr	2113695
754	wen	Sorbian	ltr	0
755	wep	Westphalien	ltr	0
756	wo	Wolof	ltr	13203204
757	wtm	Mewati	ltr	6481998
758	wuu_Hans	Wu (Simplified Han script)	ltr	84962400
759	wuu_Hant	Wu (Traditional Han script)	ltr	84962400
760	xal	Kalmyk	ltr	0
761	xh	Xhosa	ltr	10901720
762	xnr	Kangri	ltr	2254608
763	xog	Soga	ltr	2611999
764	yao	Yao	ltr	800424
765	yap	Yapese	ltr	6573
766	yi	Yiddish	rtl	916209
767	yo	Yoruba	ltr	31761815
768	yua	Yucateco	ltr	875958
769	yue_Hans	Cantonese (Simplified Han script)	ltr	73634080
770	yue_Hant	Cantonese (Traditional Han script)	ltr	81532220
771	za	Zhuang	ltr	4389724
772	zap	Zapotec	ltr	0
773	zbl	Blissymbols	ltr	0
774	zen	Zenaga	ltr	0
775	zgh	Tamazight (Standard Moroccan)	ltr	8225272
776	zh_Hans	Chinese (Simplified Han script)	ltr	1286444445
777	zh_Hans_SG	Chinese (Simplified Han script, Singapore)	ltr	4641914
778	zh_Hant	Chinese (Traditional Han script)	ltr	39078482
779	zh_Hant_HK	Chinese (Traditional Han script, Hong Kong)	ltr	6932929
780	zh_Latn	Chinese (Hanyu Pinyin)	ltr	0
781	zu	Zulu	ltr	14969090
782	zun	Zuni	ltr	0
783	zza	Zaza	ltr	1177672
\.


--
-- Data for Name: lang_plural; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.lang_plural (id, source, number, formula, type, language_id) FROM stdin;
1	0	2	n != 1	1	1
2	0	2	n != 1	1	2
3	0	2	n != 1	1	3
4	0	1	0	0	4
5	0	2	n > 1	1	5
6	0	2	n != 1	1	6
7	0	2	n > 1	1	7
8	0	2	n != 1	1	8
9	0	6	n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5	12	9
10	0	2	n != 1	1	10
11	0	2	n != 1	1	11
12	0	2	n != 1	1	12
13	0	2	n != 1	1	13
14	0	2	n > 1	1	14
15	0	2	n != 1	1	15
16	0	2	n != 1	1	16
17	0	2	n != 1	1	17
18	0	2	n != 1	1	18
19	0	2	n > 1	1	19
20	0	2	n != 1	1	20
21	0	2	n != 1	1	21
22	0	2	n != 1	1	22
23	0	2	n != 1	1	23
24	0	6	n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5	12	24
25	0	6	n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5	12	25
26	0	6	n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5	12	26
27	0	6	n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5	12	27
28	0	6	n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5	12	28
29	0	6	n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5	12	29
30	0	6	n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5	12	30
31	0	6	n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5	12	31
32	0	6	n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5	12	32
33	0	6	n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5	12	33
34	0	6	n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5	12	34
35	0	6	n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5	12	35
36	0	2	n != 1	1	36
37	0	2	n > 1	1	37
38	0	2	n != 1	1	38
39	0	6	(n == 0) ? 0 : ((n == 1) ? 1 : ((n == 2) ? 2 : ((n % 100 >= 3 && n % 100 <= 10) ? 3 : ((n % 100 >= 11 && n % 100 <= 99) ? 4 : 5))))	12	39
40	0	6	(n == 0) ? 0 : ((n == 1) ? 1 : ((n == 2) ? 2 : ((n % 100 >= 3 && n % 100 <= 10) ? 3 : ((n % 100 >= 11 && n % 100 <= 99) ? 4 : 5))))	12	40
41	0	2	n != 1	1	41
42	0	6	(n == 0) ? 0 : ((n == 1) ? 1 : ((n == 2) ? 2 : ((n % 100 >= 3 && n % 100 <= 10) ? 3 : ((n % 100 >= 11 && n % 100 <= 99) ? 4 : 5))))	12	42
43	0	2	n > 1	1	43
44	0	2	n != 1	1	44
45	0	2	n != 1	1	45
46	0	2	n != 1	1	46
47	0	2	n != 1	1	47
48	0	2	n != 1	1	48
49	0	1	0	0	49
50	0	2	n != 1	1	50
51	0	2	n != 1	1	51
52	0	2	n != 1	1	52
53	0	2	n != 1	1	53
54	0	2	n != 1	1	54
55	0	2	n != 1	1	55
56	0	2	n != 1	1	56
57	0	2	n != 1	1	57
58	0	2	n != 1	1	58
59	0	2	n != 1	1	59
60	0	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	60
61	0	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	61
62	0	2	n != 1	1	62
63	0	2	n != 1	1	63
64	0	2	n != 1	1	64
65	0	2	n != 1	1	65
66	0	2	n != 1	1	66
67	0	2	n != 1	1	67
68	0	2	n != 1	1	68
69	0	2	n != 1	1	69
70	0	2	n > 1	1	70
71	0	2	n != 1	1	71
72	0	2	n != 1	1	72
73	0	2	n > 1	1	73
74	0	2	n != 1	1	74
75	0	2	n != 1	1	75
76	0	2	n != 1	1	76
77	0	2	n != 1	1	77
78	0	2	n != 1	1	78
79	0	2	n != 1	1	79
80	0	3	(n == 0) ? 0 : ((n == 1) ? 1 : 2)	11	80
81	0	1	0	0	81
82	0	2	n > 1	1	82
83	0	2	n > 1	1	83
84	0	2	n > 1	1	84
85	0	2	n != 1	1	85
86	0	1	0	0	86
87	0	1	0	0	87
88	0	2	n != 1	1	88
89	0	5	(n % 10 == 1 && n % 100 != 11 && n % 100 != 71 && n % 100 != 91) ? 0 : ((n % 10 == 2 && n % 100 != 12 && n % 100 != 72 && n % 100 != 92) ? 1 : ((((n % 10 == 3 || n % 10 == 4) || n % 10 == 9) && (n % 100 < 10 || n % 100 > 19) && (n % 100 < 70 || n % 100 > 79) && (n % 100 < 90 || n % 100 > 99)) ? 2 : ((n != 0 && n % 1000000 == 0) ? 3 : 4)))	10	89
90	0	2	n != 1	1	90
91	0	2	n != 1	1	91
92	0	2	n != 1	1	92
93	0	2	n != 1	1	93
94	0	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	94
95	0	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	95
96	0	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	96
97	0	2	n != 1	1	97
98	0	2	n != 1	1	98
99	0	2	n != 1	1	99
100	0	2	n != 1	1	100
101	0	2	n != 1	1	101
102	0	2	n != 1	1	102
103	0	2	n != 1	1	103
104	0	2	n != 1	1	104
105	0	2	n != 1	1	105
106	0	2	n != 1	1	106
107	0	1	0	0	107
108	0	1	0	0	108
109	0	1	0	0	109
110	0	2	n != 1	1	110
111	0	2	n != 1 && n != 2 && n != 3 && (n % 10 == 4 || n % 10 == 6 || n % 10 == 9)	1	111
112	0	2	n != 1	1	112
113	0	2	n != 1	1	113
114	0	2	n != 1	1	114
115	0	2	n != 1	1	115
116	0	2	n != 1	1	116
117	0	2	n != 1	1	117
118	0	2	n != 1	1	118
119	0	2	n != 1	1	119
120	0	2	n != 1	1	120
121	0	2	n != 1	1	121
122	0	2	n != 1	1	122
123	0	2	n != 1	1	123
124	0	2	n != 1	1	124
125	0	2	n != 1	1	125
126	0	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	126
127	0	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	127
128	0	2	n != 1	1	128
129	0	2	n != 1	1	129
130	0	2	n != 1	1	130
131	0	2	n != 1	1	131
132	0	3	(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2	22	132
133	0	1	0	0	133
134	0	1	0	0	134
135	0	1	0	0	135
136	0	2	n != 1	1	136
137	0	1	0	0	137
138	0	2	n != 1	1	138
139	0	3	(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2	22	139
140	0	3	n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	140
141	0	2	n > 1	1	141
142	0	2	n != 1	1	142
143	0	3	(n == 0) ? 0 : ((n == 1) ? 1 : 2)	11	143
144	0	6	(n==0) ? 0 : (n==1) ? 1 : (n==2) ? 2 : (n==3) ? 3 :(n==6) ? 4 : 5	12	144
145	0	2	n != 1	1	145
146	0	2	n != 1	1	146
147	0	2	n != 1	1	147
148	0	2	n != 1	1	148
149	0	2	n != 1	1	149
150	0	2	n != 1	1	150
151	0	2	n != 1	1	151
152	0	2	n != 1	1	152
153	0	2	n != 1	1	153
154	0	2	n != 1	1	154
155	0	2	n != 1	1	155
156	0	2	n != 1	1	156
157	0	2	n != 1	1	157
158	0	2	n != 1	1	158
159	0	2	n != 1	1	159
160	0	2	n != 1	1	160
161	0	2	n != 1	1	161
162	0	2	n != 1	1	162
163	0	2	n > 1	1	163
164	0	2	n != 1	1	164
165	0	2	n != 1	1	165
166	0	4	(n % 100 == 1) ? 0 : ((n % 100 == 2) ? 1 : ((n % 100 == 3 || n % 100 == 4) ? 2 : 3))	6	166
167	0	2	n != 1	1	167
168	0	2	n != 1	1	168
169	0	2	n != 1	1	169
170	0	2	n != 1	1	170
171	0	1	0	0	171
172	0	2	n != 1	1	172
173	0	2	n != 1	1	173
174	0	2	n != 1	1	174
175	0	2	n != 1	1	175
176	0	2	n != 1	1	176
177	0	2	n != 1	1	177
178	0	2	n != 1	1	178
179	0	2	n != 1	1	179
180	0	2	n != 1	1	180
181	0	2	n != 1	1	181
182	0	2	n != 1	1	182
183	0	2	n != 1	1	183
184	0	2	n != 1	1	184
185	0	2	n != 1	1	185
186	0	2	n != 1	1	186
187	0	2	n != 1	1	187
188	0	2	n != 1	1	188
189	0	2	n != 1	1	189
190	0	2	n != 1	1	190
191	0	2	n != 1	1	191
192	0	2	n != 1	1	192
193	0	2	n != 1	1	193
194	0	2	n != 1	1	194
195	0	2	n != 1	1	195
196	0	2	n != 1	1	196
197	0	2	n != 1	1	197
198	0	2	n != 1	1	198
199	0	2	n != 1	1	199
200	0	2	n != 1	1	200
201	0	2	n != 1	1	201
202	0	2	n != 1	1	202
203	0	2	n != 1	1	203
204	0	2	n != 1	1	204
205	0	2	n != 1	1	205
206	0	2	n != 1	1	206
207	0	2	n != 1	1	207
208	0	2	n != 1	1	208
209	0	2	n != 1	1	209
210	0	2	n != 1	1	210
211	0	2	n != 1	1	211
212	0	2	n != 1	1	212
213	0	2	n != 1	1	213
214	0	2	n != 1	1	214
215	0	2	n != 1	1	215
216	0	2	n != 1	1	216
217	0	2	n != 1	1	217
218	0	2	n != 1	1	218
219	0	2	n != 1	1	219
220	0	2	n != 1	1	220
221	0	2	n != 1	1	221
222	0	2	n > 1	1	222
223	0	2	n != 1	1	223
224	0	2	n != 1	1	224
225	0	2	n != 1	1	225
226	0	2	n > 1	1	226
227	0	2	n != 1	1	227
228	0	2	n != 1	1	228
229	0	2	n != 1 && n != 2 && n != 3 && (n % 10 == 4 || n % 10 == 6 || n % 10 == 9)	1	229
230	0	2	n != 1	1	230
231	0	2	n != 1	1	231
232	0	2	n != 1	1	232
233	0	2	n > 1	1	233
234	0	2	n > 1	1	234
235	0	2	n > 1	1	235
236	0	2	n > 1	1	236
237	0	2	n > 1	1	237
238	0	2	n > 1	1	238
239	0	2	n > 1	1	239
240	0	2	n > 1	1	240
241	0	2	n > 1	1	241
242	0	2	n > 1	1	242
243	0	2	n != 1	1	243
244	0	2	n != 1	1	244
245	0	2	n != 1	1	245
246	0	2	n > 1	1	246
247	0	2	n != 1	1	247
248	0	2	n != 1	1	248
249	0	2	n != 1	1	249
250	0	2	n != 1	1	250
251	0	2	n != 1	1	251
252	0	2	n != 1	1	252
253	0	2	n != 1	1	253
254	0	5	n==1 ? 0 : n==2 ? 1 : (n>2 && n<7) ? 2 :(n>6 && n<11) ? 3 : 4	10	254
255	0	2	n != 1	1	255
256	0	1	0	0	256
257	0	1	0	0	257
258	0	2	n != 1	1	258
259	0	2	n != 1	1	259
260	0	2	n != 1	1	260
261	0	4	(n==1 || n==11) ? 0 : (n==2 || n==12) ? 1 : (n > 2 && n < 20) ? 2 : 3	6	261
262	0	2	n != 1	1	262
263	0	2	n != 1	1	263
264	0	2	n != 1	1	264
265	0	2	n != 1	1	265
266	0	2	n != 1	1	266
267	0	2	n != 1	1	267
268	0	2	n != 1	1	268
269	0	2	n != 1	1	269
270	0	2	n != 1	1	270
271	0	2	n != 1	1	271
272	0	2	n != 1	1	272
273	0	2	n != 1	1	273
274	0	3	n==1 ? 0 : n==2 ? 1 : 2	4	274
275	0	2	n != 1	1	275
276	0	2	n > 1	1	276
277	0	2	n > 1	1	277
278	0	2	n != 1	1	278
279	0	2	n > 1	1	279
280	0	2	n != 1	1	280
281	0	2	n > 1	1	281
282	0	2	n != 1	1	282
283	0	2	n > 1	1	283
284	0	2	n != 1	1	284
285	0	4	(n % 10 == 1) ? 0 : ((n % 10 == 2) ? 1 : ((n % 100 == 0 || n % 100 == 20 || n % 100 == 40 || n % 100 == 60 || n % 100 == 80) ? 2 : 3))	6	285
286	0	2	n != 1	1	286
287	0	2	n != 1	1	287
288	0	2	n != 1	1	288
289	0	1	0	0	289
290	0	1	0	0	290
291	0	1	0	0	291
292	0	2	n != 1	1	292
293	0	2	n != 1	1	293
294	0	4	(n == 1) ? 0 : ((n == 2) ? 1 : ((n > 10 && n % 10 == 0) ? 2 : 3))	6	294
295	0	4	(n == 1) ? 0 : ((n == 2) ? 1 : ((n > 10 && n % 10 == 0) ? 2 : 3))	6	295
296	0	2	n > 1	1	296
297	0	2	n > 1	1	297
298	0	2	n > 1	1	298
299	0	2	n != 1	1	299
300	0	2	n != 1	1	300
301	0	2	n != 1	1	301
302	0	2	n != 1	1	302
303	0	2	n != 1	1	303
304	0	1	0	0	304
305	0	2	n != 1	1	305
306	0	2	n != 1	1	306
307	0	2	n != 1	1	307
308	0	2	n != 1	1	308
309	0	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	309
310	0	2	n != 1	1	310
311	0	4	(n % 100 == 1) ? 0 : ((n % 100 == 2) ? 1 : ((n % 100 == 3 || n % 100 == 4) ? 2 : 3))	6	311
312	0	1	0	0	312
313	0	2	n != 1	1	313
314	0	2	n != 1	1	314
315	0	2	n != 1	1	315
316	0	2	n != 1	1	316
317	0	2	n > 1	1	317
318	0	2	n != 1	1	318
319	0	2	n != 1	1	319
320	0	2	n != 1	1	320
321	0	2	n != 1	1	321
322	0	1	0	0	322
323	0	2	n != 1	1	323
324	0	1	0	0	324
325	0	1	0	0	325
326	0	2	n != 1	1	326
327	0	2	n != 1	1	327
328	0	2	n != 1	1	328
329	0	2	n != 1	1	329
330	0	2	n % 10 != 1 || n % 100 == 11	1	330
331	0	2	n != 1	1	331
332	0	2	n != 1	1	332
333	0	2	n != 1	1	333
334	0	2	n != 1	1	334
335	0	2	n != 1	1	335
336	0	3	(n == 1) ? 0 : ((n == 2) ? 1 : 2)	4	336
337	0	3	(n == 1) ? 0 : ((n == 2) ? 1 : 2)	4	337
338	0	1	0	0	338
339	0	1	0	0	339
340	0	2	n != 1	1	340
341	0	1	0	0	341
342	0	2	n != 1	1	342
343	0	2	n != 1	1	343
344	0	2	n != 1	1	344
345	0	2	n != 1	1	345
346	0	1	0	0	346
347	0	2	n != 1	1	347
348	0	2	n != 1	1	348
349	0	2	n > 1	1	349
350	0	2	n != 1	1	350
351	0	2	n != 1	1	351
352	0	2	n != 1	1	352
353	0	2	n != 1	1	353
354	0	2	n != 1	1	354
355	0	2	n != 1	1	355
356	0	1	0	0	356
357	0	1	0	0	357
358	0	2	n != 1	1	358
359	0	2	n != 1	1	359
360	0	2	n != 1	1	360
361	0	2	n != 1	1	361
362	0	2	n != 1	1	362
363	0	2	n != 1	1	363
364	0	2	n != 1	1	364
365	0	2	n != 1	1	365
366	0	2	n != 1	1	366
367	0	2	n != 1	1	367
368	0	2	n != 1	1	368
369	0	2	n != 1	1	369
370	0	2	n != 1	1	370
371	0	2	n != 1	1	371
372	0	1	0	0	372
373	0	2	n != 1	1	373
374	0	2	n != 1	1	374
375	0	2	n != 1	1	375
376	0	2	n > 1	1	376
377	0	1	0	0	377
378	0	2	n > 1	1	378
379	0	2	n > 1	1	379
380	0	1	0	0	380
381	0	2	n != 1	1	381
382	0	2	n != 1	1	382
383	0	2	n != 1	1	383
384	0	2	n != 1	1	384
385	0	2	n != 1	1	385
386	0	2	n != 1	1	386
387	0	2	n != 1	1	387
388	0	2	n != 1	1	388
389	0	3	n==0 ? 0 : n==1 ? 1 : 2	11	389
390	0	2	n != 1	1	390
391	0	2	n != 1	1	391
392	0	2	n != 1	1	392
393	0	2	n != 1	1	393
394	0	6	(n == 0) ? 0 : ((n == 1) ? 1 : (((n % 100 == 2 || n % 100 == 22 || n % 100 == 42 || n % 100 == 62 || n % 100 == 82) || n % 1000 == 0 && (n % 100000 >= 1000 && n % 100000 <= 20000 || n % 100000 == 40000 || n % 100000 == 60000 || n % 100000 == 80000) || n != 0 && n % 1000000 == 100000) ? 2 : ((n % 100 == 3 || n % 100 == 23 || n % 100 == 43 || n % 100 == 63 || n % 100 == 83) ? 3 : ((n != 1 && (n % 100 == 1 || n % 100 == 21 || n % 100 == 41 || n % 100 == 61 || n % 100 == 81)) ? 4 : 5))))	12	394
395	0	2	n != 1	1	395
396	0	2	n != 1	1	396
397	0	2	n != 1	1	397
398	0	2	n != 1	1	398
399	0	3	(n == 0) ? 0 : ((n == 1) ? 1 : 2)	11	399
400	0	2	n != 1	1	400
401	0	2	n != 1	1	401
402	0	2	n != 1	1	402
403	0	2	n != 1	1	403
404	0	2	n != 1	1	404
405	0	2	n != 1	1	405
406	0	2	n != 1	1	406
407	0	2	n != 1	1	407
408	0	2	n != 1	1	408
409	0	2	n != 1	1	409
410	0	2	n != 1	1	410
411	0	1	0	0	411
412	0	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	412
413	0	2	n != 1	1	413
414	0	2	n != 1	1	414
415	0	2	n > 1	1	415
416	0	1	0	0	416
417	0	2	n != 1	1	417
418	0	2	n != 1	1	418
419	0	2	n != 1	1	419
420	0	3	(n % 10 == 1 && (n % 100 < 11 || n % 100 > 19)) ? 0 : ((n % 10 >= 2 && n % 10 <= 9 && (n % 100 < 11 || n % 100 > 19)) ? 1 : 2)	22	420
421	0	3	n%10==1 && n%100!=11 ? 0 : n != 0 ? 1 : 2	7	421
422	0	2	n != 1	1	422
423	0	2	n != 1	1	423
424	0	2	n != 1	1	424
425	0	2	n != 1	1	425
426	0	2	n != 1	1	426
427	0	2	n != 1	1	427
428	0	2	n != 1	1	428
429	0	2	n != 1	1	429
430	0	3	(n % 10 == 0 || n % 100 >= 11 && n % 100 <= 19) ? 0 : ((n % 10 == 1 && n % 100 != 11) ? 1 : 2)	11	430
431	0	3	(n % 10 == 0 || n % 100 >= 11 && n % 100 <= 19) ? 0 : ((n % 10 == 1 && n % 100 != 11) ? 1 : 2)	11	431
432	0	3	(n % 10 == 0 || n % 100 >= 11 && n % 100 <= 19) ? 0 : ((n % 10 == 1 && n % 100 != 11) ? 1 : 2)	11	432
433	0	1	0	0	433
434	0	2	n != 1	1	434
435	0	2	n != 1	1	435
436	0	2	n != 1	1	436
437	0	2	n != 1	1	437
438	0	2	n != 1	1	438
439	0	2	n != 1	1	439
440	0	2	n != 1	1	440
441	0	2	n != 1	1	441
442	0	2	n != 1	1	442
443	0	2	n != 1	1	443
444	0	2	n != 1	1	444
445	0	2	n != 1	1	445
446	0	2	n != 1	1	446
447	0	2	n > 1	1	447
448	0	2	n > 1	1	448
449	0	2	n != 1	1	449
450	0	2	n != 1	1	450
451	0	2	n != 1	1	451
452	0	2	n != 1	1	452
453	0	2	n != 1	1	453
454	0	2	n > 1	1	454
455	0	2	n > 1	1	455
456	0	2	n != 1	1	456
457	0	2	n != 1	1	457
458	0	1	0	0	458
459	0	2	n != 1	1	459
460	0	2	n==1 || n%10==1 ? 0 : 1	1	460
461	0	2	n != 1	1	461
462	0	2	n != 1	1	462
463	0	2	n != 1	1	463
464	0	2	n != 1	1	464
465	0	2	n != 1	1	465
466	0	2	n != 1	1	466
467	0	3	n==0 ? 0 : n==1 ? 1 : 2	11	467
468	0	2	n != 1	1	468
469	0	2	n != 1	1	469
470	0	2	n != 1	1	470
471	0	2	n != 1	1	471
472	0	2	n != 1	1	472
473	0	2	n != 1	1	473
474	0	1	0	0	474
475	0	1	0	0	475
476	0	4	n==1 ? 0 : n==0 || ( n%100>1 && n%100<11) ? 1 : (n%100>10 && n%100<20 ) ? 2 : 3	8	476
477	0	2	n != 1	1	477
478	0	2	n != 1	1	478
479	0	2	n != 1	1	479
480	0	2	n != 1	1	480
481	0	2	n != 1	1	481
482	0	2	n != 1	1	482
483	0	2	n != 1	1	483
484	0	1	0	0	484
485	0	1	0	0	485
486	0	2	n != 1	1	486
487	0	2	n != 1	1	487
488	0	2	n != 1	1	488
489	0	2	n != 1	1	489
490	0	2	n != 1	1	490
491	0	1	0	0	491
492	0	1	0	0	492
493	0	1	0	0	493
494	0	1	0	0	494
495	0	1	0	0	495
496	0	1	0	0	496
497	0	1	0	0	497
498	0	1	0	0	498
499	0	2	n != 1	1	499
500	0	3	(n == 1) ? 0 : ((n == 2) ? 1 : 2)	4	500
501	0	2	n != 1	1	501
502	0	2	n != 1	1	502
503	0	2	n != 1	1	503
504	0	2	n != 1	1	504
505	0	2	n != 1	1	505
506	0	2	n != 1	1	506
507	0	2	n != 1	1	507
508	0	2	n != 1	1	508
509	0	2	n != 1	1	509
510	0	2	n != 1	1	510
511	0	2	n != 1	1	511
512	0	2	n != 1	1	512
513	0	2	n != 1	1	513
514	0	2	n != 1	1	514
515	0	2	n != 1	1	515
516	0	2	n != 1	1	516
517	0	2	n != 1	1	517
518	0	2	n != 1	1	518
519	0	2	n != 1	1	519
520	0	2	n != 1	1	520
521	0	2	n != 1	1	521
522	0	1	0	0	522
523	0	2	n != 1	1	523
524	0	2	n > 1	1	524
525	0	2	n != 1	1	525
526	0	2	n != 1	1	526
527	0	2	n != 1	1	527
528	0	2	n != 1	1	528
529	0	2	n != 1	1	529
530	0	2	n != 1	1	530
531	0	2	n != 1	1	531
532	0	2	n != 1	1	532
533	0	2	n > 1	1	533
534	0	2	n != 1	1	534
535	0	2	n != 1	1	535
536	0	2	n != 1	1	536
537	0	2	n != 1	1	537
538	0	2	n != 1	1	538
539	0	1	0	0	539
540	0	2	n != 1	1	540
541	0	2	n != 1	1	541
542	0	2	n != 1	1	542
543	0	2	n != 1	1	543
544	0	2	n > 1	1	544
545	0	2	n > 1	1	545
546	0	2	n != 1	1	546
547	0	2	n != 1	1	547
548	0	2	n != 1	1	548
549	0	2	n != 1	1	549
550	0	2	n != 1	1	550
551	0	2	n != 1	1	551
552	0	2	n > 1	1	552
553	0	2	n != 1	1	553
554	0	2	n != 1	1	554
555	0	2	n != 1	1	555
556	0	2	n != 1	1	556
557	0	3	n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	557
558	0	3	n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	558
559	0	3	n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	559
560	0	2	n != 1	1	560
561	0	2	n != 1	1	561
562	0	3	(n % 10 == 0 || n % 100 >= 11 && n % 100 <= 19) ? 0 : ((n % 10 == 1 && n % 100 != 11) ? 1 : 2)	11	562
563	0	2	n != 1	1	563
564	0	2	n != 1	1	564
565	0	2	n != 1	1	565
566	0	2	n > 1	1	566
567	0	2	n > 1	1	567
568	0	2	n > 1	1	568
569	0	2	n > 1	1	569
570	0	2	n > 1	1	570
571	0	2	n > 1	1	571
572	0	2	n > 1	1	572
573	0	2	n > 1	1	573
574	0	2	n != 1	1	574
575	0	2	n > 1	1	575
576	0	1	0	0	576
577	0	2	n > 1	1	577
578	0	2	n != 1	1	578
579	0	2	n != 1	1	579
580	0	2	n != 1	1	580
581	0	2	n != 1	1	581
582	0	2	n != 1	1	582
583	0	2	n != 1	1	583
584	0	2	n != 1	1	584
585	0	2	n != 1	1	585
586	0	2	n != 1	1	586
587	0	2	n != 1	1	587
588	0	2	n != 1	1	588
589	0	2	n != 1	1	589
590	0	2	n != 1	1	590
591	0	2	n != 1	1	591
592	0	2	n != 1	1	592
593	0	2	n != 1	1	593
594	0	2	n != 1	1	594
595	0	3	n==1 ? 0 : (n==0 || (n%100 > 0 && n%100 < 20)) ? 1 : 2	2	595
596	0	3	(n == 1) ? 0 : ((n == 0 || n % 100 >= 2 && n % 100 <= 19) ? 1 : 2)	2	596
597	0	2	n != 1	1	597
598	0	2	n != 1	1	598
599	0	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	599
600	0	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	600
601	0	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	601
602	0	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	602
603	0	2	n != 1	1	603
604	0	2	n != 1	1	604
605	0	2	n != 1	1	605
606	0	2	n != 1	1	606
607	0	3	n==1 ? 0 : n==2 ? 1 : 2	4	607
608	0	2	n != 1	1	608
609	0	1	0	0	609
610	0	2	n != 1	1	610
611	0	2	n != 1	1	611
612	0	2	n != 1	1	612
613	0	2	n != 1	1	613
614	0	3	n == 1 ? 0 : n == 2 ? 1 : 2	4	614
615	0	2	n != 1	1	615
616	0	2	n != 1	1	616
617	0	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	617
618	0	2	n != 1	1	618
619	0	2	n != 1	1	619
620	0	2	n != 1	1	620
621	0	3	(n == 1) ? 0 : ((n == 2) ? 1 : 2)	4	621
622	0	2	n != 1	1	622
623	0	2	n != 1	1	623
624	0	2	n != 1	1	624
625	0	1	0	0	625
626	0	1	0	0	626
627	0	2	n != 1	1	627
628	0	2	n != 1	1	628
629	0	4	(n % 10 == 1 && n % 100 != 11) ? 0 : ((n == 2) ? 1 : ((n != 2 && n % 10 >= 2 && n % 10 <= 9 && (n % 100 < 11 || n % 100 > 19)) ? 2 : 3))	6	629
630	0	3	(n == 0 || n == 1) ? 0 : ((n >= 2 && n <= 10) ? 1 : 2)	2	630
631	0	2	n != 1	1	631
632	0	2	n > 1	1	632
633	0	2	n != 1	1	633
634	0	2	n != 1	1	634
635	0	3	(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2	22	635
636	0	2	n != 1	1	636
637	0	4	n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3	6	637
638	0	2	n != 1	1	638
639	0	3	(n == 1) ? 0 : ((n == 2) ? 1 : 2)	4	639
640	0	3	(n == 1) ? 0 : ((n == 2) ? 1 : 2)	4	640
641	0	3	(n == 1) ? 0 : ((n == 2) ? 1 : 2)	4	641
642	0	2	n != 1	1	642
643	0	3	(n == 1) ? 0 : ((n == 2) ? 1 : 2)	4	643
644	0	3	(n == 1) ? 0 : ((n == 2) ? 1 : 2)	4	644
645	0	2	n != 1	1	645
646	0	2	n != 1	1	646
647	0	2	n != 1	1	647
648	0	2	n != 1	1	648
649	0	1	0	0	649
650	0	2	n != 1	1	650
651	0	2	n != 1	1	651
652	0	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	652
653	0	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	653
654	0	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	654
655	0	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	655
656	0	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	656
657	0	2	n != 1	1	657
658	0	2	n != 1	1	658
659	0	2	n != 1	1	659
660	0	2	n != 1	1	660
661	0	2	n != 1	1	661
662	0	1	0	0	662
663	0	2	n != 1	1	663
664	0	2	n != 1	1	664
665	0	2	n != 1	1	665
666	0	2	n != 1	1	666
667	0	2	n != 1	1	667
668	0	2	n != 1	1	668
669	0	2	n != 1	1	669
670	0	2	n != 1	1	670
671	0	2	n != 1	1	671
672	0	2	n != 1	1	672
673	0	2	n != 1	1	673
674	0	2	n != 1	1	674
675	0	2	n != 1	1	675
676	0	2	n != 1	1	676
677	0	3	n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	677
678	0	2	n != 1	1	678
679	0	2	n != 1	1	679
680	0	2	n != 1	1	680
681	0	2	n != 1	1	681
682	0	2	n != 1	1	682
683	0	2	n != 1	1	683
684	0	2	n != 1	1	684
685	0	2	n != 1	1	685
686	0	2	n != 1	1	686
687	0	2	n != 1	1	687
688	0	2	n > 1	1	688
689	0	1	0	0	689
690	0	2	n > 1	1	690
691	0	2	n != 1	1	691
692	0	2	n != 1	1	692
693	0	2	n != 1	1	693
694	0	2	n != 1	1	694
695	0	2	n != 1 && n != 2 && n != 3 && (n % 10 == 4 || n % 10 == 6 || n % 10 == 9)	1	695
696	0	1	0	0	696
697	0	1	0	0	697
698	0	2	n != 1	1	698
699	0	2	n != 1	1	699
700	0	2	n != 1	1	700
701	0	2	n != 1	1	701
702	0	1	0	0	702
703	0	2	n != 1	1	703
704	0	2	n != 1	1	704
705	0	1	0	0	705
706	0	1	0	0	706
707	0	2	n != 1	1	707
708	0	2	n != 1	1	708
709	0	2	n != 1	1	709
710	0	2	n != 1	1	710
711	0	2	n != 1	1	711
712	0	2	n != 1	1	712
713	0	1	0	0	713
714	0	1	0	0	714
715	0	2	n != 1	1	715
716	0	2	n != 1	1	716
717	0	2	n != 1	1	717
718	0	2	n != 1	1	718
719	0	2	n != 1	1	719
720	0	2	n != 1	1	720
721	0	2	n != 1	1	721
722	0	2	n != 1	1	722
723	0	2	n >= 2 && (n < 11 || n > 99)	1	723
724	0	2	n != 1	1	724
725	0	2	n != 1	1	725
726	0	2	n != 1	1	726
727	0	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	727
728	0	2	n != 1	1	728
729	0	2	n != 1	1	729
730	0	2	n != 1	1	730
731	0	2	n != 1	1	731
732	0	2	n != 1	1	732
733	0	2	n != 1	1	733
734	0	2	n != 1	1	734
735	0	2	n != 1	1	735
736	0	2	n != 1	1	736
737	0	2	n != 1	1	737
738	0	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	738
739	0	1	0	0	739
740	0	2	n != 1	1	740
741	0	2	n != 1	1	741
742	0	2	n != 1	1	742
743	0	2	n != 1	1	743
744	0	2	n != 1	1	744
745	0	2	n != 1	1	745
746	0	2	n != 1	1	746
747	0	2	n > 1	1	747
748	0	2	n != 1	1	748
749	0	2	n != 1	1	749
750	0	2	n != 1	1	750
751	0	2	n != 1	1	751
752	0	2	n != 1	1	752
753	0	2	n != 1	1	753
754	0	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	754
755	0	2	n != 1	1	755
756	0	1	0	0	756
757	0	2	n != 1	1	757
758	0	1	0	0	758
759	0	1	0	0	759
760	0	2	n != 1	1	760
761	0	2	n != 1	1	761
762	0	2	n != 1	1	762
763	0	2	n != 1	1	763
764	0	2	n != 1	1	764
765	0	2	n != 1	1	765
766	0	2	n != 1	1	766
767	0	1	0	0	767
768	0	2	n != 1	1	768
769	0	1	0	0	769
770	0	1	0	0	770
771	0	2	n != 1	1	771
772	0	2	n != 1	1	772
773	0	2	n != 1	1	773
774	0	2	n != 1	1	774
775	0	2	n != 1	1	775
776	0	1	0	0	776
777	0	1	0	0	777
778	0	1	0	0	778
779	0	1	0	0	779
780	0	1	0	0	780
781	0	2	n > 1	1	781
782	0	2	n != 1	1	782
783	0	2	n != 1	1	783
784	1	2	n > 1	1	89
785	1	1	0	0	112
786	1	2	(n==2) ? 1 : 0	9	144
787	1	4	(n==1) ? 0 : (n==2) ? 1 : (n != 8 && n != 11) ? 2 : 3	6	144
788	1	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	166
789	1	2	(n > 1)	1	229
790	1	3	n==1 ? 0 : n==2 ? 1 : 2	4	254
791	1	2	(n != 1)	1	294
792	1	3	n==1 ? 0 : n==2 ? 2 : 1	14	294
793	1	3	n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2	22	311
794	1	2	(n != 1)	1	346
795	1	1	0	0	347
796	1	3	(n == 1) ? 0 : ((n == 2) ? 1 : 2)	4	394
797	1	4	(n==1) ? 0 : (n==2) ? 1 : (n == 3) ? 2 : 3	5	394
798	1	4	n==1 ? 0 : n%10>=2 && (n%100<10 || n%100>=20) ? 1 : n%10==0 || (n%100>10 && n%100<20) ? 2 : 3	8	420
799	1	3	(n%10==1 && n%100!=11 ? 0 : n%10>=2 && (n%100<10 || n%100>=20) ? 1 : 2)	22	420
800	1	3	n%10==1 && n%100!=11 ? 0 : n != 0 ? 1 : 2	7	430
801	1	3	(n%10==1 && n%100!=11 ? 0 : n%10>=2 && (n%100<10 || n%100>=20) ? 1 : 2)	22	430
802	1	2	(n != 1)	1	621
901	6	1	0	0	338
803	1	4	(n%100==1 ? 1 : n%100==2 ? 2 : n%100==3 || n%100==4 ? 3 : 0)	13	637
804	1	3	(n == 1) ? 0 : ((n == 0 || n != 1 && n % 100 >= 1 && n % 100 <= 19) ? 1 : 2)	2	596
805	1	2	n != 1	1	617
806	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	101
807	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	103
808	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	197
809	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	200
810	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	201
811	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	202
812	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	203
813	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	204
814	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	205
815	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	206
816	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	207
817	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	208
818	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	209
819	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	210
820	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	211
821	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	212
822	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	213
823	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	214
824	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	215
825	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	216
826	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	217
827	4	3	(n == 0 || n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	233
828	4	3	(n == 0 || n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	236
829	4	3	(n == 0 || n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	237
830	4	3	(n == 0 || n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	238
831	4	3	(n == 0 || n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	239
832	4	3	(n == 0 || n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	240
833	4	3	(n == 0 || n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	241
834	4	3	(n == 1) ? 0 : ((n == 2) ? 1 : 2)	4	294
835	4	3	(n == 1) ? 0 : ((n == 2) ? 1 : 2)	4	295
836	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	332
837	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	335
838	4	5	(n == 1) ? 0 : ((n == 2) ? 1 : ((n == 0 || n % 100 >= 3 && n % 100 <= 10) ? 2 : ((n % 100 >= 11 && n % 100 <= 19) ? 3 : 4)))	10	476
839	4	3	(n == 0 || n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	566
840	4	3	(n == 0 || n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	569
841	4	3	(n == 0 || n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	570
842	4	3	(n == 0 || n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	571
843	4	3	(n == 0 || n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	572
844	4	3	(n == 1) ? 0 : ((n != 0 && n % 1000000 == 0) ? 1 : 2)	20	573
845	6	2	(n != 1)	1	1
846	6	2	(n != 1)	1	2
847	6	2	(n != 1)	1	10
848	6	2	(n != 1)	1	19
849	6	6	(n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : (n%100>=3 && n%100<=10) ? 3 : n%100>=11 ? 4 : 5)	12	26
850	6	2	(n != 1)	1	43
851	6	2	(n != 1)	1	49
852	6	2	(n != 1)	1	51
853	6	2	(n != 1)	1	53
854	6	3	(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)	22	60
855	6	2	(n != 1)	1	67
856	6	1	0	0	74
857	6	2	(n != 1)	1	82
858	6	1	0	0	86
859	6	2	(n > 1)	1	89
860	6	3	(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)	22	94
861	6	2	(n != 1)	1	101
862	6	2	(n != 1)	1	128
863	6	3	((n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2)	22	139
864	6	5	(n==0 ? 0 : n==1 ? 1 : (n>=2 && n<=5) ? 2 : n==6 ? 3 : 4)	19	144
865	6	2	(n != 1)	1	145
866	6	2	(n != 1)	1	149
867	6	3	(n==1 ? 0 : n==2 ? 1 : 2)	4	169
868	6	1	0	0	171
869	6	2	(n != 1)	1	177
870	6	2	(n != 1)	1	179
871	6	2	(n != 1)	1	196
872	6	2	(n != 1)	1	197
873	6	2	(n != 1)	1	218
874	6	2	(n != 1)	1	219
875	6	1	0	0	222
876	6	2	(n != 1)	1	228
877	6	3	(n==1 ? 0 : (n%10==4 || n%10==6 || n%10== 9) ? 1 : 2)	11	229
878	6	1	0	0	230
879	6	2	(n != 1)	1	231
880	6	2	(n > 1)	1	233
881	6	2	(n != 1)	1	250
882	6	2	(n != 1)	1	253
883	6	3	(n==1 ? 0 : n==2 ? 1 : 2)	4	254
884	6	4	(n==1 || n==11) ? 0 : (n==2 || n==12) ? 1 : (n > 2 && n < 20) ? 2 : 3	6	261
885	6	2	(n != 1)	1	264
886	6	1	0	0	267
887	6	2	(n != 1)	1	276
888	6	3	(n==1 ? 0 : n==2 ? 1 : 2)	4	285
889	6	2	(n != 1)	1	287
890	6	2	(n != 1)	1	294
891	6	2	(n != 1)	1	296
892	6	3	(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)	22	309
893	6	1	0	0	314
894	6	2	(n > 1)	1	317
895	6	2	(n != 1)	1	319
896	6	1	0	0	322
897	6	3	(n==1 ? 0 : n==2 ? 1 : 2)	4	326
898	6	2	(n%10==1 && n%100!=11 ? 0 : 1)	1	330
899	6	2	(n != 1)	1	332
900	6	3	(n==1 ? 0 : n==2 ? 1 : 2)	4	336
902	6	1	0	0	346
903	6	2	(n != 1)	1	347
904	6	2	(n != 1)	1	367
905	6	2	(n != 1)	1	370
906	6	2	(n != 1)	1	372
907	6	2	(n != 1)	1	376
908	6	1	0	0	377
909	6	2	(n != 1)	1	387
910	6	2	(n != 1)	1	390
911	6	2	(n != 1)	1	394
912	6	2	(n != 1)	1	396
913	6	2	(n != 1)	1	397
914	6	2	(n != 1)	1	402
915	6	2	(n != 1)	1	405
916	6	2	(n != 1)	1	415
917	6	2	(n != 1)	1	416
918	6	3	(n%10==1 && n%100!=11 ? 0 : n%10>=2 && (n%100<10 || n%100>=20) ? 1 : 2)	22	420
919	6	3	(n%10==1 && n%100!=11 ? 0 : n != 0 ? 1 : 2)	7	430
920	6	2	(n != 1)	1	448
921	6	3	(n==1 ? 0 : n==2 ? 1 : 2)	4	454
922	6	3	(n%100==1 ? 0 : n%100==2 ? 1 : 2)	4	460
923	6	2	(n != 1)	1	461
924	6	2	(n != 1)	1	462
925	6	2	(n != 1)	1	472
926	6	1	0	0	474
927	6	4	(n==1 ? 0 : (n==0 || (n%100>=1 && n%100<=10)) ? 1 : (n%100>=11 && n%100<=19) ? 2 : 3)	23	476
928	6	1	0	0	484
929	6	1	0	0	489
930	6	2	(n != 1)	1	501
931	6	2	(n != 1)	1	505
932	6	2	(n != 1)	1	512
933	6	2	(n != 1)	1	516
934	6	2	(n != 1)	1	524
935	6	2	(n != 1)	1	533
936	6	1	0	0	536
937	6	2	(n != 1)	1	537
938	6	2	(n != 1)	1	544
939	6	3	(n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)	22	557
940	6	2	(n != 1)	1	565
941	6	2	(n != 1)	1	566
942	6	2	(n > 1)	1	570
943	6	2	(n != 1)	1	578
944	6	2	(n != 1)	1	591
945	6	2	(n != 1)	1	593
946	6	3	(n==1 ? 0 : (n==0 || (n%100 > 0 && n%100 < 20)) ? 1 : 2)	2	595
947	6	3	(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)	22	599
948	6	2	(n != 1)	1	605
949	6	3	(n==1 ? 0 : n==2 ? 1 : 2)	4	607
950	6	2	(n != 1)	1	619
951	6	3	(n==1 ? 0 : n==2 ? 1 : 2)	4	621
952	6	2	(n != 1)	1	632
953	6	3	((n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2)	22	635
954	6	4	(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3)	6	637
955	6	3	(n==1 ? 0 : n==2 ? 1 : 2)	4	638
956	6	2	(n != 1)	1	645
957	6	2	(n != 1)	1	647
958	6	2	(n != 1)	1	651
959	6	3	(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)	22	652
960	6	2	(n != 1)	1	659
961	6	2	(n != 1)	1	661
962	6	1	0	0	662
963	6	2	(n != 1)	1	666
964	6	2	(n != 1)	1	667
965	6	2	(n != 1)	1	679
966	6	2	(n != 1)	1	683
967	6	2	(n != 1)	1	688
968	6	1	0	0	689
969	6	2	(n > 1)	1	690
970	6	2	(n != 1)	1	693
971	6	2	(n != 1)	1	701
972	6	2	(n != 1)	1	702
973	6	1	0	0	707
974	6	2	(n != 1)	1	709
975	6	1	0	0	713
976	6	2	(n != 1)	1	725
977	6	3	(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)	22	727
978	6	2	(n != 1)	1	731
979	6	2	(n != 1)	1	734
980	6	1	0	0	739
981	6	2	(n != 1)	1	743
982	6	2	(n > 1)	1	747
983	6	2	(n != 1)	1	756
984	6	2	(n != 1)	1	761
985	6	2	(n != 1)	1	766
986	6	1	0	0	767
987	6	1	0	0	771
988	6	1	0	0	776
989	6	1	0	0	778
990	6	2	(n != 1)	1	781
\.


--
-- Data for Name: memory_memory; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.memory_memory (id, source, target, origin, from_file, shared, project_id, source_language_id, target_language_id, user_id, status, context) FROM stdin;
\.


--
-- Data for Name: metrics_metric; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.metrics_metric (id, date, scope, relation, secondary, changes, data) FROM stdin;
3	2026-01-13	0	0	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1	2026-01-13	4	1	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2	2026-01-13	4	2	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
4	2026-01-13	7	1	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
5	2026-01-13	7	2	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
6	2026-01-13	7	3	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
7	2026-01-13	7	4	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
8	2026-01-13	7	5	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
9	2026-01-13	7	6	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
10	2026-01-13	7	7	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
11	2026-01-13	7	8	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
12	2026-01-13	7	9	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
13	2026-01-13	7	10	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
14	2026-01-13	7	11	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
15	2026-01-13	7	12	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
16	2026-01-13	7	13	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
17	2026-01-13	7	14	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
18	2026-01-13	7	15	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
19	2026-01-13	7	16	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
20	2026-01-13	7	17	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
21	2026-01-13	7	18	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
22	2026-01-13	7	19	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
23	2026-01-13	7	20	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
24	2026-01-13	7	21	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
25	2026-01-13	7	22	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
26	2026-01-13	7	23	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
27	2026-01-13	7	24	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
28	2026-01-13	7	25	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
29	2026-01-13	7	26	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
30	2026-01-13	7	27	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
31	2026-01-13	7	28	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
32	2026-01-13	7	29	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
33	2026-01-13	7	30	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
34	2026-01-13	7	31	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
35	2026-01-13	7	32	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
36	2026-01-13	7	33	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
37	2026-01-13	7	34	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
38	2026-01-13	7	35	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
39	2026-01-13	7	36	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
40	2026-01-13	7	37	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
41	2026-01-13	7	38	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
42	2026-01-13	7	39	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
43	2026-01-13	7	40	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
44	2026-01-13	7	41	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
45	2026-01-13	7	42	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
46	2026-01-13	7	43	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
47	2026-01-13	7	44	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
48	2026-01-13	7	45	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
49	2026-01-13	7	46	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
50	2026-01-13	7	47	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
51	2026-01-13	7	48	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
52	2026-01-13	7	49	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
53	2026-01-13	7	50	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
54	2026-01-13	7	51	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
55	2026-01-13	7	52	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
56	2026-01-13	7	53	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
57	2026-01-13	7	54	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
58	2026-01-13	7	55	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
59	2026-01-13	7	56	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
60	2026-01-13	7	57	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
61	2026-01-13	7	58	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
62	2026-01-13	7	59	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
63	2026-01-13	7	60	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
64	2026-01-13	7	61	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
65	2026-01-13	7	62	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
66	2026-01-13	7	63	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
67	2026-01-13	7	64	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
68	2026-01-13	7	65	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
69	2026-01-13	7	66	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
70	2026-01-13	7	67	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
71	2026-01-13	7	68	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
72	2026-01-13	7	69	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
73	2026-01-13	7	70	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
74	2026-01-13	7	71	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
75	2026-01-13	7	72	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
76	2026-01-13	7	73	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
77	2026-01-13	7	74	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
78	2026-01-13	7	75	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
79	2026-01-13	7	76	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
80	2026-01-13	7	77	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
81	2026-01-13	7	78	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
82	2026-01-13	7	79	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
83	2026-01-13	7	80	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
84	2026-01-13	7	81	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
85	2026-01-13	7	82	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
86	2026-01-13	7	83	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
87	2026-01-13	7	84	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
88	2026-01-13	7	85	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
89	2026-01-13	7	86	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
90	2026-01-13	7	87	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
91	2026-01-13	7	88	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
92	2026-01-13	7	89	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
93	2026-01-13	7	90	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
94	2026-01-13	7	91	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
95	2026-01-13	7	92	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
96	2026-01-13	7	93	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
97	2026-01-13	7	94	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
98	2026-01-13	7	95	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
99	2026-01-13	7	96	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
100	2026-01-13	7	97	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
101	2026-01-13	7	98	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
102	2026-01-13	7	99	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
103	2026-01-13	7	100	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
104	2026-01-13	7	101	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
105	2026-01-13	7	102	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
106	2026-01-13	7	103	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
107	2026-01-13	7	104	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
108	2026-01-13	7	105	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
109	2026-01-13	7	106	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
110	2026-01-13	7	107	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
111	2026-01-13	7	108	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
112	2026-01-13	7	109	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
113	2026-01-13	7	110	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
114	2026-01-13	7	111	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
115	2026-01-13	7	112	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
116	2026-01-13	7	113	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
117	2026-01-13	7	114	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
118	2026-01-13	7	115	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
119	2026-01-13	7	116	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
120	2026-01-13	7	117	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
121	2026-01-13	7	118	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
122	2026-01-13	7	119	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
123	2026-01-13	7	120	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
124	2026-01-13	7	121	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
125	2026-01-13	7	122	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
126	2026-01-13	7	123	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
127	2026-01-13	7	124	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
128	2026-01-13	7	125	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
129	2026-01-13	7	126	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
130	2026-01-13	7	127	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
131	2026-01-13	7	128	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
132	2026-01-13	7	129	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
133	2026-01-13	7	130	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
134	2026-01-13	7	131	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
135	2026-01-13	7	132	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
136	2026-01-13	7	133	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
137	2026-01-13	7	134	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
138	2026-01-13	7	135	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
139	2026-01-13	7	136	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
140	2026-01-13	7	137	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
141	2026-01-13	7	138	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
142	2026-01-13	7	139	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
143	2026-01-13	7	140	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
144	2026-01-13	7	141	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
145	2026-01-13	7	142	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
146	2026-01-13	7	143	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
147	2026-01-13	7	144	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
148	2026-01-13	7	145	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
149	2026-01-13	7	146	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
150	2026-01-13	7	147	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
151	2026-01-13	7	148	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
152	2026-01-13	7	149	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
153	2026-01-13	7	150	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
154	2026-01-13	7	151	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
155	2026-01-13	7	152	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
156	2026-01-13	7	153	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
157	2026-01-13	7	154	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
158	2026-01-13	7	155	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
159	2026-01-13	7	156	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
160	2026-01-13	7	157	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
161	2026-01-13	7	158	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
162	2026-01-13	7	159	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
163	2026-01-13	7	160	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
164	2026-01-13	7	161	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
165	2026-01-13	7	162	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
166	2026-01-13	7	163	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
167	2026-01-13	7	164	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
168	2026-01-13	7	165	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
169	2026-01-13	7	166	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
170	2026-01-13	7	167	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
171	2026-01-13	7	168	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
172	2026-01-13	7	169	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
173	2026-01-13	7	170	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
174	2026-01-13	7	171	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
175	2026-01-13	7	172	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
176	2026-01-13	7	173	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
177	2026-01-13	7	174	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
178	2026-01-13	7	175	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
179	2026-01-13	7	176	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
180	2026-01-13	7	177	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
181	2026-01-13	7	178	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
182	2026-01-13	7	179	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
183	2026-01-13	7	180	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
184	2026-01-13	7	181	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
185	2026-01-13	7	182	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
186	2026-01-13	7	183	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
187	2026-01-13	7	184	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
188	2026-01-13	7	185	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
189	2026-01-13	7	186	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
190	2026-01-13	7	187	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
191	2026-01-13	7	188	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
192	2026-01-13	7	189	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
193	2026-01-13	7	190	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
194	2026-01-13	7	191	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
195	2026-01-13	7	192	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
196	2026-01-13	7	193	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
197	2026-01-13	7	194	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
198	2026-01-13	7	195	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
199	2026-01-13	7	196	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
200	2026-01-13	7	197	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
201	2026-01-13	7	198	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
202	2026-01-13	7	199	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
203	2026-01-13	7	200	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
204	2026-01-13	7	201	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
205	2026-01-13	7	202	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
206	2026-01-13	7	203	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
207	2026-01-13	7	204	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
208	2026-01-13	7	205	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
209	2026-01-13	7	206	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
210	2026-01-13	7	207	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
211	2026-01-13	7	208	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
212	2026-01-13	7	209	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
213	2026-01-13	7	210	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
214	2026-01-13	7	211	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
215	2026-01-13	7	212	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
216	2026-01-13	7	213	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
217	2026-01-13	7	214	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
218	2026-01-13	7	215	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
219	2026-01-13	7	216	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
220	2026-01-13	7	217	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
221	2026-01-13	7	218	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
222	2026-01-13	7	219	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
223	2026-01-13	7	220	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
224	2026-01-13	7	221	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
225	2026-01-13	7	222	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
226	2026-01-13	7	223	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
227	2026-01-13	7	224	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
228	2026-01-13	7	225	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
229	2026-01-13	7	226	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
230	2026-01-13	7	227	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
231	2026-01-13	7	228	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
232	2026-01-13	7	229	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
233	2026-01-13	7	230	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
234	2026-01-13	7	231	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
235	2026-01-13	7	232	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
236	2026-01-13	7	233	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
237	2026-01-13	7	234	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
238	2026-01-13	7	235	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
239	2026-01-13	7	236	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
240	2026-01-13	7	237	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
241	2026-01-13	7	238	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
242	2026-01-13	7	239	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
243	2026-01-13	7	240	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
244	2026-01-13	7	241	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
245	2026-01-13	7	242	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
246	2026-01-13	7	243	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
247	2026-01-13	7	244	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
248	2026-01-13	7	245	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
249	2026-01-13	7	246	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
250	2026-01-13	7	247	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
251	2026-01-13	7	248	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
252	2026-01-13	7	249	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
253	2026-01-13	7	250	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
254	2026-01-13	7	251	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
255	2026-01-13	7	252	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
256	2026-01-13	7	253	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
257	2026-01-13	7	254	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
258	2026-01-13	7	255	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
259	2026-01-13	7	256	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
260	2026-01-13	7	257	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
261	2026-01-13	7	258	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
262	2026-01-13	7	259	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
263	2026-01-13	7	260	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
264	2026-01-13	7	261	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
265	2026-01-13	7	262	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
266	2026-01-13	7	263	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
267	2026-01-13	7	264	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
268	2026-01-13	7	265	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
269	2026-01-13	7	266	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
270	2026-01-13	7	267	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
271	2026-01-13	7	268	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
272	2026-01-13	7	269	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
273	2026-01-13	7	270	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
274	2026-01-13	7	271	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
275	2026-01-13	7	272	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
276	2026-01-13	7	273	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
277	2026-01-13	7	274	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
278	2026-01-13	7	275	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
279	2026-01-13	7	276	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
280	2026-01-13	7	277	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
281	2026-01-13	7	278	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
282	2026-01-13	7	279	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
283	2026-01-13	7	280	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
284	2026-01-13	7	281	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
285	2026-01-13	7	282	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
286	2026-01-13	7	283	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
287	2026-01-13	7	284	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
288	2026-01-13	7	285	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
289	2026-01-13	7	286	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
290	2026-01-13	7	287	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
291	2026-01-13	7	288	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
292	2026-01-13	7	289	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
293	2026-01-13	7	290	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
294	2026-01-13	7	291	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
295	2026-01-13	7	292	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
296	2026-01-13	7	293	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
297	2026-01-13	7	294	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
298	2026-01-13	7	295	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
299	2026-01-13	7	296	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
300	2026-01-13	7	297	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
301	2026-01-13	7	298	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
302	2026-01-13	7	299	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
303	2026-01-13	7	300	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
304	2026-01-13	7	301	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
305	2026-01-13	7	302	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
306	2026-01-13	7	303	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
307	2026-01-13	7	304	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
308	2026-01-13	7	305	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
309	2026-01-13	7	306	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
310	2026-01-13	7	307	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
311	2026-01-13	7	308	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
312	2026-01-13	7	309	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
313	2026-01-13	7	310	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
314	2026-01-13	7	311	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
315	2026-01-13	7	312	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
316	2026-01-13	7	313	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
317	2026-01-13	7	314	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
318	2026-01-13	7	315	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
319	2026-01-13	7	316	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
320	2026-01-13	7	317	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
321	2026-01-13	7	318	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
322	2026-01-13	7	319	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
323	2026-01-13	7	320	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
324	2026-01-13	7	321	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
325	2026-01-13	7	322	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
326	2026-01-13	7	323	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
327	2026-01-13	7	324	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
328	2026-01-13	7	325	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
329	2026-01-13	7	326	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
330	2026-01-13	7	327	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
331	2026-01-13	7	328	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
332	2026-01-13	7	329	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
333	2026-01-13	7	330	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
334	2026-01-13	7	331	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
335	2026-01-13	7	332	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
336	2026-01-13	7	333	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
337	2026-01-13	7	334	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
338	2026-01-13	7	335	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
339	2026-01-13	7	336	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
340	2026-01-13	7	337	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
341	2026-01-13	7	338	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
342	2026-01-13	7	339	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
343	2026-01-13	7	340	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
344	2026-01-13	7	341	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
345	2026-01-13	7	342	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
346	2026-01-13	7	343	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
347	2026-01-13	7	344	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
348	2026-01-13	7	345	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
349	2026-01-13	7	346	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
350	2026-01-13	7	347	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
351	2026-01-13	7	348	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
352	2026-01-13	7	349	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
353	2026-01-13	7	350	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
354	2026-01-13	7	351	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
355	2026-01-13	7	352	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
356	2026-01-13	7	353	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
357	2026-01-13	7	354	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
358	2026-01-13	7	355	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
359	2026-01-13	7	356	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
360	2026-01-13	7	357	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
361	2026-01-13	7	358	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
362	2026-01-13	7	359	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
363	2026-01-13	7	360	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
364	2026-01-13	7	361	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
365	2026-01-13	7	362	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
366	2026-01-13	7	363	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
367	2026-01-13	7	364	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
368	2026-01-13	7	365	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
369	2026-01-13	7	366	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
370	2026-01-13	7	367	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
371	2026-01-13	7	368	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
372	2026-01-13	7	369	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
373	2026-01-13	7	370	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
374	2026-01-13	7	371	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
375	2026-01-13	7	372	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
376	2026-01-13	7	373	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
377	2026-01-13	7	374	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
378	2026-01-13	7	501	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
379	2026-01-13	7	375	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
380	2026-01-13	7	376	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
381	2026-01-13	7	377	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
382	2026-01-13	7	378	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
383	2026-01-13	7	379	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
384	2026-01-13	7	380	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
385	2026-01-13	7	381	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
386	2026-01-13	7	382	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
387	2026-01-13	7	383	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
388	2026-01-13	7	384	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
389	2026-01-13	7	385	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
390	2026-01-13	7	386	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
391	2026-01-13	7	387	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
392	2026-01-13	7	388	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
393	2026-01-13	7	389	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
394	2026-01-13	7	390	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
395	2026-01-13	7	391	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
396	2026-01-13	7	392	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
397	2026-01-13	7	393	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
398	2026-01-13	7	394	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
399	2026-01-13	7	395	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
400	2026-01-13	7	396	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
401	2026-01-13	7	397	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
402	2026-01-13	7	398	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
403	2026-01-13	7	399	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
404	2026-01-13	7	400	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
405	2026-01-13	7	401	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
406	2026-01-13	7	402	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
407	2026-01-13	7	403	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
408	2026-01-13	7	404	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
409	2026-01-13	7	405	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
410	2026-01-13	7	406	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
411	2026-01-13	7	407	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
412	2026-01-13	7	408	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
413	2026-01-13	7	409	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
414	2026-01-13	7	410	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
415	2026-01-13	7	411	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
416	2026-01-13	7	412	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
417	2026-01-13	7	413	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
418	2026-01-13	7	414	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
419	2026-01-13	7	415	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
420	2026-01-13	7	416	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
421	2026-01-13	7	417	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
422	2026-01-13	7	418	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
423	2026-01-13	7	419	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
424	2026-01-13	7	420	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
425	2026-01-13	7	421	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
426	2026-01-13	7	422	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
427	2026-01-13	7	423	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
428	2026-01-13	7	424	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
429	2026-01-13	7	425	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
430	2026-01-13	7	426	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
431	2026-01-13	7	427	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
432	2026-01-13	7	428	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
433	2026-01-13	7	429	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
434	2026-01-13	7	430	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
435	2026-01-13	7	431	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
436	2026-01-13	7	432	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
437	2026-01-13	7	433	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
438	2026-01-13	7	434	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
439	2026-01-13	7	435	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
440	2026-01-13	7	436	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
441	2026-01-13	7	437	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
442	2026-01-13	7	438	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
443	2026-01-13	7	439	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
444	2026-01-13	7	440	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
445	2026-01-13	7	441	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
446	2026-01-13	7	442	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
447	2026-01-13	7	443	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
448	2026-01-13	7	444	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
449	2026-01-13	7	445	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
450	2026-01-13	7	446	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
451	2026-01-13	7	447	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
452	2026-01-13	7	448	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
453	2026-01-13	7	449	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
454	2026-01-13	7	450	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
455	2026-01-13	7	451	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
456	2026-01-13	7	452	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
457	2026-01-13	7	453	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
458	2026-01-13	7	454	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
459	2026-01-13	7	455	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
460	2026-01-13	7	456	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
461	2026-01-13	7	457	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
462	2026-01-13	7	458	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
463	2026-01-13	7	459	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
464	2026-01-13	7	460	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
465	2026-01-13	7	461	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
466	2026-01-13	7	462	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
467	2026-01-13	7	463	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
468	2026-01-13	7	464	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
469	2026-01-13	7	465	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
470	2026-01-13	7	466	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
471	2026-01-13	7	467	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
472	2026-01-13	7	468	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
473	2026-01-13	7	469	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
474	2026-01-13	7	470	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
475	2026-01-13	7	471	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
476	2026-01-13	7	472	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
477	2026-01-13	7	473	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
478	2026-01-13	7	474	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
479	2026-01-13	7	475	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
480	2026-01-13	7	476	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
481	2026-01-13	7	477	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
482	2026-01-13	7	478	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
483	2026-01-13	7	479	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
484	2026-01-13	7	480	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
485	2026-01-13	7	481	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
486	2026-01-13	7	482	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
487	2026-01-13	7	483	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
488	2026-01-13	7	484	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
489	2026-01-13	7	485	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
490	2026-01-13	7	486	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
491	2026-01-13	7	487	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
492	2026-01-13	7	488	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
493	2026-01-13	7	489	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
494	2026-01-13	7	490	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
495	2026-01-13	7	491	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
496	2026-01-13	7	492	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
497	2026-01-13	7	493	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
498	2026-01-13	7	494	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
499	2026-01-13	7	495	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
500	2026-01-13	7	496	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
501	2026-01-13	7	497	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
502	2026-01-13	7	498	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
503	2026-01-13	7	499	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
504	2026-01-13	7	500	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
505	2026-01-13	7	502	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
506	2026-01-13	7	503	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
507	2026-01-13	7	504	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
508	2026-01-13	7	505	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
509	2026-01-13	7	506	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
510	2026-01-13	7	507	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
511	2026-01-13	7	508	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
512	2026-01-13	7	509	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
513	2026-01-13	7	510	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
514	2026-01-13	7	511	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
515	2026-01-13	7	512	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
516	2026-01-13	7	513	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
517	2026-01-13	7	514	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
518	2026-01-13	7	515	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
519	2026-01-13	7	516	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
520	2026-01-13	7	517	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
521	2026-01-13	7	518	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
522	2026-01-13	7	519	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
523	2026-01-13	7	520	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
524	2026-01-13	7	521	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
525	2026-01-13	7	522	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
526	2026-01-13	7	523	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
527	2026-01-13	7	524	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
528	2026-01-13	7	525	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
529	2026-01-13	7	526	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
530	2026-01-13	7	527	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
531	2026-01-13	7	528	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
532	2026-01-13	7	529	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
533	2026-01-13	7	530	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
534	2026-01-13	7	531	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
535	2026-01-13	7	532	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
536	2026-01-13	7	533	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
537	2026-01-13	7	534	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
538	2026-01-13	7	535	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
539	2026-01-13	7	536	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
540	2026-01-13	7	537	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
541	2026-01-13	7	538	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
542	2026-01-13	7	539	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
543	2026-01-13	7	540	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
544	2026-01-13	7	541	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
545	2026-01-13	7	542	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
546	2026-01-13	7	543	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
547	2026-01-13	7	544	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
548	2026-01-13	7	545	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
549	2026-01-13	7	546	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
550	2026-01-13	7	547	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
551	2026-01-13	7	548	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
552	2026-01-13	7	549	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
553	2026-01-13	7	550	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
554	2026-01-13	7	551	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
555	2026-01-13	7	552	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
556	2026-01-13	7	553	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
557	2026-01-13	7	554	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
558	2026-01-13	7	555	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
559	2026-01-13	7	556	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
560	2026-01-13	7	557	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
561	2026-01-13	7	558	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
562	2026-01-13	7	559	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
563	2026-01-13	7	560	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
564	2026-01-13	7	561	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
565	2026-01-13	7	562	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
566	2026-01-13	7	563	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
567	2026-01-13	7	564	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
568	2026-01-13	7	565	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
569	2026-01-13	7	566	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
570	2026-01-13	7	567	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
571	2026-01-13	7	568	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
572	2026-01-13	7	569	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
573	2026-01-13	7	570	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
574	2026-01-13	7	571	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
575	2026-01-13	7	572	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
576	2026-01-13	7	573	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
577	2026-01-13	7	574	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
578	2026-01-13	7	575	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
579	2026-01-13	7	576	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
580	2026-01-13	7	577	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
581	2026-01-13	7	578	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
582	2026-01-13	7	579	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
583	2026-01-13	7	580	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
584	2026-01-13	7	581	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
585	2026-01-13	7	582	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
586	2026-01-13	7	583	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
587	2026-01-13	7	584	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
588	2026-01-13	7	585	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
589	2026-01-13	7	586	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
590	2026-01-13	7	587	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
591	2026-01-13	7	588	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
592	2026-01-13	7	589	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
593	2026-01-13	7	590	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
594	2026-01-13	7	591	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
595	2026-01-13	7	592	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
596	2026-01-13	7	593	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
597	2026-01-13	7	594	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
598	2026-01-13	7	595	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
599	2026-01-13	7	596	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
600	2026-01-13	7	597	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
601	2026-01-13	7	598	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
602	2026-01-13	7	599	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
603	2026-01-13	7	600	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
604	2026-01-13	7	601	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
605	2026-01-13	7	602	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
606	2026-01-13	7	603	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
607	2026-01-13	7	604	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
608	2026-01-13	7	605	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
609	2026-01-13	7	606	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
610	2026-01-13	7	607	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
611	2026-01-13	7	608	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
612	2026-01-13	7	609	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
613	2026-01-13	7	610	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
614	2026-01-13	7	611	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
615	2026-01-13	7	612	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
616	2026-01-13	7	613	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
617	2026-01-13	7	614	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
618	2026-01-13	7	615	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
619	2026-01-13	7	616	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
620	2026-01-13	7	617	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
621	2026-01-13	7	618	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
622	2026-01-13	7	619	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
623	2026-01-13	7	620	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
624	2026-01-13	7	621	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
625	2026-01-13	7	622	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
626	2026-01-13	7	623	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
627	2026-01-13	7	624	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
628	2026-01-13	7	625	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
629	2026-01-13	7	626	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
630	2026-01-13	7	627	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
631	2026-01-13	7	628	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
632	2026-01-13	7	629	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
633	2026-01-13	7	630	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
634	2026-01-13	7	631	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
635	2026-01-13	7	632	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
636	2026-01-13	7	633	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
637	2026-01-13	7	634	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
638	2026-01-13	7	635	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
639	2026-01-13	7	636	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
640	2026-01-13	7	637	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
641	2026-01-13	7	638	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
642	2026-01-13	7	639	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
643	2026-01-13	7	640	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
644	2026-01-13	7	641	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
645	2026-01-13	7	642	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
646	2026-01-13	7	643	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
647	2026-01-13	7	644	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
648	2026-01-13	7	645	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
649	2026-01-13	7	646	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
650	2026-01-13	7	647	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
651	2026-01-13	7	648	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
652	2026-01-13	7	649	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
653	2026-01-13	7	650	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
654	2026-01-13	7	651	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
655	2026-01-13	7	652	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
656	2026-01-13	7	653	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
657	2026-01-13	7	654	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
658	2026-01-13	7	655	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
659	2026-01-13	7	656	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
660	2026-01-13	7	657	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
661	2026-01-13	7	658	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
662	2026-01-13	7	659	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
663	2026-01-13	7	660	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
664	2026-01-13	7	661	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
665	2026-01-13	7	662	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
666	2026-01-13	7	663	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
667	2026-01-13	7	664	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
668	2026-01-13	7	665	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
669	2026-01-13	7	666	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
670	2026-01-13	7	667	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
671	2026-01-13	7	668	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
672	2026-01-13	7	669	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
673	2026-01-13	7	670	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
674	2026-01-13	7	671	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
675	2026-01-13	7	672	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
676	2026-01-13	7	673	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
677	2026-01-13	7	674	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
678	2026-01-13	7	675	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
679	2026-01-13	7	676	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
680	2026-01-13	7	677	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
681	2026-01-13	7	678	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
682	2026-01-13	7	679	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
683	2026-01-13	7	680	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
684	2026-01-13	7	681	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
685	2026-01-13	7	682	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
686	2026-01-13	7	683	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
687	2026-01-13	7	684	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
688	2026-01-13	7	685	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
689	2026-01-13	7	686	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
690	2026-01-13	7	687	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
691	2026-01-13	7	688	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
692	2026-01-13	7	689	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
693	2026-01-13	7	690	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
694	2026-01-13	7	691	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
695	2026-01-13	7	692	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
696	2026-01-13	7	693	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
697	2026-01-13	7	694	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
698	2026-01-13	7	695	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
699	2026-01-13	7	696	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
700	2026-01-13	7	697	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
701	2026-01-13	7	698	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
702	2026-01-13	7	699	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
703	2026-01-13	7	700	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
704	2026-01-13	7	701	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
705	2026-01-13	7	702	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
706	2026-01-13	7	703	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
707	2026-01-13	7	704	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
708	2026-01-13	7	705	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
709	2026-01-13	7	706	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
710	2026-01-13	7	707	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
711	2026-01-13	7	708	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
712	2026-01-13	7	709	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
713	2026-01-13	7	710	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
714	2026-01-13	7	711	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
715	2026-01-13	7	712	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
716	2026-01-13	7	713	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
717	2026-01-13	7	714	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
718	2026-01-13	7	715	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
719	2026-01-13	7	716	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
720	2026-01-13	7	717	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
721	2026-01-13	7	718	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
722	2026-01-13	7	719	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
723	2026-01-13	7	720	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
724	2026-01-13	7	721	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
725	2026-01-13	7	722	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
726	2026-01-13	7	723	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
727	2026-01-13	7	724	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
728	2026-01-13	7	725	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
729	2026-01-13	7	726	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
730	2026-01-13	7	727	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
731	2026-01-13	7	728	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
732	2026-01-13	7	729	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
733	2026-01-13	7	730	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
734	2026-01-13	7	731	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
735	2026-01-13	7	732	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
736	2026-01-13	7	733	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
737	2026-01-13	7	734	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
738	2026-01-13	7	735	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
739	2026-01-13	7	736	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
740	2026-01-13	7	737	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
741	2026-01-13	7	738	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
742	2026-01-13	7	739	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
743	2026-01-13	7	740	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
744	2026-01-13	7	741	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
745	2026-01-13	7	742	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
746	2026-01-13	7	743	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
747	2026-01-13	7	744	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
748	2026-01-13	7	745	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
749	2026-01-13	7	746	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
750	2026-01-13	7	747	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
751	2026-01-13	7	748	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
752	2026-01-13	7	749	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
753	2026-01-13	7	750	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
754	2026-01-13	7	751	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
755	2026-01-13	7	752	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
756	2026-01-13	7	753	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
757	2026-01-13	7	754	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
758	2026-01-13	7	755	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
759	2026-01-13	7	756	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
760	2026-01-13	7	757	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
761	2026-01-13	7	758	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
762	2026-01-13	7	759	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
763	2026-01-13	7	760	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
764	2026-01-13	7	761	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
765	2026-01-13	7	762	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
766	2026-01-13	7	763	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
767	2026-01-13	7	764	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
768	2026-01-13	7	765	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
769	2026-01-13	7	766	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
770	2026-01-13	7	767	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
771	2026-01-13	7	768	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
772	2026-01-13	7	769	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
773	2026-01-13	7	770	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
774	2026-01-13	7	771	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
775	2026-01-13	7	772	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
776	2026-01-13	7	773	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
777	2026-01-13	7	774	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
778	2026-01-13	7	775	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
779	2026-01-13	7	776	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
780	2026-01-13	7	777	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
781	2026-01-13	7	778	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
782	2026-01-13	7	779	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
783	2026-01-13	7	780	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
784	2026-01-13	7	781	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
785	2026-01-13	7	782	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
786	2026-01-13	7	783	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
787	2026-01-14	0	0	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
788	2026-01-14	4	1	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
789	2026-01-14	4	2	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
790	2026-01-14	7	1	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
791	2026-01-14	7	2	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
792	2026-01-14	7	3	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
793	2026-01-14	7	4	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
794	2026-01-14	7	5	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
795	2026-01-14	7	6	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
796	2026-01-14	7	7	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
797	2026-01-14	7	8	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
798	2026-01-14	7	9	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
799	2026-01-14	7	10	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
800	2026-01-14	7	11	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
801	2026-01-14	7	12	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
802	2026-01-14	7	13	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
803	2026-01-14	7	14	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
804	2026-01-14	7	15	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
805	2026-01-14	7	16	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
806	2026-01-14	7	17	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
807	2026-01-14	7	18	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
808	2026-01-14	7	19	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
809	2026-01-14	7	20	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
810	2026-01-14	7	21	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
811	2026-01-14	7	22	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
812	2026-01-14	7	23	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
813	2026-01-14	7	24	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
814	2026-01-14	7	25	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
815	2026-01-14	7	26	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
816	2026-01-14	7	27	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
817	2026-01-14	7	28	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
818	2026-01-14	7	29	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
819	2026-01-14	7	30	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
820	2026-01-14	7	31	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
821	2026-01-14	7	32	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
822	2026-01-14	7	33	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
823	2026-01-14	7	34	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
824	2026-01-14	7	35	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
825	2026-01-14	7	36	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
826	2026-01-14	7	37	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
827	2026-01-14	7	38	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
828	2026-01-14	7	39	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
829	2026-01-14	7	40	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
830	2026-01-14	7	41	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
831	2026-01-14	7	42	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
832	2026-01-14	7	43	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
833	2026-01-14	7	44	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
834	2026-01-14	7	45	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
835	2026-01-14	7	46	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
836	2026-01-14	7	47	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
837	2026-01-14	7	48	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
838	2026-01-14	7	49	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
839	2026-01-14	7	50	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
840	2026-01-14	7	51	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
841	2026-01-14	7	52	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
842	2026-01-14	7	53	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
843	2026-01-14	7	54	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
844	2026-01-14	7	55	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
845	2026-01-14	7	56	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
846	2026-01-14	7	57	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
847	2026-01-14	7	58	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
848	2026-01-14	7	59	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
849	2026-01-14	7	60	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
850	2026-01-14	7	61	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
851	2026-01-14	7	62	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
852	2026-01-14	7	63	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
853	2026-01-14	7	64	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
854	2026-01-14	7	65	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
855	2026-01-14	7	66	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
856	2026-01-14	7	67	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
857	2026-01-14	7	68	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
858	2026-01-14	7	69	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
859	2026-01-14	7	70	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
860	2026-01-14	7	71	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
861	2026-01-14	7	72	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
862	2026-01-14	7	73	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
863	2026-01-14	7	74	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
864	2026-01-14	7	75	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
865	2026-01-14	7	76	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
866	2026-01-14	7	77	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
867	2026-01-14	7	78	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
868	2026-01-14	7	79	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
869	2026-01-14	7	80	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
870	2026-01-14	7	81	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
871	2026-01-14	7	82	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
872	2026-01-14	7	83	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
873	2026-01-14	7	84	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
874	2026-01-14	7	85	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
875	2026-01-14	7	86	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
876	2026-01-14	7	87	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
877	2026-01-14	7	88	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
878	2026-01-14	7	89	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
879	2026-01-14	7	90	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
880	2026-01-14	7	91	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
881	2026-01-14	7	92	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
882	2026-01-14	7	93	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
883	2026-01-14	7	94	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
884	2026-01-14	7	95	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
885	2026-01-14	7	96	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
886	2026-01-14	7	97	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
887	2026-01-14	7	98	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
888	2026-01-14	7	99	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
889	2026-01-14	7	100	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
890	2026-01-14	7	101	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
891	2026-01-14	7	102	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
892	2026-01-14	7	103	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
893	2026-01-14	7	104	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
894	2026-01-14	7	105	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
895	2026-01-14	7	106	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
896	2026-01-14	7	107	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
897	2026-01-14	7	108	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
898	2026-01-14	7	109	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
899	2026-01-14	7	110	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
900	2026-01-14	7	111	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
901	2026-01-14	7	112	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
902	2026-01-14	7	113	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
903	2026-01-14	7	114	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
904	2026-01-14	7	115	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
905	2026-01-14	7	116	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
906	2026-01-14	7	117	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
907	2026-01-14	7	118	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
908	2026-01-14	7	119	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
909	2026-01-14	7	120	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
910	2026-01-14	7	121	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
911	2026-01-14	7	122	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
912	2026-01-14	7	123	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
913	2026-01-14	7	124	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
914	2026-01-14	7	125	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
915	2026-01-14	7	126	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
916	2026-01-14	7	127	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
917	2026-01-14	7	128	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
918	2026-01-14	7	129	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
919	2026-01-14	7	130	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
920	2026-01-14	7	131	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
921	2026-01-14	7	132	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
922	2026-01-14	7	133	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
923	2026-01-14	7	134	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
924	2026-01-14	7	135	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
925	2026-01-14	7	136	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
926	2026-01-14	7	137	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
927	2026-01-14	7	138	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
928	2026-01-14	7	139	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
929	2026-01-14	7	140	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
930	2026-01-14	7	141	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
931	2026-01-14	7	142	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
932	2026-01-14	7	143	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
933	2026-01-14	7	144	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
934	2026-01-14	7	145	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
935	2026-01-14	7	146	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
936	2026-01-14	7	147	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
937	2026-01-14	7	148	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
938	2026-01-14	7	149	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
939	2026-01-14	7	150	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
940	2026-01-14	7	151	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
941	2026-01-14	7	152	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
942	2026-01-14	7	153	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
943	2026-01-14	7	154	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
944	2026-01-14	7	155	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
945	2026-01-14	7	156	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
946	2026-01-14	7	157	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
947	2026-01-14	7	158	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
948	2026-01-14	7	159	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
949	2026-01-14	7	160	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
950	2026-01-14	7	161	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
951	2026-01-14	7	162	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
952	2026-01-14	7	163	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
953	2026-01-14	7	164	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
954	2026-01-14	7	165	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
955	2026-01-14	7	166	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
956	2026-01-14	7	167	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
957	2026-01-14	7	168	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
958	2026-01-14	7	169	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
959	2026-01-14	7	170	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
960	2026-01-14	7	171	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
961	2026-01-14	7	172	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
962	2026-01-14	7	173	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
963	2026-01-14	7	174	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
964	2026-01-14	7	175	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
965	2026-01-14	7	176	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
966	2026-01-14	7	177	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
967	2026-01-14	7	178	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
968	2026-01-14	7	179	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
969	2026-01-14	7	180	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
970	2026-01-14	7	181	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
971	2026-01-14	7	182	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
972	2026-01-14	7	183	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
973	2026-01-14	7	184	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
974	2026-01-14	7	185	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
975	2026-01-14	7	186	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
976	2026-01-14	7	187	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
977	2026-01-14	7	188	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
978	2026-01-14	7	189	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
979	2026-01-14	7	190	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
980	2026-01-14	7	191	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
981	2026-01-14	7	192	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
982	2026-01-14	7	193	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
983	2026-01-14	7	194	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
984	2026-01-14	7	195	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
985	2026-01-14	7	196	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
986	2026-01-14	7	197	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
987	2026-01-14	7	198	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
988	2026-01-14	7	199	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
989	2026-01-14	7	200	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
990	2026-01-14	7	201	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
991	2026-01-14	7	202	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
992	2026-01-14	7	203	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
993	2026-01-14	7	204	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
994	2026-01-14	7	205	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
995	2026-01-14	7	206	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
996	2026-01-14	7	207	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
997	2026-01-14	7	208	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
998	2026-01-14	7	209	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
999	2026-01-14	7	210	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1000	2026-01-14	7	211	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1001	2026-01-14	7	212	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1002	2026-01-14	7	213	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1003	2026-01-14	7	214	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1004	2026-01-14	7	215	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1005	2026-01-14	7	216	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1006	2026-01-14	7	217	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1007	2026-01-14	7	218	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1008	2026-01-14	7	219	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1009	2026-01-14	7	220	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1010	2026-01-14	7	221	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1011	2026-01-14	7	222	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1012	2026-01-14	7	223	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1013	2026-01-14	7	224	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1014	2026-01-14	7	225	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1015	2026-01-14	7	226	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1016	2026-01-14	7	227	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1017	2026-01-14	7	228	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1018	2026-01-14	7	229	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1019	2026-01-14	7	230	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1020	2026-01-14	7	231	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1021	2026-01-14	7	232	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1022	2026-01-14	7	233	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1023	2026-01-14	7	234	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1024	2026-01-14	7	235	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1025	2026-01-14	7	236	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1026	2026-01-14	7	237	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1027	2026-01-14	7	238	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1028	2026-01-14	7	239	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1029	2026-01-14	7	240	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1030	2026-01-14	7	241	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1031	2026-01-14	7	242	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1032	2026-01-14	7	243	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1033	2026-01-14	7	244	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1034	2026-01-14	7	245	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1035	2026-01-14	7	246	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1036	2026-01-14	7	247	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1037	2026-01-14	7	248	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1038	2026-01-14	7	249	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1039	2026-01-14	7	250	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1040	2026-01-14	7	251	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1041	2026-01-14	7	252	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1042	2026-01-14	7	253	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1043	2026-01-14	7	254	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1044	2026-01-14	7	255	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1045	2026-01-14	7	256	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1046	2026-01-14	7	257	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1047	2026-01-14	7	258	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1048	2026-01-14	7	259	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1049	2026-01-14	7	260	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1050	2026-01-14	7	261	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1051	2026-01-14	7	262	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1052	2026-01-14	7	263	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1053	2026-01-14	7	264	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1054	2026-01-14	7	265	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1055	2026-01-14	7	266	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1056	2026-01-14	7	267	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1057	2026-01-14	7	268	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1058	2026-01-14	7	269	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1059	2026-01-14	7	270	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1060	2026-01-14	7	271	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1061	2026-01-14	7	272	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1062	2026-01-14	7	273	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1063	2026-01-14	7	274	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1064	2026-01-14	7	275	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1065	2026-01-14	7	276	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1066	2026-01-14	7	277	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1067	2026-01-14	7	278	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1068	2026-01-14	7	279	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1069	2026-01-14	7	280	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1070	2026-01-14	7	281	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1071	2026-01-14	7	282	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1072	2026-01-14	7	283	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1073	2026-01-14	7	284	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1074	2026-01-14	7	285	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1075	2026-01-14	7	286	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1076	2026-01-14	7	287	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1077	2026-01-14	7	288	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1078	2026-01-14	7	289	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1079	2026-01-14	7	290	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1080	2026-01-14	7	291	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1081	2026-01-14	7	292	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1082	2026-01-14	7	293	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1083	2026-01-14	7	294	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1084	2026-01-14	7	295	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1085	2026-01-14	7	296	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1086	2026-01-14	7	297	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1087	2026-01-14	7	298	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1088	2026-01-14	7	299	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1089	2026-01-14	7	300	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1090	2026-01-14	7	301	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1091	2026-01-14	7	302	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1092	2026-01-14	7	303	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1093	2026-01-14	7	304	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1094	2026-01-14	7	305	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1095	2026-01-14	7	306	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1096	2026-01-14	7	307	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1097	2026-01-14	7	308	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1098	2026-01-14	7	309	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1099	2026-01-14	7	310	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1100	2026-01-14	7	311	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1101	2026-01-14	7	312	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1102	2026-01-14	7	313	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1103	2026-01-14	7	314	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1104	2026-01-14	7	315	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1105	2026-01-14	7	316	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1106	2026-01-14	7	317	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1107	2026-01-14	7	318	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1108	2026-01-14	7	319	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1109	2026-01-14	7	320	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1110	2026-01-14	7	321	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1111	2026-01-14	7	322	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1112	2026-01-14	7	323	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1113	2026-01-14	7	324	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1114	2026-01-14	7	325	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1115	2026-01-14	7	326	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1116	2026-01-14	7	327	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1117	2026-01-14	7	328	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1118	2026-01-14	7	329	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1119	2026-01-14	7	330	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1120	2026-01-14	7	331	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1121	2026-01-14	7	332	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1122	2026-01-14	7	333	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1123	2026-01-14	7	334	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1124	2026-01-14	7	335	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1125	2026-01-14	7	336	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1126	2026-01-14	7	337	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1127	2026-01-14	7	338	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1128	2026-01-14	7	339	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1129	2026-01-14	7	340	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1130	2026-01-14	7	341	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1131	2026-01-14	7	342	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1132	2026-01-14	7	343	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1133	2026-01-14	7	344	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1134	2026-01-14	7	345	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1135	2026-01-14	7	346	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1136	2026-01-14	7	347	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1137	2026-01-14	7	348	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1138	2026-01-14	7	349	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1139	2026-01-14	7	350	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1140	2026-01-14	7	351	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1141	2026-01-14	7	352	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1142	2026-01-14	7	353	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1143	2026-01-14	7	354	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1144	2026-01-14	7	355	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1145	2026-01-14	7	356	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1146	2026-01-14	7	357	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1147	2026-01-14	7	358	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1148	2026-01-14	7	359	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1149	2026-01-14	7	360	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1150	2026-01-14	7	361	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1151	2026-01-14	7	362	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1152	2026-01-14	7	363	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1153	2026-01-14	7	364	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1154	2026-01-14	7	365	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1155	2026-01-14	7	366	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1156	2026-01-14	7	367	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1157	2026-01-14	7	368	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1158	2026-01-14	7	369	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1159	2026-01-14	7	370	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1160	2026-01-14	7	371	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1161	2026-01-14	7	372	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1162	2026-01-14	7	373	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1163	2026-01-14	7	374	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1164	2026-01-14	7	501	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1165	2026-01-14	7	375	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1166	2026-01-14	7	376	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1167	2026-01-14	7	377	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1168	2026-01-14	7	378	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1169	2026-01-14	7	379	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1170	2026-01-14	7	380	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1171	2026-01-14	7	381	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1172	2026-01-14	7	382	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1173	2026-01-14	7	383	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1174	2026-01-14	7	384	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1175	2026-01-14	7	385	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1176	2026-01-14	7	386	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1177	2026-01-14	7	387	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1178	2026-01-14	7	388	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1179	2026-01-14	7	389	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1180	2026-01-14	7	390	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1181	2026-01-14	7	391	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1182	2026-01-14	7	392	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1183	2026-01-14	7	393	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1184	2026-01-14	7	394	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1185	2026-01-14	7	395	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1186	2026-01-14	7	396	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1187	2026-01-14	7	397	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1188	2026-01-14	7	398	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1189	2026-01-14	7	399	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1190	2026-01-14	7	400	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1191	2026-01-14	7	401	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1192	2026-01-14	7	402	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1193	2026-01-14	7	403	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1194	2026-01-14	7	404	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1195	2026-01-14	7	405	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1196	2026-01-14	7	406	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1197	2026-01-14	7	407	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1198	2026-01-14	7	408	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1199	2026-01-14	7	409	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1200	2026-01-14	7	410	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1201	2026-01-14	7	411	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1202	2026-01-14	7	412	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1203	2026-01-14	7	413	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1204	2026-01-14	7	414	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1205	2026-01-14	7	415	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1206	2026-01-14	7	416	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1207	2026-01-14	7	417	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1208	2026-01-14	7	418	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1209	2026-01-14	7	419	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1210	2026-01-14	7	420	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1211	2026-01-14	7	421	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1212	2026-01-14	7	422	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1213	2026-01-14	7	423	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1214	2026-01-14	7	424	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1215	2026-01-14	7	425	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1216	2026-01-14	7	426	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1217	2026-01-14	7	427	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1218	2026-01-14	7	428	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1219	2026-01-14	7	429	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1220	2026-01-14	7	430	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1221	2026-01-14	7	431	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1222	2026-01-14	7	432	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1223	2026-01-14	7	433	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1224	2026-01-14	7	434	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1225	2026-01-14	7	435	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1226	2026-01-14	7	436	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1227	2026-01-14	7	437	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1228	2026-01-14	7	438	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1229	2026-01-14	7	439	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1230	2026-01-14	7	440	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1231	2026-01-14	7	441	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1232	2026-01-14	7	442	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1233	2026-01-14	7	443	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1234	2026-01-14	7	444	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1235	2026-01-14	7	445	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1236	2026-01-14	7	446	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1237	2026-01-14	7	447	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1238	2026-01-14	7	448	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1239	2026-01-14	7	449	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1240	2026-01-14	7	450	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1241	2026-01-14	7	451	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1242	2026-01-14	7	452	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1243	2026-01-14	7	453	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1244	2026-01-14	7	454	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1245	2026-01-14	7	455	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1246	2026-01-14	7	456	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1247	2026-01-14	7	457	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1248	2026-01-14	7	458	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1249	2026-01-14	7	459	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1250	2026-01-14	7	460	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1251	2026-01-14	7	461	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1252	2026-01-14	7	462	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1253	2026-01-14	7	463	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1254	2026-01-14	7	464	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1255	2026-01-14	7	465	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1256	2026-01-14	7	466	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1257	2026-01-14	7	467	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1258	2026-01-14	7	468	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1259	2026-01-14	7	469	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1260	2026-01-14	7	470	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1261	2026-01-14	7	471	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1262	2026-01-14	7	472	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1263	2026-01-14	7	473	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1264	2026-01-14	7	474	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1265	2026-01-14	7	475	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1266	2026-01-14	7	476	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1267	2026-01-14	7	477	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1268	2026-01-14	7	478	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1269	2026-01-14	7	479	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1270	2026-01-14	7	480	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1271	2026-01-14	7	481	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1272	2026-01-14	7	482	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1273	2026-01-14	7	483	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1274	2026-01-14	7	484	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1275	2026-01-14	7	485	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1276	2026-01-14	7	486	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1277	2026-01-14	7	487	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1278	2026-01-14	7	488	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1279	2026-01-14	7	489	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1280	2026-01-14	7	490	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1281	2026-01-14	7	491	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1282	2026-01-14	7	492	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1283	2026-01-14	7	493	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1284	2026-01-14	7	494	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1285	2026-01-14	7	495	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1286	2026-01-14	7	496	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1287	2026-01-14	7	497	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1288	2026-01-14	7	498	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1289	2026-01-14	7	499	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1290	2026-01-14	7	500	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1291	2026-01-14	7	502	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1292	2026-01-14	7	503	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1293	2026-01-14	7	504	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1294	2026-01-14	7	505	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1295	2026-01-14	7	506	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1296	2026-01-14	7	507	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1297	2026-01-14	7	508	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1298	2026-01-14	7	509	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1299	2026-01-14	7	510	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1300	2026-01-14	7	511	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1301	2026-01-14	7	512	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1302	2026-01-14	7	513	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1303	2026-01-14	7	514	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1304	2026-01-14	7	515	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1305	2026-01-14	7	516	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1306	2026-01-14	7	517	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1307	2026-01-14	7	518	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1308	2026-01-14	7	519	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1309	2026-01-14	7	520	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1310	2026-01-14	7	521	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1311	2026-01-14	7	522	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1312	2026-01-14	7	523	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1313	2026-01-14	7	524	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1314	2026-01-14	7	525	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1315	2026-01-14	7	526	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1316	2026-01-14	7	527	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1317	2026-01-14	7	528	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1318	2026-01-14	7	529	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1319	2026-01-14	7	530	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1320	2026-01-14	7	531	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1321	2026-01-14	7	532	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1322	2026-01-14	7	533	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1323	2026-01-14	7	534	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1324	2026-01-14	7	535	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1325	2026-01-14	7	536	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1326	2026-01-14	7	537	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1327	2026-01-14	7	538	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1328	2026-01-14	7	539	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1329	2026-01-14	7	540	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1330	2026-01-14	7	541	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1331	2026-01-14	7	542	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1332	2026-01-14	7	543	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1333	2026-01-14	7	544	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1334	2026-01-14	7	545	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1335	2026-01-14	7	546	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1336	2026-01-14	7	547	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1337	2026-01-14	7	548	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1338	2026-01-14	7	549	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1339	2026-01-14	7	550	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1340	2026-01-14	7	551	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1341	2026-01-14	7	552	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1342	2026-01-14	7	553	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1343	2026-01-14	7	554	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1344	2026-01-14	7	555	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1345	2026-01-14	7	556	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1346	2026-01-14	7	557	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1347	2026-01-14	7	558	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1348	2026-01-14	7	559	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1349	2026-01-14	7	560	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1350	2026-01-14	7	561	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1351	2026-01-14	7	562	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1352	2026-01-14	7	563	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1353	2026-01-14	7	564	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1354	2026-01-14	7	565	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1355	2026-01-14	7	566	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1356	2026-01-14	7	567	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1357	2026-01-14	7	568	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1358	2026-01-14	7	569	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1359	2026-01-14	7	570	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1360	2026-01-14	7	571	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1361	2026-01-14	7	572	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1362	2026-01-14	7	573	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1363	2026-01-14	7	574	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1364	2026-01-14	7	575	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1365	2026-01-14	7	576	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1366	2026-01-14	7	577	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1367	2026-01-14	7	578	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1368	2026-01-14	7	579	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1369	2026-01-14	7	580	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1370	2026-01-14	7	581	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1371	2026-01-14	7	582	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1372	2026-01-14	7	583	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1373	2026-01-14	7	584	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1374	2026-01-14	7	585	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1375	2026-01-14	7	586	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1376	2026-01-14	7	587	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1377	2026-01-14	7	588	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1378	2026-01-14	7	589	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1379	2026-01-14	7	590	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1380	2026-01-14	7	591	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1381	2026-01-14	7	592	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1382	2026-01-14	7	593	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1383	2026-01-14	7	594	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1384	2026-01-14	7	595	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1385	2026-01-14	7	596	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1386	2026-01-14	7	597	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1387	2026-01-14	7	598	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1388	2026-01-14	7	599	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1389	2026-01-14	7	600	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1390	2026-01-14	7	601	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1391	2026-01-14	7	602	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1392	2026-01-14	7	603	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1393	2026-01-14	7	604	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1394	2026-01-14	7	605	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1395	2026-01-14	7	606	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1396	2026-01-14	7	607	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1397	2026-01-14	7	608	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1398	2026-01-14	7	609	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1399	2026-01-14	7	610	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1400	2026-01-14	7	611	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1401	2026-01-14	7	612	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1402	2026-01-14	7	613	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1403	2026-01-14	7	614	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1404	2026-01-14	7	615	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1405	2026-01-14	7	616	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1406	2026-01-14	7	617	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1407	2026-01-14	7	618	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1408	2026-01-14	7	619	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1409	2026-01-14	7	620	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1410	2026-01-14	7	621	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1411	2026-01-14	7	622	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1412	2026-01-14	7	623	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1413	2026-01-14	7	624	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1414	2026-01-14	7	625	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1415	2026-01-14	7	626	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1416	2026-01-14	7	627	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1417	2026-01-14	7	628	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1418	2026-01-14	7	629	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1419	2026-01-14	7	630	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1420	2026-01-14	7	631	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1421	2026-01-14	7	632	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1422	2026-01-14	7	633	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1423	2026-01-14	7	634	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1424	2026-01-14	7	635	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1425	2026-01-14	7	636	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1426	2026-01-14	7	637	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1427	2026-01-14	7	638	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1428	2026-01-14	7	639	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1429	2026-01-14	7	640	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1430	2026-01-14	7	641	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1431	2026-01-14	7	642	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1432	2026-01-14	7	643	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1433	2026-01-14	7	644	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1434	2026-01-14	7	645	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1435	2026-01-14	7	646	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1436	2026-01-14	7	647	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1437	2026-01-14	7	648	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1438	2026-01-14	7	649	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1439	2026-01-14	7	650	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1440	2026-01-14	7	651	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1441	2026-01-14	7	652	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1442	2026-01-14	7	653	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1443	2026-01-14	7	654	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1444	2026-01-14	7	655	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1445	2026-01-14	7	656	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1446	2026-01-14	7	657	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1447	2026-01-14	7	658	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1448	2026-01-14	7	659	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1449	2026-01-14	7	660	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1450	2026-01-14	7	661	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1451	2026-01-14	7	662	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1452	2026-01-14	7	663	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1453	2026-01-14	7	664	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1454	2026-01-14	7	665	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1455	2026-01-14	7	666	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1456	2026-01-14	7	667	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1457	2026-01-14	7	668	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1458	2026-01-14	7	669	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1459	2026-01-14	7	670	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1460	2026-01-14	7	671	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1461	2026-01-14	7	672	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1462	2026-01-14	7	673	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1463	2026-01-14	7	674	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1464	2026-01-14	7	675	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1465	2026-01-14	7	676	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1466	2026-01-14	7	677	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1467	2026-01-14	7	678	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1468	2026-01-14	7	679	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1469	2026-01-14	7	680	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1470	2026-01-14	7	681	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1471	2026-01-14	7	682	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1472	2026-01-14	7	683	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1473	2026-01-14	7	684	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1474	2026-01-14	7	685	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1475	2026-01-14	7	686	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1476	2026-01-14	7	687	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1477	2026-01-14	7	688	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1478	2026-01-14	7	689	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1479	2026-01-14	7	690	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1480	2026-01-14	7	691	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1481	2026-01-14	7	692	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1482	2026-01-14	7	693	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1483	2026-01-14	7	694	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1484	2026-01-14	7	695	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1485	2026-01-14	7	696	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1486	2026-01-14	7	697	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1487	2026-01-14	7	698	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1488	2026-01-14	7	699	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1489	2026-01-14	7	700	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1490	2026-01-14	7	701	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1491	2026-01-14	7	702	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1492	2026-01-14	7	703	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1493	2026-01-14	7	704	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1494	2026-01-14	7	705	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1495	2026-01-14	7	706	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1496	2026-01-14	7	707	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1497	2026-01-14	7	708	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1498	2026-01-14	7	709	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1499	2026-01-14	7	710	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1500	2026-01-14	7	711	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1501	2026-01-14	7	712	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1502	2026-01-14	7	713	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1503	2026-01-14	7	714	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1504	2026-01-14	7	715	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1505	2026-01-14	7	716	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1506	2026-01-14	7	717	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1507	2026-01-14	7	718	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1508	2026-01-14	7	719	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1509	2026-01-14	7	720	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1510	2026-01-14	7	721	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1511	2026-01-14	7	722	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1512	2026-01-14	7	723	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1513	2026-01-14	7	724	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1514	2026-01-14	7	725	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1515	2026-01-14	7	726	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1516	2026-01-14	7	727	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1517	2026-01-14	7	728	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1518	2026-01-14	7	729	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1519	2026-01-14	7	730	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1520	2026-01-14	7	731	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1521	2026-01-14	7	732	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1522	2026-01-14	7	733	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1523	2026-01-14	7	734	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1524	2026-01-14	7	735	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1525	2026-01-14	7	736	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1526	2026-01-14	7	737	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1527	2026-01-14	7	738	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1528	2026-01-14	7	739	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1529	2026-01-14	7	740	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1530	2026-01-14	7	741	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1531	2026-01-14	7	742	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1532	2026-01-14	7	743	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1533	2026-01-14	7	744	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1534	2026-01-14	7	745	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1535	2026-01-14	7	746	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1536	2026-01-14	7	747	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1537	2026-01-14	7	748	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1538	2026-01-14	7	749	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1539	2026-01-14	7	750	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1540	2026-01-14	7	751	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1541	2026-01-14	7	752	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1542	2026-01-14	7	753	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1543	2026-01-14	7	754	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1544	2026-01-14	7	755	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1545	2026-01-14	7	756	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1546	2026-01-14	7	757	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1547	2026-01-14	7	758	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1548	2026-01-14	7	759	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1549	2026-01-14	7	760	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1550	2026-01-14	7	761	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1551	2026-01-14	7	762	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1552	2026-01-14	7	763	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1553	2026-01-14	7	764	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1554	2026-01-14	7	765	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1555	2026-01-14	7	766	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1556	2026-01-14	7	767	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1557	2026-01-14	7	768	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1558	2026-01-14	7	769	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1559	2026-01-14	7	770	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1560	2026-01-14	7	771	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1561	2026-01-14	7	772	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1562	2026-01-14	7	773	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1563	2026-01-14	7	774	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1564	2026-01-14	7	775	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1565	2026-01-14	7	776	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1566	2026-01-14	7	777	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1567	2026-01-14	7	778	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1568	2026-01-14	7	779	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1569	2026-01-14	7	780	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1570	2026-01-14	7	781	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1571	2026-01-14	7	782	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1572	2026-01-14	7	783	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1573	2026-01-15	0	0	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1574	2026-01-15	4	1	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1575	2026-01-15	4	2	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1576	2026-01-15	7	1	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1577	2026-01-15	7	2	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1578	2026-01-15	7	3	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1579	2026-01-15	7	4	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1580	2026-01-15	7	5	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1581	2026-01-15	7	6	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1582	2026-01-15	7	7	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1583	2026-01-15	7	8	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1584	2026-01-15	7	9	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1585	2026-01-15	7	10	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1586	2026-01-15	7	11	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1587	2026-01-15	7	12	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1588	2026-01-15	7	13	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1589	2026-01-15	7	14	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1590	2026-01-15	7	15	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1591	2026-01-15	7	16	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1592	2026-01-15	7	17	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1593	2026-01-15	7	18	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1594	2026-01-15	7	19	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1595	2026-01-15	7	20	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1596	2026-01-15	7	21	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1597	2026-01-15	7	22	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1598	2026-01-15	7	23	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1599	2026-01-15	7	24	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1600	2026-01-15	7	25	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1601	2026-01-15	7	26	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1602	2026-01-15	7	27	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1603	2026-01-15	7	28	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1604	2026-01-15	7	29	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1605	2026-01-15	7	30	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1606	2026-01-15	7	31	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1607	2026-01-15	7	32	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1608	2026-01-15	7	33	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1609	2026-01-15	7	34	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1610	2026-01-15	7	35	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1611	2026-01-15	7	36	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1612	2026-01-15	7	37	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1613	2026-01-15	7	38	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1614	2026-01-15	7	39	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1615	2026-01-15	7	40	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1616	2026-01-15	7	41	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1617	2026-01-15	7	42	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1618	2026-01-15	7	43	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1619	2026-01-15	7	44	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1620	2026-01-15	7	45	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1621	2026-01-15	7	46	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1622	2026-01-15	7	47	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1623	2026-01-15	7	48	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1624	2026-01-15	7	49	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1625	2026-01-15	7	50	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1626	2026-01-15	7	51	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1627	2026-01-15	7	52	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1628	2026-01-15	7	53	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1629	2026-01-15	7	54	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1630	2026-01-15	7	55	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1631	2026-01-15	7	56	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1632	2026-01-15	7	57	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1633	2026-01-15	7	58	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1634	2026-01-15	7	59	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1635	2026-01-15	7	60	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1636	2026-01-15	7	61	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1637	2026-01-15	7	62	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1638	2026-01-15	7	63	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1639	2026-01-15	7	64	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1640	2026-01-15	7	65	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1641	2026-01-15	7	66	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1642	2026-01-15	7	67	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1643	2026-01-15	7	68	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1644	2026-01-15	7	69	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1645	2026-01-15	7	70	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1646	2026-01-15	7	71	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1647	2026-01-15	7	72	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1648	2026-01-15	7	73	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1649	2026-01-15	7	74	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1650	2026-01-15	7	75	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1651	2026-01-15	7	76	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1652	2026-01-15	7	77	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1653	2026-01-15	7	78	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1654	2026-01-15	7	79	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1655	2026-01-15	7	80	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1656	2026-01-15	7	81	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1657	2026-01-15	7	82	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1658	2026-01-15	7	83	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1659	2026-01-15	7	84	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1660	2026-01-15	7	85	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1661	2026-01-15	7	86	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1662	2026-01-15	7	87	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1663	2026-01-15	7	88	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1664	2026-01-15	7	89	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1665	2026-01-15	7	90	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1666	2026-01-15	7	91	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1667	2026-01-15	7	92	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1668	2026-01-15	7	93	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1669	2026-01-15	7	94	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1670	2026-01-15	7	95	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1671	2026-01-15	7	96	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1672	2026-01-15	7	97	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1673	2026-01-15	7	98	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1674	2026-01-15	7	99	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1675	2026-01-15	7	100	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1676	2026-01-15	7	101	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1677	2026-01-15	7	102	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1678	2026-01-15	7	103	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1679	2026-01-15	7	104	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1680	2026-01-15	7	105	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1681	2026-01-15	7	106	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1682	2026-01-15	7	107	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1683	2026-01-15	7	108	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1684	2026-01-15	7	109	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1685	2026-01-15	7	110	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1686	2026-01-15	7	111	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1687	2026-01-15	7	112	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1688	2026-01-15	7	113	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1689	2026-01-15	7	114	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1690	2026-01-15	7	115	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1691	2026-01-15	7	116	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1692	2026-01-15	7	117	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1693	2026-01-15	7	118	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1694	2026-01-15	7	119	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1695	2026-01-15	7	120	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1696	2026-01-15	7	121	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1697	2026-01-15	7	122	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1698	2026-01-15	7	123	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1699	2026-01-15	7	124	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1700	2026-01-15	7	125	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1701	2026-01-15	7	126	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1702	2026-01-15	7	127	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1703	2026-01-15	7	128	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1704	2026-01-15	7	129	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1705	2026-01-15	7	130	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1706	2026-01-15	7	131	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1707	2026-01-15	7	132	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1708	2026-01-15	7	133	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1709	2026-01-15	7	134	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1710	2026-01-15	7	135	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1711	2026-01-15	7	136	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1712	2026-01-15	7	137	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1713	2026-01-15	7	138	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1714	2026-01-15	7	139	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1715	2026-01-15	7	140	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1716	2026-01-15	7	141	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1717	2026-01-15	7	142	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1718	2026-01-15	7	143	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1719	2026-01-15	7	144	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1720	2026-01-15	7	145	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1721	2026-01-15	7	146	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1722	2026-01-15	7	147	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1723	2026-01-15	7	148	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1724	2026-01-15	7	149	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1725	2026-01-15	7	150	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1726	2026-01-15	7	151	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1727	2026-01-15	7	152	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1728	2026-01-15	7	153	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1729	2026-01-15	7	154	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1730	2026-01-15	7	155	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1731	2026-01-15	7	156	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1732	2026-01-15	7	157	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1733	2026-01-15	7	158	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1734	2026-01-15	7	159	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1735	2026-01-15	7	160	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1736	2026-01-15	7	161	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1737	2026-01-15	7	162	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1738	2026-01-15	7	163	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1739	2026-01-15	7	164	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1740	2026-01-15	7	165	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1741	2026-01-15	7	166	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1742	2026-01-15	7	167	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1743	2026-01-15	7	168	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1744	2026-01-15	7	169	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1745	2026-01-15	7	170	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1746	2026-01-15	7	171	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1747	2026-01-15	7	172	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1748	2026-01-15	7	173	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1749	2026-01-15	7	174	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1750	2026-01-15	7	175	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1751	2026-01-15	7	176	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1752	2026-01-15	7	177	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1753	2026-01-15	7	178	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1754	2026-01-15	7	179	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1755	2026-01-15	7	180	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1756	2026-01-15	7	181	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1757	2026-01-15	7	182	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1758	2026-01-15	7	183	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1759	2026-01-15	7	184	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1760	2026-01-15	7	185	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1761	2026-01-15	7	186	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1762	2026-01-15	7	187	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1763	2026-01-15	7	188	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1764	2026-01-15	7	189	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1765	2026-01-15	7	190	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1766	2026-01-15	7	191	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1767	2026-01-15	7	192	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1768	2026-01-15	7	193	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1769	2026-01-15	7	194	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1770	2026-01-15	7	195	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1771	2026-01-15	7	196	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1772	2026-01-15	7	197	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1773	2026-01-15	7	198	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1774	2026-01-15	7	199	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1775	2026-01-15	7	200	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1776	2026-01-15	7	201	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1777	2026-01-15	7	202	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1778	2026-01-15	7	203	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1779	2026-01-15	7	204	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1780	2026-01-15	7	205	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1781	2026-01-15	7	206	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1782	2026-01-15	7	207	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1783	2026-01-15	7	208	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1784	2026-01-15	7	209	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1785	2026-01-15	7	210	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1786	2026-01-15	7	211	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1787	2026-01-15	7	212	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1788	2026-01-15	7	213	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1789	2026-01-15	7	214	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1790	2026-01-15	7	215	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1791	2026-01-15	7	216	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1792	2026-01-15	7	217	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1793	2026-01-15	7	218	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1794	2026-01-15	7	219	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1795	2026-01-15	7	220	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1796	2026-01-15	7	221	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1797	2026-01-15	7	222	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1798	2026-01-15	7	223	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1799	2026-01-15	7	224	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1800	2026-01-15	7	225	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1801	2026-01-15	7	226	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1802	2026-01-15	7	227	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1803	2026-01-15	7	228	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1804	2026-01-15	7	229	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1805	2026-01-15	7	230	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1806	2026-01-15	7	231	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1807	2026-01-15	7	232	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1808	2026-01-15	7	233	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1809	2026-01-15	7	234	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1810	2026-01-15	7	235	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1811	2026-01-15	7	236	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1812	2026-01-15	7	237	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1813	2026-01-15	7	238	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1814	2026-01-15	7	239	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1815	2026-01-15	7	240	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1816	2026-01-15	7	241	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1817	2026-01-15	7	242	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1818	2026-01-15	7	243	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1819	2026-01-15	7	244	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1820	2026-01-15	7	245	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1821	2026-01-15	7	246	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1822	2026-01-15	7	247	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1823	2026-01-15	7	248	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1824	2026-01-15	7	249	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1825	2026-01-15	7	250	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1826	2026-01-15	7	251	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1827	2026-01-15	7	252	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1828	2026-01-15	7	253	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1829	2026-01-15	7	254	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1830	2026-01-15	7	255	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1831	2026-01-15	7	256	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1832	2026-01-15	7	257	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1833	2026-01-15	7	258	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1834	2026-01-15	7	259	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1835	2026-01-15	7	260	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1836	2026-01-15	7	261	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1837	2026-01-15	7	262	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1838	2026-01-15	7	263	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1839	2026-01-15	7	264	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1840	2026-01-15	7	265	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1841	2026-01-15	7	266	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1842	2026-01-15	7	267	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1843	2026-01-15	7	268	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1844	2026-01-15	7	269	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1845	2026-01-15	7	270	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1846	2026-01-15	7	271	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1847	2026-01-15	7	272	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1848	2026-01-15	7	273	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1849	2026-01-15	7	274	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1850	2026-01-15	7	275	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1851	2026-01-15	7	276	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1852	2026-01-15	7	277	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1853	2026-01-15	7	278	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1854	2026-01-15	7	279	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1855	2026-01-15	7	280	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1856	2026-01-15	7	281	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1857	2026-01-15	7	282	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1858	2026-01-15	7	283	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1859	2026-01-15	7	284	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1860	2026-01-15	7	285	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1861	2026-01-15	7	286	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1862	2026-01-15	7	287	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1863	2026-01-15	7	288	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1864	2026-01-15	7	289	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1865	2026-01-15	7	290	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1866	2026-01-15	7	291	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1867	2026-01-15	7	292	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1868	2026-01-15	7	293	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1869	2026-01-15	7	294	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1870	2026-01-15	7	295	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1871	2026-01-15	7	296	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1872	2026-01-15	7	297	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1873	2026-01-15	7	298	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1874	2026-01-15	7	299	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1875	2026-01-15	7	300	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1876	2026-01-15	7	301	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1877	2026-01-15	7	302	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1878	2026-01-15	7	303	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1879	2026-01-15	7	304	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1880	2026-01-15	7	305	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1881	2026-01-15	7	306	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1882	2026-01-15	7	307	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1883	2026-01-15	7	308	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1884	2026-01-15	7	309	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1885	2026-01-15	7	310	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1886	2026-01-15	7	311	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1887	2026-01-15	7	312	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1888	2026-01-15	7	313	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1889	2026-01-15	7	314	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1890	2026-01-15	7	315	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1891	2026-01-15	7	316	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1892	2026-01-15	7	317	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1893	2026-01-15	7	318	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1894	2026-01-15	7	319	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1895	2026-01-15	7	320	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1896	2026-01-15	7	321	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1897	2026-01-15	7	322	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1898	2026-01-15	7	323	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1899	2026-01-15	7	324	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1900	2026-01-15	7	325	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1901	2026-01-15	7	326	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1902	2026-01-15	7	327	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1903	2026-01-15	7	328	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1904	2026-01-15	7	329	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1905	2026-01-15	7	330	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1906	2026-01-15	7	331	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1907	2026-01-15	7	332	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1908	2026-01-15	7	333	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1909	2026-01-15	7	334	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1910	2026-01-15	7	335	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1911	2026-01-15	7	336	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1912	2026-01-15	7	337	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1913	2026-01-15	7	338	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1914	2026-01-15	7	339	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1915	2026-01-15	7	340	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1916	2026-01-15	7	341	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1917	2026-01-15	7	342	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1918	2026-01-15	7	343	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1919	2026-01-15	7	344	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1920	2026-01-15	7	345	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1921	2026-01-15	7	346	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1922	2026-01-15	7	347	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1923	2026-01-15	7	348	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1924	2026-01-15	7	349	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1925	2026-01-15	7	350	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1926	2026-01-15	7	351	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1927	2026-01-15	7	352	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1928	2026-01-15	7	353	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1929	2026-01-15	7	354	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1930	2026-01-15	7	355	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1931	2026-01-15	7	356	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1932	2026-01-15	7	357	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1933	2026-01-15	7	358	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1934	2026-01-15	7	359	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1935	2026-01-15	7	360	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1936	2026-01-15	7	361	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1937	2026-01-15	7	362	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1938	2026-01-15	7	363	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1939	2026-01-15	7	364	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1940	2026-01-15	7	365	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1941	2026-01-15	7	366	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1942	2026-01-15	7	367	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1943	2026-01-15	7	368	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1944	2026-01-15	7	369	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1945	2026-01-15	7	370	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1946	2026-01-15	7	371	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1947	2026-01-15	7	372	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1948	2026-01-15	7	373	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1949	2026-01-15	7	374	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1950	2026-01-15	7	501	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1951	2026-01-15	7	375	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1952	2026-01-15	7	376	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1953	2026-01-15	7	377	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1954	2026-01-15	7	378	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1955	2026-01-15	7	379	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1956	2026-01-15	7	380	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1957	2026-01-15	7	381	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1958	2026-01-15	7	382	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1959	2026-01-15	7	383	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1960	2026-01-15	7	384	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1961	2026-01-15	7	385	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1962	2026-01-15	7	386	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1963	2026-01-15	7	387	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1964	2026-01-15	7	388	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1965	2026-01-15	7	389	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1966	2026-01-15	7	390	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1967	2026-01-15	7	391	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1968	2026-01-15	7	392	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1969	2026-01-15	7	393	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1970	2026-01-15	7	394	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1971	2026-01-15	7	395	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1972	2026-01-15	7	396	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1973	2026-01-15	7	397	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1974	2026-01-15	7	398	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1975	2026-01-15	7	399	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1976	2026-01-15	7	400	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1977	2026-01-15	7	401	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1978	2026-01-15	7	402	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1979	2026-01-15	7	403	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1980	2026-01-15	7	404	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1981	2026-01-15	7	405	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1982	2026-01-15	7	406	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1983	2026-01-15	7	407	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1984	2026-01-15	7	408	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1985	2026-01-15	7	409	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1986	2026-01-15	7	410	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1987	2026-01-15	7	411	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1988	2026-01-15	7	412	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1989	2026-01-15	7	413	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1990	2026-01-15	7	414	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1991	2026-01-15	7	415	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1992	2026-01-15	7	416	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1993	2026-01-15	7	417	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1994	2026-01-15	7	418	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1995	2026-01-15	7	419	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1996	2026-01-15	7	420	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1997	2026-01-15	7	421	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1998	2026-01-15	7	422	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1999	2026-01-15	7	423	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2000	2026-01-15	7	424	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2001	2026-01-15	7	425	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2002	2026-01-15	7	426	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2003	2026-01-15	7	427	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2004	2026-01-15	7	428	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2005	2026-01-15	7	429	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2006	2026-01-15	7	430	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2007	2026-01-15	7	431	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2008	2026-01-15	7	432	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2009	2026-01-15	7	433	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2010	2026-01-15	7	434	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2011	2026-01-15	7	435	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2012	2026-01-15	7	436	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2013	2026-01-15	7	437	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2014	2026-01-15	7	438	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2015	2026-01-15	7	439	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2016	2026-01-15	7	440	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2017	2026-01-15	7	441	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2018	2026-01-15	7	442	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2019	2026-01-15	7	443	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2020	2026-01-15	7	444	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2021	2026-01-15	7	445	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2022	2026-01-15	7	446	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2023	2026-01-15	7	447	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2024	2026-01-15	7	448	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2025	2026-01-15	7	449	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2026	2026-01-15	7	450	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2027	2026-01-15	7	451	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2028	2026-01-15	7	452	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2029	2026-01-15	7	453	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2030	2026-01-15	7	454	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2031	2026-01-15	7	455	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2032	2026-01-15	7	456	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2033	2026-01-15	7	457	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2034	2026-01-15	7	458	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2035	2026-01-15	7	459	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2036	2026-01-15	7	460	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2037	2026-01-15	7	461	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2038	2026-01-15	7	462	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2039	2026-01-15	7	463	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2040	2026-01-15	7	464	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2041	2026-01-15	7	465	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2042	2026-01-15	7	466	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2043	2026-01-15	7	467	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2044	2026-01-15	7	468	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2045	2026-01-15	7	469	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2046	2026-01-15	7	470	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2047	2026-01-15	7	471	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2048	2026-01-15	7	472	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2049	2026-01-15	7	473	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2050	2026-01-15	7	474	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2051	2026-01-15	7	475	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2052	2026-01-15	7	476	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2053	2026-01-15	7	477	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2054	2026-01-15	7	478	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2055	2026-01-15	7	479	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2056	2026-01-15	7	480	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2057	2026-01-15	7	481	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2058	2026-01-15	7	482	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2059	2026-01-15	7	483	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2060	2026-01-15	7	484	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2061	2026-01-15	7	485	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2062	2026-01-15	7	486	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2063	2026-01-15	7	487	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2064	2026-01-15	7	488	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2065	2026-01-15	7	489	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2066	2026-01-15	7	490	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2067	2026-01-15	7	491	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2068	2026-01-15	7	492	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2069	2026-01-15	7	493	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2070	2026-01-15	7	494	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2071	2026-01-15	7	495	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2072	2026-01-15	7	496	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2073	2026-01-15	7	497	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2074	2026-01-15	7	498	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2075	2026-01-15	7	499	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2076	2026-01-15	7	500	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2077	2026-01-15	7	502	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2078	2026-01-15	7	503	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2079	2026-01-15	7	504	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2080	2026-01-15	7	505	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2081	2026-01-15	7	506	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2082	2026-01-15	7	507	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2083	2026-01-15	7	508	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2084	2026-01-15	7	509	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2085	2026-01-15	7	510	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2086	2026-01-15	7	511	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2087	2026-01-15	7	512	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2088	2026-01-15	7	513	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2089	2026-01-15	7	514	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2090	2026-01-15	7	515	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2091	2026-01-15	7	516	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2092	2026-01-15	7	517	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2093	2026-01-15	7	518	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2094	2026-01-15	7	519	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2095	2026-01-15	7	520	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2096	2026-01-15	7	521	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2097	2026-01-15	7	522	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2098	2026-01-15	7	523	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2099	2026-01-15	7	524	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2100	2026-01-15	7	525	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2101	2026-01-15	7	526	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2102	2026-01-15	7	527	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2103	2026-01-15	7	528	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2104	2026-01-15	7	529	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2105	2026-01-15	7	530	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2106	2026-01-15	7	531	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2107	2026-01-15	7	532	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2108	2026-01-15	7	533	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2109	2026-01-15	7	534	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2110	2026-01-15	7	535	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2111	2026-01-15	7	536	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2112	2026-01-15	7	537	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2113	2026-01-15	7	538	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2114	2026-01-15	7	539	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2115	2026-01-15	7	540	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2116	2026-01-15	7	541	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2117	2026-01-15	7	542	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2118	2026-01-15	7	543	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2119	2026-01-15	7	544	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2120	2026-01-15	7	545	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2121	2026-01-15	7	546	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2122	2026-01-15	7	547	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2123	2026-01-15	7	548	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2124	2026-01-15	7	549	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2125	2026-01-15	7	550	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2126	2026-01-15	7	551	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2127	2026-01-15	7	552	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2128	2026-01-15	7	553	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2129	2026-01-15	7	554	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2130	2026-01-15	7	555	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2131	2026-01-15	7	556	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2132	2026-01-15	7	557	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2133	2026-01-15	7	558	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2134	2026-01-15	7	559	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2135	2026-01-15	7	560	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2136	2026-01-15	7	561	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2137	2026-01-15	7	562	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2138	2026-01-15	7	563	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2139	2026-01-15	7	564	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2140	2026-01-15	7	565	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2141	2026-01-15	7	566	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2142	2026-01-15	7	567	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2143	2026-01-15	7	568	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2144	2026-01-15	7	569	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2145	2026-01-15	7	570	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2146	2026-01-15	7	571	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2147	2026-01-15	7	572	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2148	2026-01-15	7	573	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2149	2026-01-15	7	574	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2150	2026-01-15	7	575	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2151	2026-01-15	7	576	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2152	2026-01-15	7	577	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2153	2026-01-15	7	578	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2154	2026-01-15	7	579	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2155	2026-01-15	7	580	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2156	2026-01-15	7	581	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2157	2026-01-15	7	582	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2158	2026-01-15	7	583	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2159	2026-01-15	7	584	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2160	2026-01-15	7	585	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2161	2026-01-15	7	586	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2162	2026-01-15	7	587	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2163	2026-01-15	7	588	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2164	2026-01-15	7	589	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2165	2026-01-15	7	590	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2166	2026-01-15	7	591	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2167	2026-01-15	7	592	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2168	2026-01-15	7	593	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2169	2026-01-15	7	594	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2170	2026-01-15	7	595	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2171	2026-01-15	7	596	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2172	2026-01-15	7	597	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2173	2026-01-15	7	598	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2174	2026-01-15	7	599	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2175	2026-01-15	7	600	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2176	2026-01-15	7	601	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2177	2026-01-15	7	602	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2178	2026-01-15	7	603	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2179	2026-01-15	7	604	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2180	2026-01-15	7	605	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2181	2026-01-15	7	606	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2182	2026-01-15	7	607	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2183	2026-01-15	7	608	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2184	2026-01-15	7	609	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2185	2026-01-15	7	610	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2186	2026-01-15	7	611	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2187	2026-01-15	7	612	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2188	2026-01-15	7	613	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2189	2026-01-15	7	614	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2190	2026-01-15	7	615	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2191	2026-01-15	7	616	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2192	2026-01-15	7	617	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2193	2026-01-15	7	618	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2194	2026-01-15	7	619	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2195	2026-01-15	7	620	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2196	2026-01-15	7	621	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2197	2026-01-15	7	622	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2198	2026-01-15	7	623	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2199	2026-01-15	7	624	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2200	2026-01-15	7	625	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2201	2026-01-15	7	626	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2202	2026-01-15	7	627	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2203	2026-01-15	7	628	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2204	2026-01-15	7	629	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2205	2026-01-15	7	630	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2206	2026-01-15	7	631	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2207	2026-01-15	7	632	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2208	2026-01-15	7	633	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2209	2026-01-15	7	634	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2210	2026-01-15	7	635	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2211	2026-01-15	7	636	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2212	2026-01-15	7	637	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2213	2026-01-15	7	638	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2214	2026-01-15	7	639	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2215	2026-01-15	7	640	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2216	2026-01-15	7	641	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2217	2026-01-15	7	642	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2218	2026-01-15	7	643	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2219	2026-01-15	7	644	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2220	2026-01-15	7	645	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2221	2026-01-15	7	646	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2222	2026-01-15	7	647	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2223	2026-01-15	7	648	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2224	2026-01-15	7	649	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2225	2026-01-15	7	650	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2226	2026-01-15	7	651	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2227	2026-01-15	7	652	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2228	2026-01-15	7	653	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2229	2026-01-15	7	654	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2230	2026-01-15	7	655	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2231	2026-01-15	7	656	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2232	2026-01-15	7	657	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2233	2026-01-15	7	658	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2234	2026-01-15	7	659	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2235	2026-01-15	7	660	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2236	2026-01-15	7	661	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2237	2026-01-15	7	662	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2238	2026-01-15	7	663	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2239	2026-01-15	7	664	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2240	2026-01-15	7	665	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2241	2026-01-15	7	666	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2242	2026-01-15	7	667	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2243	2026-01-15	7	668	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2244	2026-01-15	7	669	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2245	2026-01-15	7	670	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2246	2026-01-15	7	671	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2247	2026-01-15	7	672	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2248	2026-01-15	7	673	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2249	2026-01-15	7	674	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2250	2026-01-15	7	675	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2251	2026-01-15	7	676	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2252	2026-01-15	7	677	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2253	2026-01-15	7	678	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2254	2026-01-15	7	679	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2255	2026-01-15	7	680	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2256	2026-01-15	7	681	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2257	2026-01-15	7	682	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2258	2026-01-15	7	683	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2259	2026-01-15	7	684	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2260	2026-01-15	7	685	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2261	2026-01-15	7	686	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2262	2026-01-15	7	687	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2263	2026-01-15	7	688	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2264	2026-01-15	7	689	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2265	2026-01-15	7	690	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2266	2026-01-15	7	691	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2267	2026-01-15	7	692	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2268	2026-01-15	7	693	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2269	2026-01-15	7	694	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2270	2026-01-15	7	695	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2271	2026-01-15	7	696	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2272	2026-01-15	7	697	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2273	2026-01-15	7	698	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2274	2026-01-15	7	699	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2275	2026-01-15	7	700	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2276	2026-01-15	7	701	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2277	2026-01-15	7	702	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2278	2026-01-15	7	703	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2279	2026-01-15	7	704	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2280	2026-01-15	7	705	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2281	2026-01-15	7	706	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2282	2026-01-15	7	707	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2283	2026-01-15	7	708	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2284	2026-01-15	7	709	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2285	2026-01-15	7	710	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2286	2026-01-15	7	711	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2287	2026-01-15	7	712	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2288	2026-01-15	7	713	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2289	2026-01-15	7	714	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2290	2026-01-15	7	715	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2291	2026-01-15	7	716	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2292	2026-01-15	7	717	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2293	2026-01-15	7	718	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2294	2026-01-15	7	719	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2295	2026-01-15	7	720	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2296	2026-01-15	7	721	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2297	2026-01-15	7	722	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2298	2026-01-15	7	723	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2299	2026-01-15	7	724	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2300	2026-01-15	7	725	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2301	2026-01-15	7	726	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2302	2026-01-15	7	727	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2303	2026-01-15	7	728	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2304	2026-01-15	7	729	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2305	2026-01-15	7	730	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2306	2026-01-15	7	731	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2307	2026-01-15	7	732	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2308	2026-01-15	7	733	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2309	2026-01-15	7	734	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2310	2026-01-15	7	735	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2311	2026-01-15	7	736	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2312	2026-01-15	7	737	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2313	2026-01-15	7	738	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2314	2026-01-15	7	739	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2315	2026-01-15	7	740	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2316	2026-01-15	7	741	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2317	2026-01-15	7	742	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2318	2026-01-15	7	743	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2319	2026-01-15	7	744	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2320	2026-01-15	7	745	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2321	2026-01-15	7	746	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2322	2026-01-15	7	747	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2323	2026-01-15	7	748	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2324	2026-01-15	7	749	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2325	2026-01-15	7	750	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2326	2026-01-15	7	751	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2327	2026-01-15	7	752	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2328	2026-01-15	7	753	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2329	2026-01-15	7	754	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2330	2026-01-15	7	755	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2331	2026-01-15	7	756	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2332	2026-01-15	7	757	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2333	2026-01-15	7	758	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2334	2026-01-15	7	759	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2335	2026-01-15	7	760	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2336	2026-01-15	7	761	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2337	2026-01-15	7	762	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2338	2026-01-15	7	763	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2339	2026-01-15	7	764	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2340	2026-01-15	7	765	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2341	2026-01-15	7	766	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2342	2026-01-15	7	767	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2343	2026-01-15	7	768	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2344	2026-01-15	7	769	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2345	2026-01-15	7	770	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2346	2026-01-15	7	771	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2347	2026-01-15	7	772	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2348	2026-01-15	7	773	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2349	2026-01-15	7	774	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2350	2026-01-15	7	775	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2351	2026-01-15	7	776	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2352	2026-01-15	7	777	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2353	2026-01-15	7	778	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2354	2026-01-15	7	779	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2355	2026-01-15	7	780	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2356	2026-01-15	7	781	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2357	2026-01-15	7	782	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2358	2026-01-15	7	783	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2359	2026-01-16	0	0	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2360	2026-01-16	4	1	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2361	2026-01-16	4	2	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2362	2026-01-16	7	1	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2363	2026-01-16	7	2	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2364	2026-01-16	7	3	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2365	2026-01-16	7	4	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2366	2026-01-16	7	5	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2367	2026-01-16	7	6	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2368	2026-01-16	7	7	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2369	2026-01-16	7	8	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2370	2026-01-16	7	9	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2371	2026-01-16	7	10	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2372	2026-01-16	7	11	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2373	2026-01-16	7	12	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2374	2026-01-16	7	13	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2375	2026-01-16	7	14	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2376	2026-01-16	7	15	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2377	2026-01-16	7	16	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2378	2026-01-16	7	17	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2379	2026-01-16	7	18	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2380	2026-01-16	7	19	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2381	2026-01-16	7	20	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2382	2026-01-16	7	21	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2383	2026-01-16	7	22	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2384	2026-01-16	7	23	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2385	2026-01-16	7	24	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2386	2026-01-16	7	25	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2387	2026-01-16	7	26	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2388	2026-01-16	7	27	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2389	2026-01-16	7	28	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2390	2026-01-16	7	29	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2391	2026-01-16	7	30	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2392	2026-01-16	7	31	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2393	2026-01-16	7	32	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2394	2026-01-16	7	33	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2395	2026-01-16	7	34	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2396	2026-01-16	7	35	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2397	2026-01-16	7	36	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2398	2026-01-16	7	37	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2399	2026-01-16	7	38	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2400	2026-01-16	7	39	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2401	2026-01-16	7	40	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2402	2026-01-16	7	41	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2403	2026-01-16	7	42	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2404	2026-01-16	7	43	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2405	2026-01-16	7	44	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2406	2026-01-16	7	45	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2407	2026-01-16	7	46	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2408	2026-01-16	7	47	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2409	2026-01-16	7	48	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2410	2026-01-16	7	49	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2411	2026-01-16	7	50	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2412	2026-01-16	7	51	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2413	2026-01-16	7	52	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2414	2026-01-16	7	53	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2415	2026-01-16	7	54	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2416	2026-01-16	7	55	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2417	2026-01-16	7	56	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2418	2026-01-16	7	57	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2419	2026-01-16	7	58	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2420	2026-01-16	7	59	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2421	2026-01-16	7	60	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2422	2026-01-16	7	61	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2423	2026-01-16	7	62	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2424	2026-01-16	7	63	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2425	2026-01-16	7	64	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2426	2026-01-16	7	65	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2427	2026-01-16	7	66	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2428	2026-01-16	7	67	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2429	2026-01-16	7	68	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2430	2026-01-16	7	69	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2431	2026-01-16	7	70	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2432	2026-01-16	7	71	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2433	2026-01-16	7	72	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2434	2026-01-16	7	73	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2435	2026-01-16	7	74	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2436	2026-01-16	7	75	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2437	2026-01-16	7	76	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2438	2026-01-16	7	77	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2439	2026-01-16	7	78	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2440	2026-01-16	7	79	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2441	2026-01-16	7	80	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2442	2026-01-16	7	81	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2443	2026-01-16	7	82	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2444	2026-01-16	7	83	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2445	2026-01-16	7	84	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2446	2026-01-16	7	85	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2447	2026-01-16	7	86	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2448	2026-01-16	7	87	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2449	2026-01-16	7	88	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2450	2026-01-16	7	89	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2451	2026-01-16	7	90	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2452	2026-01-16	7	91	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2453	2026-01-16	7	92	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2454	2026-01-16	7	93	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2455	2026-01-16	7	94	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2456	2026-01-16	7	95	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2457	2026-01-16	7	96	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2458	2026-01-16	7	97	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2459	2026-01-16	7	98	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2460	2026-01-16	7	99	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2461	2026-01-16	7	100	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2462	2026-01-16	7	101	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2463	2026-01-16	7	102	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2464	2026-01-16	7	103	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2465	2026-01-16	7	104	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2466	2026-01-16	7	105	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2467	2026-01-16	7	106	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2468	2026-01-16	7	107	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2469	2026-01-16	7	108	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2470	2026-01-16	7	109	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2471	2026-01-16	7	110	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2472	2026-01-16	7	111	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2473	2026-01-16	7	112	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2474	2026-01-16	7	113	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2475	2026-01-16	7	114	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2476	2026-01-16	7	115	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2477	2026-01-16	7	116	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2478	2026-01-16	7	117	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2479	2026-01-16	7	118	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2480	2026-01-16	7	119	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2481	2026-01-16	7	120	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2482	2026-01-16	7	121	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2483	2026-01-16	7	122	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2484	2026-01-16	7	123	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2485	2026-01-16	7	124	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2486	2026-01-16	7	125	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2487	2026-01-16	7	126	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2488	2026-01-16	7	127	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2489	2026-01-16	7	128	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2490	2026-01-16	7	129	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2491	2026-01-16	7	130	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2492	2026-01-16	7	131	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2493	2026-01-16	7	132	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2494	2026-01-16	7	133	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2495	2026-01-16	7	134	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2496	2026-01-16	7	135	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2497	2026-01-16	7	136	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2498	2026-01-16	7	137	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2499	2026-01-16	7	138	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2500	2026-01-16	7	139	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2501	2026-01-16	7	140	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2502	2026-01-16	7	141	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2503	2026-01-16	7	142	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2504	2026-01-16	7	143	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2505	2026-01-16	7	144	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2506	2026-01-16	7	145	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2507	2026-01-16	7	146	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2508	2026-01-16	7	147	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2509	2026-01-16	7	148	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2510	2026-01-16	7	149	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2511	2026-01-16	7	150	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2512	2026-01-16	7	151	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2513	2026-01-16	7	152	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2514	2026-01-16	7	153	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2515	2026-01-16	7	154	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2516	2026-01-16	7	155	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2517	2026-01-16	7	156	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2518	2026-01-16	7	157	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2519	2026-01-16	7	158	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2520	2026-01-16	7	159	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2521	2026-01-16	7	160	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2522	2026-01-16	7	161	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2523	2026-01-16	7	162	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2524	2026-01-16	7	163	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2525	2026-01-16	7	164	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2526	2026-01-16	7	165	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2527	2026-01-16	7	166	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2528	2026-01-16	7	167	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2529	2026-01-16	7	168	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2530	2026-01-16	7	169	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2531	2026-01-16	7	170	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2532	2026-01-16	7	171	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2533	2026-01-16	7	172	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2534	2026-01-16	7	173	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2535	2026-01-16	7	174	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2536	2026-01-16	7	175	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2537	2026-01-16	7	176	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2538	2026-01-16	7	177	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2539	2026-01-16	7	178	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2540	2026-01-16	7	179	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2541	2026-01-16	7	180	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2542	2026-01-16	7	181	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2543	2026-01-16	7	182	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2544	2026-01-16	7	183	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2545	2026-01-16	7	184	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2546	2026-01-16	7	185	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2547	2026-01-16	7	186	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2548	2026-01-16	7	187	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2549	2026-01-16	7	188	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2550	2026-01-16	7	189	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2551	2026-01-16	7	190	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2552	2026-01-16	7	191	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2553	2026-01-16	7	192	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2554	2026-01-16	7	193	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2555	2026-01-16	7	194	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2556	2026-01-16	7	195	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2557	2026-01-16	7	196	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2558	2026-01-16	7	197	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2559	2026-01-16	7	198	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2560	2026-01-16	7	199	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2561	2026-01-16	7	200	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2562	2026-01-16	7	201	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2563	2026-01-16	7	202	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2564	2026-01-16	7	203	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2565	2026-01-16	7	204	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2566	2026-01-16	7	205	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2567	2026-01-16	7	206	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2568	2026-01-16	7	207	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2569	2026-01-16	7	208	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2570	2026-01-16	7	209	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2571	2026-01-16	7	210	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2572	2026-01-16	7	211	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2573	2026-01-16	7	212	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2574	2026-01-16	7	213	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2575	2026-01-16	7	214	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2576	2026-01-16	7	215	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2577	2026-01-16	7	216	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2578	2026-01-16	7	217	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2579	2026-01-16	7	218	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2580	2026-01-16	7	219	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2581	2026-01-16	7	220	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2582	2026-01-16	7	221	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2583	2026-01-16	7	222	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2584	2026-01-16	7	223	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2585	2026-01-16	7	224	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2586	2026-01-16	7	225	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2587	2026-01-16	7	226	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2588	2026-01-16	7	227	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2589	2026-01-16	7	228	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2590	2026-01-16	7	229	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2591	2026-01-16	7	230	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2592	2026-01-16	7	231	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2593	2026-01-16	7	232	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2594	2026-01-16	7	233	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2595	2026-01-16	7	234	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2596	2026-01-16	7	235	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2597	2026-01-16	7	236	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2598	2026-01-16	7	237	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2599	2026-01-16	7	238	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2600	2026-01-16	7	239	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2601	2026-01-16	7	240	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2602	2026-01-16	7	241	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2603	2026-01-16	7	242	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2604	2026-01-16	7	243	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2605	2026-01-16	7	244	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2606	2026-01-16	7	245	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2607	2026-01-16	7	246	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2608	2026-01-16	7	247	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2609	2026-01-16	7	248	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2610	2026-01-16	7	249	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2611	2026-01-16	7	250	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2612	2026-01-16	7	251	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2613	2026-01-16	7	252	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2614	2026-01-16	7	253	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2615	2026-01-16	7	254	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2616	2026-01-16	7	255	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2617	2026-01-16	7	256	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2618	2026-01-16	7	257	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2619	2026-01-16	7	258	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2620	2026-01-16	7	259	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2621	2026-01-16	7	260	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2622	2026-01-16	7	261	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2623	2026-01-16	7	262	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2624	2026-01-16	7	263	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2625	2026-01-16	7	264	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2626	2026-01-16	7	265	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2627	2026-01-16	7	266	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2628	2026-01-16	7	267	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2629	2026-01-16	7	268	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2630	2026-01-16	7	269	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2631	2026-01-16	7	270	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2632	2026-01-16	7	271	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2633	2026-01-16	7	272	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2634	2026-01-16	7	273	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2635	2026-01-16	7	274	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2636	2026-01-16	7	275	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2637	2026-01-16	7	276	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2638	2026-01-16	7	277	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2639	2026-01-16	7	278	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2640	2026-01-16	7	279	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2641	2026-01-16	7	280	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2642	2026-01-16	7	281	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2643	2026-01-16	7	282	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2644	2026-01-16	7	283	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2645	2026-01-16	7	284	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2646	2026-01-16	7	285	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2647	2026-01-16	7	286	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2648	2026-01-16	7	287	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2649	2026-01-16	7	288	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2650	2026-01-16	7	289	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2651	2026-01-16	7	290	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2652	2026-01-16	7	291	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2653	2026-01-16	7	292	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2654	2026-01-16	7	293	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2655	2026-01-16	7	294	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2656	2026-01-16	7	295	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2657	2026-01-16	7	296	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2658	2026-01-16	7	297	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2659	2026-01-16	7	298	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2660	2026-01-16	7	299	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2661	2026-01-16	7	300	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2662	2026-01-16	7	301	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2663	2026-01-16	7	302	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2664	2026-01-16	7	303	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2665	2026-01-16	7	304	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2666	2026-01-16	7	305	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2667	2026-01-16	7	306	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2668	2026-01-16	7	307	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2669	2026-01-16	7	308	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2670	2026-01-16	7	309	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2671	2026-01-16	7	310	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2672	2026-01-16	7	311	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2673	2026-01-16	7	312	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2674	2026-01-16	7	313	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2675	2026-01-16	7	314	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2676	2026-01-16	7	315	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2677	2026-01-16	7	316	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2678	2026-01-16	7	317	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2679	2026-01-16	7	318	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2680	2026-01-16	7	319	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2681	2026-01-16	7	320	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2682	2026-01-16	7	321	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2683	2026-01-16	7	322	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2684	2026-01-16	7	323	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2685	2026-01-16	7	324	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2686	2026-01-16	7	325	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2687	2026-01-16	7	326	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2688	2026-01-16	7	327	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2689	2026-01-16	7	328	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2690	2026-01-16	7	329	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2691	2026-01-16	7	330	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2692	2026-01-16	7	331	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2693	2026-01-16	7	332	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2694	2026-01-16	7	333	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2695	2026-01-16	7	334	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2696	2026-01-16	7	335	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2697	2026-01-16	7	336	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2698	2026-01-16	7	337	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2699	2026-01-16	7	338	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2700	2026-01-16	7	339	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2701	2026-01-16	7	340	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2702	2026-01-16	7	341	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2703	2026-01-16	7	342	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2704	2026-01-16	7	343	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2705	2026-01-16	7	344	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2706	2026-01-16	7	345	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2707	2026-01-16	7	346	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2708	2026-01-16	7	347	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2709	2026-01-16	7	348	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2710	2026-01-16	7	349	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2711	2026-01-16	7	350	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2712	2026-01-16	7	351	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2713	2026-01-16	7	352	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2714	2026-01-16	7	353	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2715	2026-01-16	7	354	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2716	2026-01-16	7	355	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2717	2026-01-16	7	356	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2718	2026-01-16	7	357	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2719	2026-01-16	7	358	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2720	2026-01-16	7	359	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2721	2026-01-16	7	360	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2722	2026-01-16	7	361	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2723	2026-01-16	7	362	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2724	2026-01-16	7	363	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2725	2026-01-16	7	364	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2726	2026-01-16	7	365	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2727	2026-01-16	7	366	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2728	2026-01-16	7	367	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2729	2026-01-16	7	368	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2730	2026-01-16	7	369	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2731	2026-01-16	7	370	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2732	2026-01-16	7	371	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2733	2026-01-16	7	372	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2734	2026-01-16	7	373	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2735	2026-01-16	7	374	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2736	2026-01-16	7	501	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2737	2026-01-16	7	375	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2738	2026-01-16	7	376	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2739	2026-01-16	7	377	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2740	2026-01-16	7	378	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2741	2026-01-16	7	379	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2742	2026-01-16	7	380	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2743	2026-01-16	7	381	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2744	2026-01-16	7	382	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2745	2026-01-16	7	383	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2746	2026-01-16	7	384	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2747	2026-01-16	7	385	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2748	2026-01-16	7	386	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2749	2026-01-16	7	387	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2750	2026-01-16	7	388	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2751	2026-01-16	7	389	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2752	2026-01-16	7	390	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2753	2026-01-16	7	391	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2754	2026-01-16	7	392	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2755	2026-01-16	7	393	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2756	2026-01-16	7	394	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2757	2026-01-16	7	395	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2758	2026-01-16	7	396	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2759	2026-01-16	7	397	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2760	2026-01-16	7	398	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2761	2026-01-16	7	399	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2762	2026-01-16	7	400	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2763	2026-01-16	7	401	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2764	2026-01-16	7	402	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2765	2026-01-16	7	403	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2766	2026-01-16	7	404	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2767	2026-01-16	7	405	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2768	2026-01-16	7	406	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2769	2026-01-16	7	407	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2770	2026-01-16	7	408	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2771	2026-01-16	7	409	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2772	2026-01-16	7	410	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2773	2026-01-16	7	411	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2774	2026-01-16	7	412	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2775	2026-01-16	7	413	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2776	2026-01-16	7	414	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2777	2026-01-16	7	415	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2778	2026-01-16	7	416	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2779	2026-01-16	7	417	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2780	2026-01-16	7	418	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2781	2026-01-16	7	419	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2782	2026-01-16	7	420	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2783	2026-01-16	7	421	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2784	2026-01-16	7	422	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2785	2026-01-16	7	423	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2786	2026-01-16	7	424	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2787	2026-01-16	7	425	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2788	2026-01-16	7	426	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2789	2026-01-16	7	427	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2790	2026-01-16	7	428	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2791	2026-01-16	7	429	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2792	2026-01-16	7	430	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2793	2026-01-16	7	431	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2794	2026-01-16	7	432	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2795	2026-01-16	7	433	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2796	2026-01-16	7	434	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2797	2026-01-16	7	435	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2798	2026-01-16	7	436	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2799	2026-01-16	7	437	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2800	2026-01-16	7	438	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2801	2026-01-16	7	439	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2802	2026-01-16	7	440	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2803	2026-01-16	7	441	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2804	2026-01-16	7	442	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2805	2026-01-16	7	443	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2806	2026-01-16	7	444	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2807	2026-01-16	7	445	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2808	2026-01-16	7	446	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2809	2026-01-16	7	447	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2810	2026-01-16	7	448	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2811	2026-01-16	7	449	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2812	2026-01-16	7	450	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2813	2026-01-16	7	451	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2814	2026-01-16	7	452	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2815	2026-01-16	7	453	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2816	2026-01-16	7	454	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2817	2026-01-16	7	455	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2818	2026-01-16	7	456	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2819	2026-01-16	7	457	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2820	2026-01-16	7	458	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2821	2026-01-16	7	459	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2822	2026-01-16	7	460	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2823	2026-01-16	7	461	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2824	2026-01-16	7	462	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2825	2026-01-16	7	463	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2826	2026-01-16	7	464	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2827	2026-01-16	7	465	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2828	2026-01-16	7	466	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2829	2026-01-16	7	467	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2830	2026-01-16	7	468	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2831	2026-01-16	7	469	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2832	2026-01-16	7	470	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2833	2026-01-16	7	471	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2834	2026-01-16	7	472	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2835	2026-01-16	7	473	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2836	2026-01-16	7	474	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2837	2026-01-16	7	475	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2838	2026-01-16	7	476	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2839	2026-01-16	7	477	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2840	2026-01-16	7	478	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2841	2026-01-16	7	479	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2842	2026-01-16	7	480	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2843	2026-01-16	7	481	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2844	2026-01-16	7	482	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2845	2026-01-16	7	483	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2846	2026-01-16	7	484	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2847	2026-01-16	7	485	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2848	2026-01-16	7	486	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2849	2026-01-16	7	487	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2850	2026-01-16	7	488	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2851	2026-01-16	7	489	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2852	2026-01-16	7	490	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2853	2026-01-16	7	491	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2854	2026-01-16	7	492	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2855	2026-01-16	7	493	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2856	2026-01-16	7	494	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2857	2026-01-16	7	495	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2858	2026-01-16	7	496	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2859	2026-01-16	7	497	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2860	2026-01-16	7	498	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2861	2026-01-16	7	499	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2862	2026-01-16	7	500	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2863	2026-01-16	7	502	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2864	2026-01-16	7	503	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2865	2026-01-16	7	504	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2866	2026-01-16	7	505	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2867	2026-01-16	7	506	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2868	2026-01-16	7	507	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2869	2026-01-16	7	508	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2870	2026-01-16	7	509	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2871	2026-01-16	7	510	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2872	2026-01-16	7	511	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2873	2026-01-16	7	512	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2874	2026-01-16	7	513	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2875	2026-01-16	7	514	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2876	2026-01-16	7	515	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2877	2026-01-16	7	516	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2878	2026-01-16	7	517	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2879	2026-01-16	7	518	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2880	2026-01-16	7	519	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2881	2026-01-16	7	520	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2882	2026-01-16	7	521	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2883	2026-01-16	7	522	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2884	2026-01-16	7	523	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2885	2026-01-16	7	524	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2886	2026-01-16	7	525	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2887	2026-01-16	7	526	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2888	2026-01-16	7	527	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2889	2026-01-16	7	528	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2890	2026-01-16	7	529	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2891	2026-01-16	7	530	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2892	2026-01-16	7	531	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2893	2026-01-16	7	532	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2894	2026-01-16	7	533	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2895	2026-01-16	7	534	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2896	2026-01-16	7	535	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2897	2026-01-16	7	536	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2898	2026-01-16	7	537	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2899	2026-01-16	7	538	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2900	2026-01-16	7	539	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2901	2026-01-16	7	540	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2902	2026-01-16	7	541	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2903	2026-01-16	7	542	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2904	2026-01-16	7	543	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2905	2026-01-16	7	544	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2906	2026-01-16	7	545	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2907	2026-01-16	7	546	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2908	2026-01-16	7	547	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2909	2026-01-16	7	548	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2910	2026-01-16	7	549	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2911	2026-01-16	7	550	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2912	2026-01-16	7	551	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2913	2026-01-16	7	552	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2914	2026-01-16	7	553	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2915	2026-01-16	7	554	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2916	2026-01-16	7	555	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2917	2026-01-16	7	556	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2918	2026-01-16	7	557	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2919	2026-01-16	7	558	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2920	2026-01-16	7	559	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2921	2026-01-16	7	560	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2922	2026-01-16	7	561	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2923	2026-01-16	7	562	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2924	2026-01-16	7	563	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2925	2026-01-16	7	564	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2926	2026-01-16	7	565	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2927	2026-01-16	7	566	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2928	2026-01-16	7	567	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2929	2026-01-16	7	568	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2930	2026-01-16	7	569	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2931	2026-01-16	7	570	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2932	2026-01-16	7	571	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2933	2026-01-16	7	572	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2934	2026-01-16	7	573	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2935	2026-01-16	7	574	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2936	2026-01-16	7	575	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2937	2026-01-16	7	576	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2938	2026-01-16	7	577	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2939	2026-01-16	7	578	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2940	2026-01-16	7	579	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2941	2026-01-16	7	580	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2942	2026-01-16	7	581	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2943	2026-01-16	7	582	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2944	2026-01-16	7	583	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2945	2026-01-16	7	584	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2946	2026-01-16	7	585	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2947	2026-01-16	7	586	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2948	2026-01-16	7	587	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2949	2026-01-16	7	588	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2950	2026-01-16	7	589	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2951	2026-01-16	7	590	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2952	2026-01-16	7	591	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2953	2026-01-16	7	592	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2954	2026-01-16	7	593	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2955	2026-01-16	7	594	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2956	2026-01-16	7	595	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2957	2026-01-16	7	596	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2958	2026-01-16	7	597	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2959	2026-01-16	7	598	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2960	2026-01-16	7	599	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2961	2026-01-16	7	600	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2962	2026-01-16	7	601	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2963	2026-01-16	7	602	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2964	2026-01-16	7	603	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2965	2026-01-16	7	604	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2966	2026-01-16	7	605	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2967	2026-01-16	7	606	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2968	2026-01-16	7	607	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2969	2026-01-16	7	608	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2970	2026-01-16	7	609	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2971	2026-01-16	7	610	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2972	2026-01-16	7	611	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2973	2026-01-16	7	612	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2974	2026-01-16	7	613	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2975	2026-01-16	7	614	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2976	2026-01-16	7	615	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2977	2026-01-16	7	616	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2978	2026-01-16	7	617	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2979	2026-01-16	7	618	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2980	2026-01-16	7	619	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2981	2026-01-16	7	620	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2982	2026-01-16	7	621	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2983	2026-01-16	7	622	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2984	2026-01-16	7	623	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2985	2026-01-16	7	624	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2986	2026-01-16	7	625	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2987	2026-01-16	7	626	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2988	2026-01-16	7	627	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2989	2026-01-16	7	628	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2990	2026-01-16	7	629	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2991	2026-01-16	7	630	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2992	2026-01-16	7	631	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2993	2026-01-16	7	632	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2994	2026-01-16	7	633	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2995	2026-01-16	7	634	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2996	2026-01-16	7	635	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2997	2026-01-16	7	636	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2998	2026-01-16	7	637	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2999	2026-01-16	7	638	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3000	2026-01-16	7	639	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3001	2026-01-16	7	640	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3002	2026-01-16	7	641	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3003	2026-01-16	7	642	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3004	2026-01-16	7	643	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3005	2026-01-16	7	644	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3006	2026-01-16	7	645	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3007	2026-01-16	7	646	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3008	2026-01-16	7	647	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3009	2026-01-16	7	648	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3010	2026-01-16	7	649	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3011	2026-01-16	7	650	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3012	2026-01-16	7	651	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3013	2026-01-16	7	652	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3014	2026-01-16	7	653	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3015	2026-01-16	7	654	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3016	2026-01-16	7	655	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3017	2026-01-16	7	656	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3018	2026-01-16	7	657	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3019	2026-01-16	7	658	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3020	2026-01-16	7	659	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3021	2026-01-16	7	660	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3022	2026-01-16	7	661	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3023	2026-01-16	7	662	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3024	2026-01-16	7	663	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3025	2026-01-16	7	664	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3026	2026-01-16	7	665	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3027	2026-01-16	7	666	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3028	2026-01-16	7	667	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3029	2026-01-16	7	668	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3030	2026-01-16	7	669	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3031	2026-01-16	7	670	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3032	2026-01-16	7	671	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3033	2026-01-16	7	672	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3034	2026-01-16	7	673	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3035	2026-01-16	7	674	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3036	2026-01-16	7	675	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3037	2026-01-16	7	676	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3038	2026-01-16	7	677	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3039	2026-01-16	7	678	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3040	2026-01-16	7	679	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3041	2026-01-16	7	680	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3042	2026-01-16	7	681	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3043	2026-01-16	7	682	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3044	2026-01-16	7	683	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3045	2026-01-16	7	684	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3046	2026-01-16	7	685	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3047	2026-01-16	7	686	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3048	2026-01-16	7	687	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3049	2026-01-16	7	688	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3050	2026-01-16	7	689	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3051	2026-01-16	7	690	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3052	2026-01-16	7	691	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3053	2026-01-16	7	692	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3054	2026-01-16	7	693	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3055	2026-01-16	7	694	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3056	2026-01-16	7	695	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3057	2026-01-16	7	696	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3058	2026-01-16	7	697	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3059	2026-01-16	7	698	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3060	2026-01-16	7	699	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3061	2026-01-16	7	700	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3062	2026-01-16	7	701	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3063	2026-01-16	7	702	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3064	2026-01-16	7	703	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3065	2026-01-16	7	704	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3066	2026-01-16	7	705	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3067	2026-01-16	7	706	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3068	2026-01-16	7	707	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3069	2026-01-16	7	708	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3070	2026-01-16	7	709	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3071	2026-01-16	7	710	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3072	2026-01-16	7	711	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3073	2026-01-16	7	712	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3074	2026-01-16	7	713	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3075	2026-01-16	7	714	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3076	2026-01-16	7	715	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3077	2026-01-16	7	716	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3078	2026-01-16	7	717	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3079	2026-01-16	7	718	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3080	2026-01-16	7	719	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3081	2026-01-16	7	720	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3082	2026-01-16	7	721	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3083	2026-01-16	7	722	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3084	2026-01-16	7	723	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3085	2026-01-16	7	724	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3086	2026-01-16	7	725	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3087	2026-01-16	7	726	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3088	2026-01-16	7	727	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3089	2026-01-16	7	728	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3090	2026-01-16	7	729	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3091	2026-01-16	7	730	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3092	2026-01-16	7	731	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3093	2026-01-16	7	732	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3094	2026-01-16	7	733	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3095	2026-01-16	7	734	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3096	2026-01-16	7	735	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3097	2026-01-16	7	736	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3098	2026-01-16	7	737	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3099	2026-01-16	7	738	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3100	2026-01-16	7	739	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3101	2026-01-16	7	740	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3102	2026-01-16	7	741	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3103	2026-01-16	7	742	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3104	2026-01-16	7	743	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3105	2026-01-16	7	744	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3106	2026-01-16	7	745	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3107	2026-01-16	7	746	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3108	2026-01-16	7	747	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3109	2026-01-16	7	748	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3110	2026-01-16	7	749	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3111	2026-01-16	7	750	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3112	2026-01-16	7	751	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3113	2026-01-16	7	752	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3114	2026-01-16	7	753	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3115	2026-01-16	7	754	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3116	2026-01-16	7	755	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3117	2026-01-16	7	756	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3118	2026-01-16	7	757	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3119	2026-01-16	7	758	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3120	2026-01-16	7	759	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3121	2026-01-16	7	760	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3122	2026-01-16	7	761	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3123	2026-01-16	7	762	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3124	2026-01-16	7	763	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3125	2026-01-16	7	764	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3126	2026-01-16	7	765	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3127	2026-01-16	7	766	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3128	2026-01-16	7	767	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3129	2026-01-16	7	768	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3130	2026-01-16	7	769	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3131	2026-01-16	7	770	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3132	2026-01-16	7	771	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3133	2026-01-16	7	772	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3134	2026-01-16	7	773	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3135	2026-01-16	7	774	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3136	2026-01-16	7	775	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3137	2026-01-16	7	776	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3138	2026-01-16	7	777	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3139	2026-01-16	7	778	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3140	2026-01-16	7	779	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3141	2026-01-16	7	780	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3142	2026-01-16	7	781	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3143	2026-01-16	7	782	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3144	2026-01-16	7	783	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3145	2026-01-19	0	0	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3146	2026-01-19	4	1	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3147	2026-01-19	4	2	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3148	2026-01-19	7	1	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3149	2026-01-19	7	2	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3150	2026-01-19	7	3	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3151	2026-01-19	7	4	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3152	2026-01-19	7	5	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3153	2026-01-19	7	6	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3154	2026-01-19	7	7	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3155	2026-01-19	7	8	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3156	2026-01-19	7	9	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3157	2026-01-19	7	10	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3158	2026-01-19	7	11	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3159	2026-01-19	7	12	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3160	2026-01-19	7	13	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3161	2026-01-19	7	14	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3162	2026-01-19	7	15	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3163	2026-01-19	7	16	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3164	2026-01-19	7	17	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3165	2026-01-19	7	18	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3166	2026-01-19	7	19	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3167	2026-01-19	7	20	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3168	2026-01-19	7	21	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3169	2026-01-19	7	22	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3170	2026-01-19	7	23	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3171	2026-01-19	7	24	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3172	2026-01-19	7	25	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3173	2026-01-19	7	26	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3174	2026-01-19	7	27	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3175	2026-01-19	7	28	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3176	2026-01-19	7	29	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3177	2026-01-19	7	30	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3178	2026-01-19	7	31	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3179	2026-01-19	7	32	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3180	2026-01-19	7	33	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3181	2026-01-19	7	34	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3182	2026-01-19	7	35	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3183	2026-01-19	7	36	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3184	2026-01-19	7	37	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3185	2026-01-19	7	38	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3186	2026-01-19	7	39	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3187	2026-01-19	7	40	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3188	2026-01-19	7	41	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3189	2026-01-19	7	42	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3190	2026-01-19	7	43	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3191	2026-01-19	7	44	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3192	2026-01-19	7	45	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3193	2026-01-19	7	46	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3194	2026-01-19	7	47	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3195	2026-01-19	7	48	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3196	2026-01-19	7	49	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3197	2026-01-19	7	50	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3198	2026-01-19	7	51	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3199	2026-01-19	7	52	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3200	2026-01-19	7	53	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3201	2026-01-19	7	54	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3202	2026-01-19	7	55	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3203	2026-01-19	7	56	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3204	2026-01-19	7	57	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3205	2026-01-19	7	58	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3206	2026-01-19	7	59	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3207	2026-01-19	7	60	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3208	2026-01-19	7	61	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3209	2026-01-19	7	62	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3210	2026-01-19	7	63	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3211	2026-01-19	7	64	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3212	2026-01-19	7	65	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3213	2026-01-19	7	66	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3214	2026-01-19	7	67	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3215	2026-01-19	7	68	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3216	2026-01-19	7	69	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3217	2026-01-19	7	70	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3218	2026-01-19	7	71	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3219	2026-01-19	7	72	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3220	2026-01-19	7	73	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3221	2026-01-19	7	74	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3222	2026-01-19	7	75	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3223	2026-01-19	7	76	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3224	2026-01-19	7	77	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3225	2026-01-19	7	78	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3226	2026-01-19	7	79	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3227	2026-01-19	7	80	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3228	2026-01-19	7	81	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3229	2026-01-19	7	82	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3230	2026-01-19	7	83	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3231	2026-01-19	7	84	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3232	2026-01-19	7	85	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3233	2026-01-19	7	86	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3234	2026-01-19	7	87	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3235	2026-01-19	7	88	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3236	2026-01-19	7	89	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3237	2026-01-19	7	90	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3238	2026-01-19	7	91	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3239	2026-01-19	7	92	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3240	2026-01-19	7	93	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3241	2026-01-19	7	94	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3242	2026-01-19	7	95	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3243	2026-01-19	7	96	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3244	2026-01-19	7	97	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3245	2026-01-19	7	98	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3246	2026-01-19	7	99	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3247	2026-01-19	7	100	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3248	2026-01-19	7	101	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3249	2026-01-19	7	102	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3250	2026-01-19	7	103	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3251	2026-01-19	7	104	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3252	2026-01-19	7	105	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3253	2026-01-19	7	106	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3254	2026-01-19	7	107	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3255	2026-01-19	7	108	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3256	2026-01-19	7	109	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3257	2026-01-19	7	110	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3258	2026-01-19	7	111	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3259	2026-01-19	7	112	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3260	2026-01-19	7	113	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3261	2026-01-19	7	114	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3262	2026-01-19	7	115	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3263	2026-01-19	7	116	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3264	2026-01-19	7	117	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3265	2026-01-19	7	118	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3266	2026-01-19	7	119	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3267	2026-01-19	7	120	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3268	2026-01-19	7	121	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3269	2026-01-19	7	122	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3270	2026-01-19	7	123	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3271	2026-01-19	7	124	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3272	2026-01-19	7	125	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3273	2026-01-19	7	126	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3274	2026-01-19	7	127	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3275	2026-01-19	7	128	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3276	2026-01-19	7	129	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3277	2026-01-19	7	130	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3278	2026-01-19	7	131	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3279	2026-01-19	7	132	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3280	2026-01-19	7	133	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3281	2026-01-19	7	134	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3282	2026-01-19	7	135	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3283	2026-01-19	7	136	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3284	2026-01-19	7	137	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3285	2026-01-19	7	138	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3286	2026-01-19	7	139	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3287	2026-01-19	7	140	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3288	2026-01-19	7	141	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3289	2026-01-19	7	142	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3290	2026-01-19	7	143	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3291	2026-01-19	7	144	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3292	2026-01-19	7	145	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3293	2026-01-19	7	146	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3294	2026-01-19	7	147	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3295	2026-01-19	7	148	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3296	2026-01-19	7	149	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3297	2026-01-19	7	150	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3298	2026-01-19	7	151	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3299	2026-01-19	7	152	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3300	2026-01-19	7	153	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3301	2026-01-19	7	154	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3302	2026-01-19	7	155	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3303	2026-01-19	7	156	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3304	2026-01-19	7	157	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3305	2026-01-19	7	158	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3306	2026-01-19	7	159	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3307	2026-01-19	7	160	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3308	2026-01-19	7	161	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3309	2026-01-19	7	162	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3310	2026-01-19	7	163	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3311	2026-01-19	7	164	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3312	2026-01-19	7	165	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3313	2026-01-19	7	166	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3314	2026-01-19	7	167	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3315	2026-01-19	7	168	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3316	2026-01-19	7	169	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3317	2026-01-19	7	170	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3318	2026-01-19	7	171	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3319	2026-01-19	7	172	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3320	2026-01-19	7	173	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3321	2026-01-19	7	174	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3322	2026-01-19	7	175	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3323	2026-01-19	7	176	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3324	2026-01-19	7	177	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3325	2026-01-19	7	178	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3326	2026-01-19	7	179	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3327	2026-01-19	7	180	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3328	2026-01-19	7	181	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3329	2026-01-19	7	182	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3330	2026-01-19	7	183	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3331	2026-01-19	7	184	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3332	2026-01-19	7	185	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3333	2026-01-19	7	186	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3334	2026-01-19	7	187	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3335	2026-01-19	7	188	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3336	2026-01-19	7	189	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3337	2026-01-19	7	190	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3338	2026-01-19	7	191	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3339	2026-01-19	7	192	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3340	2026-01-19	7	193	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3341	2026-01-19	7	194	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3342	2026-01-19	7	195	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3343	2026-01-19	7	196	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3344	2026-01-19	7	197	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3345	2026-01-19	7	198	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3346	2026-01-19	7	199	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3347	2026-01-19	7	200	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3348	2026-01-19	7	201	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3349	2026-01-19	7	202	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3350	2026-01-19	7	203	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3351	2026-01-19	7	204	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3352	2026-01-19	7	205	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3353	2026-01-19	7	206	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3354	2026-01-19	7	207	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3355	2026-01-19	7	208	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3356	2026-01-19	7	209	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3357	2026-01-19	7	210	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3358	2026-01-19	7	211	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3359	2026-01-19	7	212	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3360	2026-01-19	7	213	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3361	2026-01-19	7	214	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3362	2026-01-19	7	215	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3363	2026-01-19	7	216	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3364	2026-01-19	7	217	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3365	2026-01-19	7	218	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3366	2026-01-19	7	219	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3367	2026-01-19	7	220	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3368	2026-01-19	7	221	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3369	2026-01-19	7	222	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3370	2026-01-19	7	223	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3371	2026-01-19	7	224	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3372	2026-01-19	7	225	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3373	2026-01-19	7	226	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3374	2026-01-19	7	227	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3375	2026-01-19	7	228	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3376	2026-01-19	7	229	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3377	2026-01-19	7	230	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3378	2026-01-19	7	231	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3379	2026-01-19	7	232	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3380	2026-01-19	7	233	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3381	2026-01-19	7	234	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3382	2026-01-19	7	235	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3383	2026-01-19	7	236	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3384	2026-01-19	7	237	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3385	2026-01-19	7	238	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3386	2026-01-19	7	239	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3387	2026-01-19	7	240	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3388	2026-01-19	7	241	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3389	2026-01-19	7	242	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3390	2026-01-19	7	243	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3391	2026-01-19	7	244	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3392	2026-01-19	7	245	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3393	2026-01-19	7	246	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3394	2026-01-19	7	247	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3395	2026-01-19	7	248	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3396	2026-01-19	7	249	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3397	2026-01-19	7	250	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3398	2026-01-19	7	251	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3399	2026-01-19	7	252	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3400	2026-01-19	7	253	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3401	2026-01-19	7	254	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3402	2026-01-19	7	255	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3403	2026-01-19	7	256	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3404	2026-01-19	7	257	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3405	2026-01-19	7	258	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3406	2026-01-19	7	259	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3407	2026-01-19	7	260	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3408	2026-01-19	7	261	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3409	2026-01-19	7	262	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3410	2026-01-19	7	263	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3411	2026-01-19	7	264	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3412	2026-01-19	7	265	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3413	2026-01-19	7	266	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3414	2026-01-19	7	267	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3415	2026-01-19	7	268	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3416	2026-01-19	7	269	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3417	2026-01-19	7	270	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3418	2026-01-19	7	271	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3419	2026-01-19	7	272	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3420	2026-01-19	7	273	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3421	2026-01-19	7	274	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3422	2026-01-19	7	275	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3423	2026-01-19	7	276	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3424	2026-01-19	7	277	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3425	2026-01-19	7	278	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3426	2026-01-19	7	279	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3427	2026-01-19	7	280	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3428	2026-01-19	7	281	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3429	2026-01-19	7	282	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3430	2026-01-19	7	283	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3431	2026-01-19	7	284	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3432	2026-01-19	7	285	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3433	2026-01-19	7	286	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3434	2026-01-19	7	287	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3435	2026-01-19	7	288	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3436	2026-01-19	7	289	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3437	2026-01-19	7	290	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3438	2026-01-19	7	291	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3439	2026-01-19	7	292	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3440	2026-01-19	7	293	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3441	2026-01-19	7	294	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3442	2026-01-19	7	295	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3443	2026-01-19	7	296	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3444	2026-01-19	7	297	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3445	2026-01-19	7	298	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3446	2026-01-19	7	299	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3447	2026-01-19	7	300	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3448	2026-01-19	7	301	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3449	2026-01-19	7	302	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3450	2026-01-19	7	303	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3451	2026-01-19	7	304	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3452	2026-01-19	7	305	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3453	2026-01-19	7	306	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3454	2026-01-19	7	307	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3455	2026-01-19	7	308	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3456	2026-01-19	7	309	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3457	2026-01-19	7	310	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3458	2026-01-19	7	311	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3459	2026-01-19	7	312	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3460	2026-01-19	7	313	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3461	2026-01-19	7	314	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3462	2026-01-19	7	315	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3463	2026-01-19	7	316	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3464	2026-01-19	7	317	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3465	2026-01-19	7	318	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3466	2026-01-19	7	319	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3467	2026-01-19	7	320	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3468	2026-01-19	7	321	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3469	2026-01-19	7	322	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3470	2026-01-19	7	323	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3471	2026-01-19	7	324	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3472	2026-01-19	7	325	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3473	2026-01-19	7	326	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3474	2026-01-19	7	327	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3475	2026-01-19	7	328	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3476	2026-01-19	7	329	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3477	2026-01-19	7	330	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3478	2026-01-19	7	331	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3479	2026-01-19	7	332	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3480	2026-01-19	7	333	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3481	2026-01-19	7	334	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3482	2026-01-19	7	335	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3483	2026-01-19	7	336	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3484	2026-01-19	7	337	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3485	2026-01-19	7	338	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3486	2026-01-19	7	339	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3487	2026-01-19	7	340	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3488	2026-01-19	7	341	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3489	2026-01-19	7	342	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3490	2026-01-19	7	343	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3491	2026-01-19	7	344	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3492	2026-01-19	7	345	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3493	2026-01-19	7	346	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3494	2026-01-19	7	347	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3495	2026-01-19	7	348	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3496	2026-01-19	7	349	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3497	2026-01-19	7	350	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3498	2026-01-19	7	351	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3499	2026-01-19	7	352	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3500	2026-01-19	7	353	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3501	2026-01-19	7	354	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3502	2026-01-19	7	355	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3503	2026-01-19	7	356	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3504	2026-01-19	7	357	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3505	2026-01-19	7	358	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3506	2026-01-19	7	359	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3507	2026-01-19	7	360	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3508	2026-01-19	7	361	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3509	2026-01-19	7	362	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3510	2026-01-19	7	363	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3511	2026-01-19	7	364	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3512	2026-01-19	7	365	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3513	2026-01-19	7	366	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3514	2026-01-19	7	367	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3515	2026-01-19	7	368	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3516	2026-01-19	7	369	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3517	2026-01-19	7	370	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3518	2026-01-19	7	371	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3519	2026-01-19	7	372	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3520	2026-01-19	7	373	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3521	2026-01-19	7	374	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3522	2026-01-19	7	501	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3523	2026-01-19	7	375	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3524	2026-01-19	7	376	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3525	2026-01-19	7	377	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3526	2026-01-19	7	378	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3527	2026-01-19	7	379	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3528	2026-01-19	7	380	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3529	2026-01-19	7	381	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3530	2026-01-19	7	382	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3531	2026-01-19	7	383	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3532	2026-01-19	7	384	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3533	2026-01-19	7	385	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3534	2026-01-19	7	386	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3535	2026-01-19	7	387	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3536	2026-01-19	7	388	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3537	2026-01-19	7	389	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3538	2026-01-19	7	390	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3539	2026-01-19	7	391	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3540	2026-01-19	7	392	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3541	2026-01-19	7	393	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3542	2026-01-19	7	394	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3543	2026-01-19	7	395	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3544	2026-01-19	7	396	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3545	2026-01-19	7	397	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3546	2026-01-19	7	398	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3547	2026-01-19	7	399	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3548	2026-01-19	7	400	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3549	2026-01-19	7	401	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3550	2026-01-19	7	402	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3551	2026-01-19	7	403	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3552	2026-01-19	7	404	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3553	2026-01-19	7	405	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3554	2026-01-19	7	406	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3555	2026-01-19	7	407	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3556	2026-01-19	7	408	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3557	2026-01-19	7	409	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3558	2026-01-19	7	410	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3559	2026-01-19	7	411	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3560	2026-01-19	7	412	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3561	2026-01-19	7	413	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3562	2026-01-19	7	414	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3563	2026-01-19	7	415	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3564	2026-01-19	7	416	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3565	2026-01-19	7	417	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3566	2026-01-19	7	418	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3567	2026-01-19	7	419	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3568	2026-01-19	7	420	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3569	2026-01-19	7	421	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3570	2026-01-19	7	422	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3571	2026-01-19	7	423	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3572	2026-01-19	7	424	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3573	2026-01-19	7	425	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3574	2026-01-19	7	426	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3575	2026-01-19	7	427	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3576	2026-01-19	7	428	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3577	2026-01-19	7	429	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3578	2026-01-19	7	430	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3579	2026-01-19	7	431	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3580	2026-01-19	7	432	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3581	2026-01-19	7	433	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3582	2026-01-19	7	434	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3583	2026-01-19	7	435	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3584	2026-01-19	7	436	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3585	2026-01-19	7	437	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3586	2026-01-19	7	438	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3587	2026-01-19	7	439	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3588	2026-01-19	7	440	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3589	2026-01-19	7	441	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3590	2026-01-19	7	442	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3591	2026-01-19	7	443	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3592	2026-01-19	7	444	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3593	2026-01-19	7	445	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3594	2026-01-19	7	446	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3595	2026-01-19	7	447	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3596	2026-01-19	7	448	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3597	2026-01-19	7	449	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3598	2026-01-19	7	450	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3599	2026-01-19	7	451	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3600	2026-01-19	7	452	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3601	2026-01-19	7	453	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3602	2026-01-19	7	454	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3603	2026-01-19	7	455	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3604	2026-01-19	7	456	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3605	2026-01-19	7	457	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3606	2026-01-19	7	458	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3607	2026-01-19	7	459	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3608	2026-01-19	7	460	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3609	2026-01-19	7	461	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3610	2026-01-19	7	462	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3611	2026-01-19	7	463	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3612	2026-01-19	7	464	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3613	2026-01-19	7	465	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3614	2026-01-19	7	466	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3615	2026-01-19	7	467	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3616	2026-01-19	7	468	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3617	2026-01-19	7	469	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3618	2026-01-19	7	470	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3619	2026-01-19	7	471	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3620	2026-01-19	7	472	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3621	2026-01-19	7	473	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3622	2026-01-19	7	474	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3623	2026-01-19	7	475	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3624	2026-01-19	7	476	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3625	2026-01-19	7	477	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3626	2026-01-19	7	478	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3627	2026-01-19	7	479	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3628	2026-01-19	7	480	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3629	2026-01-19	7	481	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3630	2026-01-19	7	482	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3631	2026-01-19	7	483	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3632	2026-01-19	7	484	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3633	2026-01-19	7	485	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3634	2026-01-19	7	486	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3635	2026-01-19	7	487	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3636	2026-01-19	7	488	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3637	2026-01-19	7	489	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3638	2026-01-19	7	490	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3639	2026-01-19	7	491	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3640	2026-01-19	7	492	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3641	2026-01-19	7	493	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3642	2026-01-19	7	494	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3643	2026-01-19	7	495	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3644	2026-01-19	7	496	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3645	2026-01-19	7	497	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3646	2026-01-19	7	498	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3647	2026-01-19	7	499	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3648	2026-01-19	7	500	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3649	2026-01-19	7	502	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3650	2026-01-19	7	503	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3651	2026-01-19	7	504	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3652	2026-01-19	7	505	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3653	2026-01-19	7	506	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3654	2026-01-19	7	507	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3655	2026-01-19	7	508	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3656	2026-01-19	7	509	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3657	2026-01-19	7	510	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3658	2026-01-19	7	511	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3659	2026-01-19	7	512	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3660	2026-01-19	7	513	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3661	2026-01-19	7	514	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3662	2026-01-19	7	515	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3663	2026-01-19	7	516	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3664	2026-01-19	7	517	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3665	2026-01-19	7	518	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3666	2026-01-19	7	519	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3667	2026-01-19	7	520	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3668	2026-01-19	7	521	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3669	2026-01-19	7	522	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3670	2026-01-19	7	523	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3671	2026-01-19	7	524	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3672	2026-01-19	7	525	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3673	2026-01-19	7	526	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3674	2026-01-19	7	527	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3675	2026-01-19	7	528	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3676	2026-01-19	7	529	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3677	2026-01-19	7	530	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3678	2026-01-19	7	531	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3679	2026-01-19	7	532	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3680	2026-01-19	7	533	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3681	2026-01-19	7	534	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3682	2026-01-19	7	535	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3683	2026-01-19	7	536	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3684	2026-01-19	7	537	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3685	2026-01-19	7	538	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3686	2026-01-19	7	539	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3687	2026-01-19	7	540	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3688	2026-01-19	7	541	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3689	2026-01-19	7	542	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3690	2026-01-19	7	543	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3691	2026-01-19	7	544	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3692	2026-01-19	7	545	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3693	2026-01-19	7	546	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3694	2026-01-19	7	547	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3695	2026-01-19	7	548	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3696	2026-01-19	7	549	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3697	2026-01-19	7	550	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3698	2026-01-19	7	551	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3699	2026-01-19	7	552	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3700	2026-01-19	7	553	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3701	2026-01-19	7	554	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3702	2026-01-19	7	555	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3703	2026-01-19	7	556	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3704	2026-01-19	7	557	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3705	2026-01-19	7	558	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3706	2026-01-19	7	559	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3707	2026-01-19	7	560	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3708	2026-01-19	7	561	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3709	2026-01-19	7	562	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3710	2026-01-19	7	563	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3711	2026-01-19	7	564	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3712	2026-01-19	7	565	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3713	2026-01-19	7	566	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3714	2026-01-19	7	567	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3715	2026-01-19	7	568	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3716	2026-01-19	7	569	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3717	2026-01-19	7	570	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3718	2026-01-19	7	571	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3719	2026-01-19	7	572	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3720	2026-01-19	7	573	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3721	2026-01-19	7	574	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3722	2026-01-19	7	575	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3723	2026-01-19	7	576	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3724	2026-01-19	7	577	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3725	2026-01-19	7	578	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3726	2026-01-19	7	579	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3727	2026-01-19	7	580	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3728	2026-01-19	7	581	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3729	2026-01-19	7	582	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3730	2026-01-19	7	583	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3731	2026-01-19	7	584	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3732	2026-01-19	7	585	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3733	2026-01-19	7	586	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3734	2026-01-19	7	587	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3735	2026-01-19	7	588	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3736	2026-01-19	7	589	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3737	2026-01-19	7	590	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3738	2026-01-19	7	591	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3739	2026-01-19	7	592	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3740	2026-01-19	7	593	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3741	2026-01-19	7	594	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3742	2026-01-19	7	595	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3743	2026-01-19	7	596	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3744	2026-01-19	7	597	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3745	2026-01-19	7	598	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3746	2026-01-19	7	599	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3747	2026-01-19	7	600	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3748	2026-01-19	7	601	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3749	2026-01-19	7	602	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3750	2026-01-19	7	603	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3751	2026-01-19	7	604	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3752	2026-01-19	7	605	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3753	2026-01-19	7	606	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3754	2026-01-19	7	607	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3755	2026-01-19	7	608	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3756	2026-01-19	7	609	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3757	2026-01-19	7	610	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3758	2026-01-19	7	611	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3759	2026-01-19	7	612	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3760	2026-01-19	7	613	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3761	2026-01-19	7	614	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3762	2026-01-19	7	615	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3763	2026-01-19	7	616	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3764	2026-01-19	7	617	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3765	2026-01-19	7	618	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3766	2026-01-19	7	619	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3767	2026-01-19	7	620	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3768	2026-01-19	7	621	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3769	2026-01-19	7	622	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3770	2026-01-19	7	623	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3771	2026-01-19	7	624	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3772	2026-01-19	7	625	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3773	2026-01-19	7	626	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3774	2026-01-19	7	627	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3775	2026-01-19	7	628	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3776	2026-01-19	7	629	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3777	2026-01-19	7	630	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3778	2026-01-19	7	631	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3779	2026-01-19	7	632	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3780	2026-01-19	7	633	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3781	2026-01-19	7	634	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3782	2026-01-19	7	635	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3783	2026-01-19	7	636	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3784	2026-01-19	7	637	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3785	2026-01-19	7	638	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3786	2026-01-19	7	639	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3787	2026-01-19	7	640	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3788	2026-01-19	7	641	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3789	2026-01-19	7	642	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3790	2026-01-19	7	643	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3791	2026-01-19	7	644	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3792	2026-01-19	7	645	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3793	2026-01-19	7	646	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3794	2026-01-19	7	647	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3795	2026-01-19	7	648	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3796	2026-01-19	7	649	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3797	2026-01-19	7	650	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3798	2026-01-19	7	651	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3799	2026-01-19	7	652	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3800	2026-01-19	7	653	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3801	2026-01-19	7	654	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3802	2026-01-19	7	655	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3803	2026-01-19	7	656	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3804	2026-01-19	7	657	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3805	2026-01-19	7	658	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3806	2026-01-19	7	659	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3807	2026-01-19	7	660	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3808	2026-01-19	7	661	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3809	2026-01-19	7	662	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3810	2026-01-19	7	663	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3811	2026-01-19	7	664	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3812	2026-01-19	7	665	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3813	2026-01-19	7	666	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3814	2026-01-19	7	667	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3815	2026-01-19	7	668	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3816	2026-01-19	7	669	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3817	2026-01-19	7	670	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3818	2026-01-19	7	671	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3819	2026-01-19	7	672	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3820	2026-01-19	7	673	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3821	2026-01-19	7	674	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3822	2026-01-19	7	675	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3823	2026-01-19	7	676	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3824	2026-01-19	7	677	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3825	2026-01-19	7	678	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3826	2026-01-19	7	679	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3827	2026-01-19	7	680	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3828	2026-01-19	7	681	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3829	2026-01-19	7	682	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3830	2026-01-19	7	683	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3831	2026-01-19	7	684	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3832	2026-01-19	7	685	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3833	2026-01-19	7	686	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3834	2026-01-19	7	687	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3835	2026-01-19	7	688	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3836	2026-01-19	7	689	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3837	2026-01-19	7	690	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3838	2026-01-19	7	691	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3839	2026-01-19	7	692	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3840	2026-01-19	7	693	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3841	2026-01-19	7	694	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3842	2026-01-19	7	695	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3843	2026-01-19	7	696	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3844	2026-01-19	7	697	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3845	2026-01-19	7	698	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3846	2026-01-19	7	699	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3847	2026-01-19	7	700	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3848	2026-01-19	7	701	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3849	2026-01-19	7	702	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3850	2026-01-19	7	703	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3851	2026-01-19	7	704	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3852	2026-01-19	7	705	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3853	2026-01-19	7	706	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3854	2026-01-19	7	707	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3855	2026-01-19	7	708	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3856	2026-01-19	7	709	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3857	2026-01-19	7	710	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3858	2026-01-19	7	711	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3859	2026-01-19	7	712	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3860	2026-01-19	7	713	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3861	2026-01-19	7	714	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3862	2026-01-19	7	715	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3863	2026-01-19	7	716	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3864	2026-01-19	7	717	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3865	2026-01-19	7	718	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3866	2026-01-19	7	719	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3867	2026-01-19	7	720	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3868	2026-01-19	7	721	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3869	2026-01-19	7	722	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3870	2026-01-19	7	723	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3871	2026-01-19	7	724	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3872	2026-01-19	7	725	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3873	2026-01-19	7	726	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3874	2026-01-19	7	727	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3875	2026-01-19	7	728	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3876	2026-01-19	7	729	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3877	2026-01-19	7	730	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3878	2026-01-19	7	731	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3879	2026-01-19	7	732	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3880	2026-01-19	7	733	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3881	2026-01-19	7	734	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3882	2026-01-19	7	735	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3883	2026-01-19	7	736	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3884	2026-01-19	7	737	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3885	2026-01-19	7	738	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3886	2026-01-19	7	739	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3887	2026-01-19	7	740	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3888	2026-01-19	7	741	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3889	2026-01-19	7	742	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3890	2026-01-19	7	743	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3891	2026-01-19	7	744	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3892	2026-01-19	7	745	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3893	2026-01-19	7	746	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3894	2026-01-19	7	747	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3895	2026-01-19	7	748	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3896	2026-01-19	7	749	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3897	2026-01-19	7	750	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3898	2026-01-19	7	751	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3899	2026-01-19	7	752	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3900	2026-01-19	7	753	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3901	2026-01-19	7	754	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3902	2026-01-19	7	755	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3903	2026-01-19	7	756	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3904	2026-01-19	7	757	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3905	2026-01-19	7	758	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3906	2026-01-19	7	759	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3907	2026-01-19	7	760	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3908	2026-01-19	7	761	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3909	2026-01-19	7	762	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3910	2026-01-19	7	763	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3911	2026-01-19	7	764	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3912	2026-01-19	7	765	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3913	2026-01-19	7	766	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3914	2026-01-19	7	767	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3915	2026-01-19	7	768	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3916	2026-01-19	7	769	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3917	2026-01-19	7	770	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3918	2026-01-19	7	771	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3919	2026-01-19	7	772	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3920	2026-01-19	7	773	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3921	2026-01-19	7	774	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3922	2026-01-19	7	775	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3923	2026-01-19	7	776	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3924	2026-01-19	7	777	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3925	2026-01-19	7	778	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3926	2026-01-19	7	779	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3927	2026-01-19	7	780	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3928	2026-01-19	7	781	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3929	2026-01-19	7	782	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3930	2026-01-19	7	783	0	0	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
\.


--
-- Data for Name: otp_static_staticdevice; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.otp_static_staticdevice (id, name, confirmed, user_id, throttling_failure_count, throttling_failure_timestamp, created_at, last_used_at) FROM stdin;
\.


--
-- Data for Name: otp_static_statictoken; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.otp_static_statictoken (id, token, device_id) FROM stdin;
\.


--
-- Data for Name: otp_totp_totpdevice; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.otp_totp_totpdevice (id, name, confirmed, key, step, t0, digits, tolerance, drift, last_t, user_id, throttling_failure_count, throttling_failure_timestamp, created_at, last_used_at) FROM stdin;
\.


--
-- Data for Name: screenshots_screenshot; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.screenshots_screenshot (id, name, image, "timestamp", user_id, translation_id, repository_filename) FROM stdin;
\.


--
-- Data for Name: screenshots_screenshot_units; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.screenshots_screenshot_units (id, screenshot_id, unit_id) FROM stdin;
\.


--
-- Data for Name: social_auth_association; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.social_auth_association (id, server_url, handle, secret, issued, lifetime, assoc_type) FROM stdin;
\.


--
-- Data for Name: social_auth_code; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.social_auth_code (id, email, code, verified, "timestamp") FROM stdin;
\.


--
-- Data for Name: social_auth_nonce; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.social_auth_nonce (id, server_url, "timestamp", salt) FROM stdin;
\.


--
-- Data for Name: social_auth_partial; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.social_auth_partial (id, token, next_step, backend, "timestamp", data) FROM stdin;
\.


--
-- Data for Name: social_auth_usersocialauth; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.social_auth_usersocialauth (id, provider, uid, user_id, created, modified, extra_data) FROM stdin;
\.


--
-- Data for Name: trans_alert; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_alert (id, "timestamp", name, component_id, updated, dismissed, details) FROM stdin;
\.


--
-- Data for Name: trans_announcement; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_announcement (id, message, language_id, project_id, component_id, severity, expiry, notify, category_id) FROM stdin;
\.


--
-- Data for Name: trans_autocomponentlist; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_autocomponentlist (id, project_match, component_match, componentlist_id) FROM stdin;
\.


--
-- Data for Name: trans_category; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_category (id, name, slug, category_id, project_id) FROM stdin;
\.


--
-- Data for Name: trans_change; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_change (id, "timestamp", action, target, author_id, translation_id, unit_id, user_id, component_id, language_id, old, project_id, comment_id, suggestion_id, alert_id, announcement_id, details, screenshot_id, category_id) FROM stdin;
\.


--
-- Data for Name: trans_comment; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_comment (id, comment, "timestamp", user_id, unit_id, resolved, userdetails) FROM stdin;
\.


--
-- Data for Name: trans_component; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_component (id, name, slug, repo, push, repoweb, git_export, report_source_bugs, branch, filemask, template, new_base, intermediate, file_format, locked, allow_translation_propagation, enable_suggestions, suggestion_voting, suggestion_autoaccept, check_flags, project_id, commit_message, license, merge_style, new_lang, vcs, edit_template, agreement, language_regex, add_message, delete_message, priority, commit_pending_age, push_on_commit, linked_component_id, merge_message, addon_message, language_code_style, variant_regex, push_branch, restricted, auto_lock_error, source_language_id, manage_units, glossary_color, is_glossary, remote_revision, local_revision, pull_message, screenshot_filemask, enforced_checks, category_id, processed_revision, key_filter, secondary_language_id, contribute_project_tm, file_format_params, hide_glossary_matches) FROM stdin;
\.


--
-- Data for Name: trans_component_links; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_component_links (id, component_id, project_id) FROM stdin;
\.


--
-- Data for Name: trans_componentlist; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_componentlist (id, name, slug, show_dashboard) FROM stdin;
\.


--
-- Data for Name: trans_componentlist_components; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_componentlist_components (id, componentlist_id, component_id) FROM stdin;
\.


--
-- Data for Name: trans_contributoragreement; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_contributoragreement (id, "timestamp", component_id, user_id) FROM stdin;
\.


--
-- Data for Name: trans_label; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_label (id, name, color, project_id, description) FROM stdin;
\.


--
-- Data for Name: trans_pendingunitchange; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_pendingunitchange (id, target, explanation, source_unit_explanation, state, "timestamp", add_unit, author_id, unit_id, metadata, automatically_translated) FROM stdin;
\.


--
-- Data for Name: trans_project; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_project (id, name, slug, web, instructions, set_language_team, enable_hooks, access_control, translation_review, source_review, use_shared_tm, contribute_shared_tm, language_aliases, machinery_settings, enforced_2fa, secondary_language_id, check_flags, commit_policy, autoclean_tm) FROM stdin;
\.


--
-- Data for Name: trans_suggestion; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_suggestion (id, target, unit_id, user_id, "timestamp", userdetails) FROM stdin;
\.


--
-- Data for Name: trans_translation; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_translation (id, revision, filename, language_code, language_id, component_id, plural_id, check_flags) FROM stdin;
\.


--
-- Data for Name: trans_unit; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_unit (id, location, context, note, flags, source, previous_source, target, "position", num_words, priority, translation_id, id_hash, state, original_state, explanation, extra_flags, "timestamp", source_unit_id, details, last_updated, variant_id, automatically_translated) FROM stdin;
\.


--
-- Data for Name: trans_unit_labels; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_unit_labels (id, unit_id, label_id) FROM stdin;
\.


--
-- Data for Name: trans_variant; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_variant (id, variant_regex, key, component_id) FROM stdin;
\.


--
-- Data for Name: trans_variant_defining_units; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_variant_defining_units (id, variant_id, unit_id) FROM stdin;
\.


--
-- Data for Name: trans_vote; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_vote (id, suggestion_id, user_id, value) FROM stdin;
\.


--
-- Data for Name: trans_workflowsetting; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.trans_workflowsetting (id, translation_review, enable_suggestions, suggestion_voting, suggestion_autoaccept, language_id, project_id) FROM stdin;
\.


--
-- Data for Name: weblate_auth_autogroup; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.weblate_auth_autogroup (id, match, group_id) FROM stdin;
1	^.*$	3
2	^.*$	2
\.


--
-- Data for Name: weblate_auth_group; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.weblate_auth_group (id, name, project_selection, language_selection, internal, defining_project_id, enforced_2fa) FROM stdin;
1	Guests	3	1	t	\N	f
2	Viewers	4	1	t	\N	f
3	Users	3	1	t	\N	f
4	Reviewers	1	1	t	\N	f
5	Managers	1	1	t	\N	f
6	Project creators	1	1	t	\N	f
\.


--
-- Data for Name: weblate_auth_group_admins; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.weblate_auth_group_admins (id, group_id, user_id) FROM stdin;
\.


--
-- Data for Name: weblate_auth_group_componentlists; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.weblate_auth_group_componentlists (id, group_id, componentlist_id) FROM stdin;
\.


--
-- Data for Name: weblate_auth_group_components; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.weblate_auth_group_components (id, group_id, component_id) FROM stdin;
\.


--
-- Data for Name: weblate_auth_group_languages; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.weblate_auth_group_languages (id, group_id, language_id) FROM stdin;
\.


--
-- Data for Name: weblate_auth_group_projects; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.weblate_auth_group_projects (id, group_id, project_id) FROM stdin;
\.


--
-- Data for Name: weblate_auth_group_roles; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.weblate_auth_group_roles (id, group_id, role_id) FROM stdin;
1	1	3
2	1	4
3	3	6
4	4	8
5	5	1
6	6	17
\.


--
-- Data for Name: weblate_auth_invitation; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.weblate_auth_invitation (uuid, "timestamp", email, is_superuser, group_id, user_id, author_id, full_name, username) FROM stdin;
\.


--
-- Data for Name: weblate_auth_permission; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.weblate_auth_permission (id, codename, name) FROM stdin;
1	billing.view	View billing info
2	change.download	Download changes
3	comment.add	Post comment
4	comment.delete	Delete comment
5	comment.resolve	Resolve comment
6	component.edit	Edit component settings
7	component.lock	Lock component, preventing translations
8	glossary.add	Add glossary entry
9	glossary.terminology	Add glossary terminology
10	glossary.edit	Edit glossary entry
11	glossary.delete	Delete glossary entry
12	glossary.upload	Upload glossary entries
13	machinery.view	Use automatic suggestions
14	memory.edit	Edit translation memory
15	memory.delete	Delete translation memory
16	project.edit	Edit project settings
17	project.permissions	Manage project access
18	reports.view	Download reports
19	screenshot.add	Add screenshot
20	screenshot.edit	Edit screenshot
21	screenshot.delete	Delete screenshot
22	source.edit	Edit additional string info
23	unit.add	Add new string
24	unit.delete	Remove a string
25	unit.check	Dismiss failing check
26	unit.edit	Edit strings
27	unit.review	Review strings
28	unit.bulk_edit	Bulk edit strings
29	unit.override	Edit string when suggestions are enforced
30	unit.template	Edit source strings
31	suggestion.accept	Accept suggestion
32	suggestion.add	Add suggestion
33	suggestion.delete	Delete suggestion
34	suggestion.vote	Vote on suggestion
35	translation.add	Add language for translation
36	translation.auto	Perform automatic translation
37	translation.delete	Delete existing translation
38	translation.download	Download translation file
39	translation.add_more	Add several languages for translation
40	upload.authorship	Define author of uploaded translation
41	upload.overwrite	Overwrite existing strings with upload
42	upload.perform	Upload translations
43	vcs.access	Access the internal repository
44	vcs.commit	Commit changes to the internal repository
45	vcs.push	Push change from the internal repository
46	vcs.reset	Reset changes in the internal repository
47	vcs.view	View upstream repository location
48	vcs.update	Update the internal repository
49	announcement.add	Post announcements
50	management.use	Use management interface
51	project.add	Add new projects
52	language.add	Add language definitions
53	language.edit	Manage language definitions
54	group.edit	Manage teams
55	group.view	View team info
56	user.edit	Manage users
57	user.view	View user info
58	role.edit	Manage roles
59	role.view	View role info
60	announcement.edit	Manage announcements
61	memory.manage	Manage translation memory
62	machinery.edit	Manage machinery
63	componentlist.edit	Manage component lists
64	billing.manage	Manage billing
65	management.addons	Manage site-wide add-ons
\.


--
-- Data for Name: weblate_auth_role; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.weblate_auth_role (id, name) FROM stdin;
1	Administration
2	Edit source
3	Add suggestion
4	Access repository
5	Manage glossary
6	Power user
7	Translation coordinator
8	Review strings
9	Translate
10	Manage languages
11	Bulk editing
12	Automatic translation
13	Manage translation memory
14	Manage screenshots
15	Manage repository
16	Billing
17	Add new projects
\.


--
-- Data for Name: weblate_auth_role_permissions; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.weblate_auth_role_permissions (id, role_id, permission_id) FROM stdin;
2227	1	1
2228	1	2
2229	1	3
2230	1	4
2231	1	5
2232	1	6
2233	1	7
2234	1	8
2235	1	9
2236	1	10
2237	1	11
2238	1	12
2239	1	13
2240	1	14
2241	1	15
2242	1	16
2243	1	17
2244	1	18
2245	1	19
2246	1	20
2247	1	21
2248	1	22
2249	1	23
2250	1	24
2251	1	25
2252	1	26
2253	1	27
2254	1	28
2255	1	29
2256	1	30
2257	1	31
2258	1	32
2259	1	33
2260	1	34
2261	1	35
2262	1	36
2263	1	37
2264	1	38
2265	1	39
2266	1	40
2267	1	41
2268	1	42
2269	1	43
2270	1	44
2271	1	45
2272	1	46
2273	1	47
2274	1	48
2275	1	49
2276	2	32
2277	2	34
2278	2	3
2279	2	38
2280	2	41
2281	2	42
2282	2	13
2283	2	22
2284	2	25
2285	2	26
2286	2	30
2287	2	31
2288	3	32
2289	4	43
2290	4	38
2291	4	47
2292	5	8
2293	5	9
2294	5	10
2295	5	11
2296	5	12
2297	6	3
2298	6	8
2299	6	10
2300	6	11
2301	6	12
2302	6	13
2303	6	25
2304	6	26
2305	6	30
2306	6	31
2307	6	32
2308	6	33
2309	6	34
2310	6	35
2311	6	38
2312	6	41
2313	6	42
2314	6	43
2315	6	47
2316	7	3
2317	7	5
2318	7	8
2319	7	9
2320	7	10
2321	7	11
2322	7	12
2323	7	13
2324	7	19
2325	7	20
2326	7	21
2327	7	25
2328	7	26
2329	7	27
2330	7	29
2331	7	30
2332	7	31
2333	7	32
2334	7	33
2335	7	34
2336	7	35
2337	7	38
2338	7	41
2339	7	42
2340	7	43
2341	7	47
2342	7	49
2343	8	32
2344	8	34
2345	8	3
2346	8	5
2347	8	38
2348	8	41
2349	8	42
2350	8	13
2351	8	25
2352	8	26
2353	8	27
2354	8	29
2355	8	31
2356	9	32
2357	9	34
2358	9	3
2359	9	38
2360	9	41
2361	9	42
2362	9	13
2363	9	25
2364	9	26
2365	9	31
2366	10	35
2367	10	37
2368	10	38
2369	10	39
2370	11	28
2371	12	36
2372	13	14
2373	13	15
2374	14	19
2375	14	20
2376	14	21
2377	15	7
2378	15	43
2379	15	44
2380	15	45
2381	15	46
2382	15	47
2383	15	48
2384	16	1
2385	17	51
\.


--
-- Data for Name: weblate_auth_user; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.weblate_auth_user (id, password, last_login, username, full_name, email, is_superuser, is_active, date_joined, is_bot, date_expires) FROM stdin;
1	!WhHo3CRtMHBNksYc5UUxZCSFaboR3uR7LyssSyR1	\N	anonymous	Anonymous	noreply@weblate.org	f	f	2026-01-13 10:35:49.058527+00	f	\N
2	argon2$argon2id$v=19$m=102400,t=2,p=8$MXlPVjBlUjhpd1ZyV0VBVnk1NjRJVw$qUYvAUao/Tnu52q5kOiVZ/T4EGo5B1mdVBbvswzA/Kc	\N	admin		admin@example.com	t	t	2026-01-13 10:35:59.634192+00	f	\N
\.


--
-- Data for Name: weblate_auth_user_groups; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.weblate_auth_user_groups (id, user_id, group_id) FROM stdin;
1	1	1
2	1	2
3	2	3
4	2	2
\.


--
-- Data for Name: weblate_auth_userblock; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.weblate_auth_userblock (id, expiry, project_id, user_id, note) FROM stdin;
\.


--
-- Data for Name: wladmin_backuplog; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.wladmin_backuplog (id, "timestamp", event, log, service_id) FROM stdin;
\.


--
-- Data for Name: wladmin_backupservice; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.wladmin_backupservice (id, repository, enabled, "timestamp", paperkey, passphrase) FROM stdin;
\.


--
-- Data for Name: wladmin_configurationerror; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.wladmin_configurationerror (id, name, message, "timestamp", ignored) FROM stdin;
1	weblate.E012	The server e-mail address should be changed from its default value	2026-01-13 12:10:15.173412+00	f
2	weblate.E013	The "From" e-mail address should be changed from its default value	2026-01-13 12:10:15.205725+00	f
\.


--
-- Data for Name: wladmin_supportstatus; Type: TABLE DATA; Schema: public; Owner: weblate
--

COPY public.wladmin_supportstatus (id, name, secret, expiry, in_limits, discoverable, limits, backup_repository, has_subscription, enabled) FROM stdin;
\.


--
-- Name: accounts_auditlog_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.accounts_auditlog_id_seq', 2, true);


--
-- Name: accounts_profile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.accounts_profile_id_seq', 2, true);


--
-- Name: accounts_profile_languages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.accounts_profile_languages_id_seq', 1, false);


--
-- Name: accounts_profile_secondary_languages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.accounts_profile_secondary_languages_id_seq', 1, false);


--
-- Name: accounts_profile_watched_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.accounts_profile_watched_id_seq', 1, false);


--
-- Name: accounts_subscription_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.accounts_subscription_id_seq', 10, true);


--
-- Name: accounts_verifiedemail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.accounts_verifiedemail_id_seq', 1, false);


--
-- Name: addons_addon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.addons_addon_id_seq', 1, false);


--
-- Name: addons_addonactivitylog_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.addons_addonactivitylog_id_seq', 1, false);


--
-- Name: addons_event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.addons_event_id_seq', 1, false);


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 280, true);


--
-- Name: checks_check_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.checks_check_id_seq', 1, false);


--
-- Name: configuration_setting_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.configuration_setting_id_seq', 2, true);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 1, false);


--
-- Name: django_celery_beat_clockedschedule_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.django_celery_beat_clockedschedule_id_seq', 1, false);


--
-- Name: django_celery_beat_crontabschedule_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.django_celery_beat_crontabschedule_id_seq', 28, true);


--
-- Name: django_celery_beat_intervalschedule_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.django_celery_beat_intervalschedule_id_seq', 2, true);


--
-- Name: django_celery_beat_periodictask_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.django_celery_beat_periodictask_id_seq', 31, true);


--
-- Name: django_celery_beat_solarschedule_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.django_celery_beat_solarschedule_id_seq', 1, false);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 70, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 468, true);


--
-- Name: django_otp_webauthn_webauthnattestation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.django_otp_webauthn_webauthnattestation_id_seq', 1, false);


--
-- Name: django_otp_webauthn_webauthncredential_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.django_otp_webauthn_webauthncredential_id_seq', 1, false);


--
-- Name: fonts_font_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.fonts_font_id_seq', 1, false);


--
-- Name: fonts_fontgroup_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.fonts_fontgroup_id_seq', 1, false);


--
-- Name: fonts_fontoverride_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.fonts_fontoverride_id_seq', 1, false);


--
-- Name: lang_language_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.lang_language_id_seq', 783, true);


--
-- Name: lang_plural_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.lang_plural_id_seq', 990, true);


--
-- Name: memory_memory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.memory_memory_id_seq', 1, false);


--
-- Name: metrics_metric_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.metrics_metric_id_seq', 3930, true);


--
-- Name: otp_static_staticdevice_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.otp_static_staticdevice_id_seq', 1, false);


--
-- Name: otp_static_statictoken_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.otp_static_statictoken_id_seq', 1, false);


--
-- Name: otp_totp_totpdevice_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.otp_totp_totpdevice_id_seq', 1, false);


--
-- Name: screenshots_screenshot_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.screenshots_screenshot_id_seq', 1, false);


--
-- Name: screenshots_screenshot_units_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.screenshots_screenshot_units_id_seq', 1, false);


--
-- Name: social_auth_association_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.social_auth_association_id_seq', 1, false);


--
-- Name: social_auth_code_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.social_auth_code_id_seq', 1, false);


--
-- Name: social_auth_nonce_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.social_auth_nonce_id_seq', 1, false);


--
-- Name: social_auth_partial_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.social_auth_partial_id_seq', 1, false);


--
-- Name: social_auth_usersocialauth_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.social_auth_usersocialauth_id_seq', 1, false);


--
-- Name: trans_alert_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_alert_id_seq', 1, false);


--
-- Name: trans_announcement_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_announcement_id_seq', 1, false);


--
-- Name: trans_autocomponentlist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_autocomponentlist_id_seq', 1, false);


--
-- Name: trans_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_category_id_seq', 1, false);


--
-- Name: trans_change_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_change_id_seq', 1, false);


--
-- Name: trans_comment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_comment_id_seq', 1, false);


--
-- Name: trans_component_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_component_id_seq', 1, false);


--
-- Name: trans_component_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_component_links_id_seq', 1, false);


--
-- Name: trans_componentlist_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_componentlist_components_id_seq', 1, false);


--
-- Name: trans_componentlist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_componentlist_id_seq', 1, false);


--
-- Name: trans_contributoragreement_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_contributoragreement_id_seq', 1, false);


--
-- Name: trans_label_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_label_id_seq', 1, false);


--
-- Name: trans_pendingunitchange_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_pendingunitchange_id_seq', 1, false);


--
-- Name: trans_project_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_project_id_seq', 1, false);


--
-- Name: trans_suggestion_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_suggestion_id_seq', 1, false);


--
-- Name: trans_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_translation_id_seq', 1, false);


--
-- Name: trans_unit_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_unit_id_seq', 1, false);


--
-- Name: trans_unit_labels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_unit_labels_id_seq', 1, false);


--
-- Name: trans_variant_defining_units_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_variant_defining_units_id_seq', 1, false);


--
-- Name: trans_variant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_variant_id_seq', 1, false);


--
-- Name: trans_vote_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_vote_id_seq', 1, false);


--
-- Name: trans_workflowsetting_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.trans_workflowsetting_id_seq', 1, false);


--
-- Name: weblate_auth_autogroup_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.weblate_auth_autogroup_id_seq', 2, true);


--
-- Name: weblate_auth_group_admins_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.weblate_auth_group_admins_id_seq', 1, false);


--
-- Name: weblate_auth_group_componentlists_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.weblate_auth_group_componentlists_id_seq', 1, false);


--
-- Name: weblate_auth_group_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.weblate_auth_group_components_id_seq', 1, false);


--
-- Name: weblate_auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.weblate_auth_group_id_seq', 6, true);


--
-- Name: weblate_auth_group_languages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.weblate_auth_group_languages_id_seq', 1, false);


--
-- Name: weblate_auth_group_projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.weblate_auth_group_projects_id_seq', 1, false);


--
-- Name: weblate_auth_group_roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.weblate_auth_group_roles_id_seq', 6, true);


--
-- Name: weblate_auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.weblate_auth_permission_id_seq', 65, true);


--
-- Name: weblate_auth_role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.weblate_auth_role_id_seq', 17, true);


--
-- Name: weblate_auth_role_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.weblate_auth_role_permissions_id_seq', 2385, true);


--
-- Name: weblate_auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.weblate_auth_user_groups_id_seq', 4, true);


--
-- Name: weblate_auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.weblate_auth_user_id_seq', 2, true);


--
-- Name: weblate_auth_userblock_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.weblate_auth_userblock_id_seq', 1, false);


--
-- Name: wladmin_backuplog_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.wladmin_backuplog_id_seq', 1, false);


--
-- Name: wladmin_backupservice_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.wladmin_backupservice_id_seq', 1, false);


--
-- Name: wladmin_configurationerror_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.wladmin_configurationerror_id_seq', 3, true);


--
-- Name: wladmin_supportstatus_id_seq; Type: SEQUENCE SET; Schema: public; Owner: weblate
--

SELECT pg_catalog.setval('public.wladmin_supportstatus_id_seq', 1, false);


--
-- Name: accounts_auditlog accounts_auditlog_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_auditlog
    ADD CONSTRAINT accounts_auditlog_pkey PRIMARY KEY (id);


--
-- Name: accounts_profile_languages accounts_profile_languages_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_profile_languages
    ADD CONSTRAINT accounts_profile_languages_pkey PRIMARY KEY (id);


--
-- Name: accounts_profile_languages accounts_profile_languages_profile_id_language_id_48036091_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_profile_languages
    ADD CONSTRAINT accounts_profile_languages_profile_id_language_id_48036091_uniq UNIQUE (profile_id, language_id);


--
-- Name: accounts_profile accounts_profile_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_profile
    ADD CONSTRAINT accounts_profile_pkey PRIMARY KEY (id);


--
-- Name: accounts_profile_secondary_languages accounts_profile_seconda_profile_id_language_id_cb800d1e_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_profile_secondary_languages
    ADD CONSTRAINT accounts_profile_seconda_profile_id_language_id_cb800d1e_uniq UNIQUE (profile_id, language_id);


--
-- Name: accounts_profile_secondary_languages accounts_profile_secondary_languages_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_profile_secondary_languages
    ADD CONSTRAINT accounts_profile_secondary_languages_pkey PRIMARY KEY (id);


--
-- Name: accounts_profile accounts_profile_user_id_key; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_profile
    ADD CONSTRAINT accounts_profile_user_id_key UNIQUE (user_id);


--
-- Name: accounts_profile_watched accounts_profile_watched_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_profile_watched
    ADD CONSTRAINT accounts_profile_watched_pkey PRIMARY KEY (id);


--
-- Name: accounts_profile_watched accounts_profile_watched_profile_id_project_id_678d8754_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_profile_watched
    ADD CONSTRAINT accounts_profile_watched_profile_id_project_id_678d8754_uniq UNIQUE (profile_id, project_id);


--
-- Name: accounts_subscription accounts_subscription_notification_unique; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_subscription
    ADD CONSTRAINT accounts_subscription_notification_unique UNIQUE NULLS NOT DISTINCT (notification, scope, project_id, component_id, user_id);


--
-- Name: accounts_subscription accounts_subscription_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_subscription
    ADD CONSTRAINT accounts_subscription_pkey PRIMARY KEY (id);


--
-- Name: accounts_verifiedemail accounts_verifiedemail_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_verifiedemail
    ADD CONSTRAINT accounts_verifiedemail_pkey PRIMARY KEY (id);


--
-- Name: addons_addon addons_addon_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.addons_addon
    ADD CONSTRAINT addons_addon_pkey PRIMARY KEY (id);


--
-- Name: addons_addonactivitylog addons_addonactivitylog_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.addons_addonactivitylog
    ADD CONSTRAINT addons_addonactivitylog_pkey PRIMARY KEY (id);


--
-- Name: addons_event addons_event_addon_id_event_2407a5ef_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.addons_event
    ADD CONSTRAINT addons_event_addon_id_event_2407a5ef_uniq UNIQUE (addon_id, event);


--
-- Name: addons_event addons_event_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.addons_event
    ADD CONSTRAINT addons_event_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: authtoken_token authtoken_token_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.authtoken_token
    ADD CONSTRAINT authtoken_token_pkey PRIMARY KEY (key);


--
-- Name: authtoken_token authtoken_token_user_id_key; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.authtoken_token
    ADD CONSTRAINT authtoken_token_user_id_key UNIQUE (user_id);


--
-- Name: trans_category category_name_unique; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_category
    ADD CONSTRAINT category_name_unique UNIQUE NULLS NOT DISTINCT (project_id, category_id, name);


--
-- Name: trans_category category_slug_unique; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_category
    ADD CONSTRAINT category_slug_unique UNIQUE NULLS NOT DISTINCT (project_id, category_id, slug);


--
-- Name: checks_check checks_check_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.checks_check
    ADD CONSTRAINT checks_check_pkey PRIMARY KEY (id);


--
-- Name: checks_check checks_check_unit_id_name_ea73a317_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.checks_check
    ADD CONSTRAINT checks_check_unit_id_name_ea73a317_uniq UNIQUE (unit_id, name);


--
-- Name: trans_component component_name_unique; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_component
    ADD CONSTRAINT component_name_unique UNIQUE NULLS NOT DISTINCT (project_id, category_id, name);


--
-- Name: trans_component component_slug_unique; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_component
    ADD CONSTRAINT component_slug_unique UNIQUE NULLS NOT DISTINCT (project_id, category_id, slug);


--
-- Name: configuration_setting configuration_setting_category_name_5144ffcf_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.configuration_setting
    ADD CONSTRAINT configuration_setting_category_name_5144ffcf_uniq UNIQUE (category, name);


--
-- Name: configuration_setting configuration_setting_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.configuration_setting
    ADD CONSTRAINT configuration_setting_pkey PRIMARY KEY (id);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_celery_beat_clockedschedule django_celery_beat_clockedschedule_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_celery_beat_clockedschedule
    ADD CONSTRAINT django_celery_beat_clockedschedule_pkey PRIMARY KEY (id);


--
-- Name: django_celery_beat_crontabschedule django_celery_beat_crontabschedule_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_celery_beat_crontabschedule
    ADD CONSTRAINT django_celery_beat_crontabschedule_pkey PRIMARY KEY (id);


--
-- Name: django_celery_beat_intervalschedule django_celery_beat_intervalschedule_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_celery_beat_intervalschedule
    ADD CONSTRAINT django_celery_beat_intervalschedule_pkey PRIMARY KEY (id);


--
-- Name: django_celery_beat_periodictask django_celery_beat_periodictask_name_key; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_celery_beat_periodictask
    ADD CONSTRAINT django_celery_beat_periodictask_name_key UNIQUE (name);


--
-- Name: django_celery_beat_periodictask django_celery_beat_periodictask_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_celery_beat_periodictask
    ADD CONSTRAINT django_celery_beat_periodictask_pkey PRIMARY KEY (id);


--
-- Name: django_celery_beat_periodictasks django_celery_beat_periodictasks_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_celery_beat_periodictasks
    ADD CONSTRAINT django_celery_beat_periodictasks_pkey PRIMARY KEY (ident);


--
-- Name: django_celery_beat_solarschedule django_celery_beat_solar_event_latitude_longitude_ba64999a_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_celery_beat_solarschedule
    ADD CONSTRAINT django_celery_beat_solar_event_latitude_longitude_ba64999a_uniq UNIQUE (event, latitude, longitude);


--
-- Name: django_celery_beat_solarschedule django_celery_beat_solarschedule_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_celery_beat_solarschedule
    ADD CONSTRAINT django_celery_beat_solarschedule_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_otp_webauthn_webauthnattestation django_otp_webauthn_webauthnattestation_credential_id_key; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_otp_webauthn_webauthnattestation
    ADD CONSTRAINT django_otp_webauthn_webauthnattestation_credential_id_key UNIQUE (credential_id);


--
-- Name: django_otp_webauthn_webauthnattestation django_otp_webauthn_webauthnattestation_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_otp_webauthn_webauthnattestation
    ADD CONSTRAINT django_otp_webauthn_webauthnattestation_pkey PRIMARY KEY (id);


--
-- Name: django_otp_webauthn_webauthncredential django_otp_webauthn_webauthncredential_credential_id_sha256_key; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_otp_webauthn_webauthncredential
    ADD CONSTRAINT django_otp_webauthn_webauthncredential_credential_id_sha256_key UNIQUE (credential_id_sha256);


--
-- Name: django_otp_webauthn_webauthncredential django_otp_webauthn_webauthncredential_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_otp_webauthn_webauthncredential
    ADD CONSTRAINT django_otp_webauthn_webauthncredential_pkey PRIMARY KEY (id);


--
-- Name: django_otp_webauthn_webauthnuserhandle django_otp_webauthn_webauthnuserhandle_handle_hex_key; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_otp_webauthn_webauthnuserhandle
    ADD CONSTRAINT django_otp_webauthn_webauthnuserhandle_handle_hex_key UNIQUE (handle_hex);


--
-- Name: django_otp_webauthn_webauthnuserhandle django_otp_webauthn_webauthnuserhandle_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_otp_webauthn_webauthnuserhandle
    ADD CONSTRAINT django_otp_webauthn_webauthnuserhandle_pkey PRIMARY KEY (user_id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: fonts_font fonts_font_family_style_project_id_9f3996b3_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.fonts_font
    ADD CONSTRAINT fonts_font_family_style_project_id_9f3996b3_uniq UNIQUE (family, style, project_id);


--
-- Name: fonts_font fonts_font_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.fonts_font
    ADD CONSTRAINT fonts_font_pkey PRIMARY KEY (id);


--
-- Name: fonts_fontgroup fonts_fontgroup_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.fonts_fontgroup
    ADD CONSTRAINT fonts_fontgroup_pkey PRIMARY KEY (id);


--
-- Name: fonts_fontgroup fonts_fontgroup_project_id_name_0b0fa938_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.fonts_fontgroup
    ADD CONSTRAINT fonts_fontgroup_project_id_name_0b0fa938_uniq UNIQUE (project_id, name);


--
-- Name: fonts_fontoverride fonts_fontoverride_group_id_language_id_92a46b82_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.fonts_fontoverride
    ADD CONSTRAINT fonts_fontoverride_group_id_language_id_92a46b82_uniq UNIQUE (group_id, language_id);


--
-- Name: fonts_fontoverride fonts_fontoverride_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.fonts_fontoverride
    ADD CONSTRAINT fonts_fontoverride_pkey PRIMARY KEY (id);


--
-- Name: lang_language lang_language_code_key; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.lang_language
    ADD CONSTRAINT lang_language_code_key UNIQUE (code);


--
-- Name: lang_language lang_language_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.lang_language
    ADD CONSTRAINT lang_language_pkey PRIMARY KEY (id);


--
-- Name: lang_plural lang_plural_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.lang_plural
    ADD CONSTRAINT lang_plural_pkey PRIMARY KEY (id);


--
-- Name: memory_memory memory_memory_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.memory_memory
    ADD CONSTRAINT memory_memory_pkey PRIMARY KEY (id);


--
-- Name: metrics_metric metrics_metric_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.metrics_metric
    ADD CONSTRAINT metrics_metric_pkey PRIMARY KEY (id);


--
-- Name: metrics_metric metrics_metric_scope_relation_secondary_date_f0ac693e_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.metrics_metric
    ADD CONSTRAINT metrics_metric_scope_relation_secondary_date_f0ac693e_uniq UNIQUE (scope, relation, secondary, date);


--
-- Name: otp_static_staticdevice otp_static_staticdevice_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.otp_static_staticdevice
    ADD CONSTRAINT otp_static_staticdevice_pkey PRIMARY KEY (id);


--
-- Name: otp_static_statictoken otp_static_statictoken_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.otp_static_statictoken
    ADD CONSTRAINT otp_static_statictoken_pkey PRIMARY KEY (id);


--
-- Name: otp_totp_totpdevice otp_totp_totpdevice_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.otp_totp_totpdevice
    ADD CONSTRAINT otp_totp_totpdevice_pkey PRIMARY KEY (id);


--
-- Name: screenshots_screenshot screenshots_screenshot_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.screenshots_screenshot
    ADD CONSTRAINT screenshots_screenshot_pkey PRIMARY KEY (id);


--
-- Name: screenshots_screenshot_units screenshots_screenshot_u_screenshot_id_unit_id_c8f65eb6_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.screenshots_screenshot_units
    ADD CONSTRAINT screenshots_screenshot_u_screenshot_id_unit_id_c8f65eb6_uniq UNIQUE (screenshot_id, unit_id);


--
-- Name: screenshots_screenshot_units screenshots_screenshot_units_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.screenshots_screenshot_units
    ADD CONSTRAINT screenshots_screenshot_units_pkey PRIMARY KEY (id);


--
-- Name: social_auth_association social_auth_association_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.social_auth_association
    ADD CONSTRAINT social_auth_association_pkey PRIMARY KEY (id);


--
-- Name: social_auth_association social_auth_association_server_url_handle_078befa2_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.social_auth_association
    ADD CONSTRAINT social_auth_association_server_url_handle_078befa2_uniq UNIQUE (server_url, handle);


--
-- Name: social_auth_code social_auth_code_email_code_801b2d02_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.social_auth_code
    ADD CONSTRAINT social_auth_code_email_code_801b2d02_uniq UNIQUE (email, code);


--
-- Name: social_auth_code social_auth_code_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.social_auth_code
    ADD CONSTRAINT social_auth_code_pkey PRIMARY KEY (id);


--
-- Name: social_auth_nonce social_auth_nonce_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.social_auth_nonce
    ADD CONSTRAINT social_auth_nonce_pkey PRIMARY KEY (id);


--
-- Name: social_auth_nonce social_auth_nonce_server_url_timestamp_salt_f6284463_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.social_auth_nonce
    ADD CONSTRAINT social_auth_nonce_server_url_timestamp_salt_f6284463_uniq UNIQUE (server_url, "timestamp", salt);


--
-- Name: social_auth_partial social_auth_partial_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.social_auth_partial
    ADD CONSTRAINT social_auth_partial_pkey PRIMARY KEY (id);


--
-- Name: social_auth_usersocialauth social_auth_usersocialauth_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.social_auth_usersocialauth
    ADD CONSTRAINT social_auth_usersocialauth_pkey PRIMARY KEY (id);


--
-- Name: social_auth_usersocialauth social_auth_usersocialauth_provider_uid_e6b5e668_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.social_auth_usersocialauth
    ADD CONSTRAINT social_auth_usersocialauth_provider_uid_e6b5e668_uniq UNIQUE (provider, uid);


--
-- Name: trans_alert trans_alert_component_id_name_4a5a9b1d_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_alert
    ADD CONSTRAINT trans_alert_component_id_name_4a5a9b1d_uniq UNIQUE (component_id, name);


--
-- Name: trans_alert trans_alert_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_alert
    ADD CONSTRAINT trans_alert_pkey PRIMARY KEY (id);


--
-- Name: trans_announcement trans_announcement_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_announcement
    ADD CONSTRAINT trans_announcement_pkey PRIMARY KEY (id);


--
-- Name: trans_autocomponentlist trans_autocomponentlist_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_autocomponentlist
    ADD CONSTRAINT trans_autocomponentlist_pkey PRIMARY KEY (id);


--
-- Name: trans_category trans_category_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_category
    ADD CONSTRAINT trans_category_pkey PRIMARY KEY (id);


--
-- Name: trans_change trans_change_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_change
    ADD CONSTRAINT trans_change_pkey PRIMARY KEY (id);


--
-- Name: trans_comment trans_comment_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_comment
    ADD CONSTRAINT trans_comment_pkey PRIMARY KEY (id);


--
-- Name: trans_component_links trans_component_links_component_id_project_id_8e996e95_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_component_links
    ADD CONSTRAINT trans_component_links_component_id_project_id_8e996e95_uniq UNIQUE (component_id, project_id);


--
-- Name: trans_component_links trans_component_links_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_component_links
    ADD CONSTRAINT trans_component_links_pkey PRIMARY KEY (id);


--
-- Name: trans_component trans_component_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_component
    ADD CONSTRAINT trans_component_pkey PRIMARY KEY (id);


--
-- Name: trans_componentlist_components trans_componentlist_comp_componentlist_id_compone_99528c41_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_componentlist_components
    ADD CONSTRAINT trans_componentlist_comp_componentlist_id_compone_99528c41_uniq UNIQUE (componentlist_id, component_id);


--
-- Name: trans_componentlist_components trans_componentlist_components_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_componentlist_components
    ADD CONSTRAINT trans_componentlist_components_pkey PRIMARY KEY (id);


--
-- Name: trans_componentlist trans_componentlist_name_key; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_componentlist
    ADD CONSTRAINT trans_componentlist_name_key UNIQUE (name);


--
-- Name: trans_componentlist trans_componentlist_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_componentlist
    ADD CONSTRAINT trans_componentlist_pkey PRIMARY KEY (id);


--
-- Name: trans_componentlist trans_componentlist_slug_key; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_componentlist
    ADD CONSTRAINT trans_componentlist_slug_key UNIQUE (slug);


--
-- Name: trans_contributoragreement trans_contributoragreement_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_contributoragreement
    ADD CONSTRAINT trans_contributoragreement_pkey PRIMARY KEY (id);


--
-- Name: trans_contributoragreement trans_contributoragreement_user_id_component_id_4d86a703_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_contributoragreement
    ADD CONSTRAINT trans_contributoragreement_user_id_component_id_4d86a703_uniq UNIQUE (user_id, component_id);


--
-- Name: trans_label trans_label_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_label
    ADD CONSTRAINT trans_label_pkey PRIMARY KEY (id);


--
-- Name: trans_label trans_label_project_id_name_ef6f7cca_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_label
    ADD CONSTRAINT trans_label_project_id_name_ef6f7cca_uniq UNIQUE (project_id, name);


--
-- Name: trans_pendingunitchange trans_pendingunitchange_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_pendingunitchange
    ADD CONSTRAINT trans_pendingunitchange_pkey PRIMARY KEY (id);


--
-- Name: trans_project trans_project_name_key; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_project
    ADD CONSTRAINT trans_project_name_key UNIQUE (name);


--
-- Name: trans_project trans_project_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_project
    ADD CONSTRAINT trans_project_pkey PRIMARY KEY (id);


--
-- Name: trans_project trans_project_slug_key; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_project
    ADD CONSTRAINT trans_project_slug_key UNIQUE (slug);


--
-- Name: trans_suggestion trans_suggestion_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_suggestion
    ADD CONSTRAINT trans_suggestion_pkey PRIMARY KEY (id);


--
-- Name: trans_translation trans_translation_component_id_language_id_331fa2a7_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_translation
    ADD CONSTRAINT trans_translation_component_id_language_id_331fa2a7_uniq UNIQUE (component_id, language_id);


--
-- Name: trans_translation trans_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_translation
    ADD CONSTRAINT trans_translation_pkey PRIMARY KEY (id);


--
-- Name: trans_unit_labels trans_unit_labels_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_unit_labels
    ADD CONSTRAINT trans_unit_labels_pkey PRIMARY KEY (id);


--
-- Name: trans_unit_labels trans_unit_labels_unit_id_label_id_6ab4c307_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_unit_labels
    ADD CONSTRAINT trans_unit_labels_unit_id_label_id_6ab4c307_uniq UNIQUE (unit_id, label_id);


--
-- Name: trans_unit trans_unit_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_unit
    ADD CONSTRAINT trans_unit_pkey PRIMARY KEY (id);


--
-- Name: trans_unit trans_unit_translation_id_id_hash_ab945589_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_unit
    ADD CONSTRAINT trans_unit_translation_id_id_hash_ab945589_uniq UNIQUE (translation_id, id_hash);


--
-- Name: trans_variant trans_variant_component_id_key_variant_regex_457e8bdd_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_variant
    ADD CONSTRAINT trans_variant_component_id_key_variant_regex_457e8bdd_uniq UNIQUE (component_id, key, variant_regex);


--
-- Name: trans_variant_defining_units trans_variant_defining_units_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_variant_defining_units
    ADD CONSTRAINT trans_variant_defining_units_pkey PRIMARY KEY (id);


--
-- Name: trans_variant_defining_units trans_variant_defining_units_variant_id_unit_id_cf32c9b3_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_variant_defining_units
    ADD CONSTRAINT trans_variant_defining_units_variant_id_unit_id_cf32c9b3_uniq UNIQUE (variant_id, unit_id);


--
-- Name: trans_variant trans_variant_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_variant
    ADD CONSTRAINT trans_variant_pkey PRIMARY KEY (id);


--
-- Name: trans_vote trans_vote_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_vote
    ADD CONSTRAINT trans_vote_pkey PRIMARY KEY (id);


--
-- Name: trans_vote trans_vote_suggestion_id_user_id_fe8bdce2_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_vote
    ADD CONSTRAINT trans_vote_suggestion_id_user_id_fe8bdce2_uniq UNIQUE (suggestion_id, user_id);


--
-- Name: trans_workflowsetting trans_workflowsetting_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_workflowsetting
    ADD CONSTRAINT trans_workflowsetting_pkey PRIMARY KEY (id);


--
-- Name: weblate_auth_autogroup weblate_auth_autogroup_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_autogroup
    ADD CONSTRAINT weblate_auth_autogroup_pkey PRIMARY KEY (id);


--
-- Name: weblate_auth_group_admins weblate_auth_group_admins_group_id_user_id_8c69bc69_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_admins
    ADD CONSTRAINT weblate_auth_group_admins_group_id_user_id_8c69bc69_uniq UNIQUE (group_id, user_id);


--
-- Name: weblate_auth_group_admins weblate_auth_group_admins_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_admins
    ADD CONSTRAINT weblate_auth_group_admins_pkey PRIMARY KEY (id);


--
-- Name: weblate_auth_group_components weblate_auth_group_compo_group_id_component_id_57e2f006_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_components
    ADD CONSTRAINT weblate_auth_group_compo_group_id_component_id_57e2f006_uniq UNIQUE (group_id, component_id);


--
-- Name: weblate_auth_group_componentlists weblate_auth_group_compo_group_id_componentlist_i_4a7f6bad_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_componentlists
    ADD CONSTRAINT weblate_auth_group_compo_group_id_componentlist_i_4a7f6bad_uniq UNIQUE (group_id, componentlist_id);


--
-- Name: weblate_auth_group_componentlists weblate_auth_group_componentlists_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_componentlists
    ADD CONSTRAINT weblate_auth_group_componentlists_pkey PRIMARY KEY (id);


--
-- Name: weblate_auth_group_components weblate_auth_group_components_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_components
    ADD CONSTRAINT weblate_auth_group_components_pkey PRIMARY KEY (id);


--
-- Name: weblate_auth_group_languages weblate_auth_group_languages_group_id_language_id_c34f29db_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_languages
    ADD CONSTRAINT weblate_auth_group_languages_group_id_language_id_c34f29db_uniq UNIQUE (group_id, language_id);


--
-- Name: weblate_auth_group_languages weblate_auth_group_languages_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_languages
    ADD CONSTRAINT weblate_auth_group_languages_pkey PRIMARY KEY (id);


--
-- Name: weblate_auth_group weblate_auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group
    ADD CONSTRAINT weblate_auth_group_pkey PRIMARY KEY (id);


--
-- Name: weblate_auth_group_projects weblate_auth_group_projects_group_id_project_id_2a91e8e2_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_projects
    ADD CONSTRAINT weblate_auth_group_projects_group_id_project_id_2a91e8e2_uniq UNIQUE (group_id, project_id);


--
-- Name: weblate_auth_group_projects weblate_auth_group_projects_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_projects
    ADD CONSTRAINT weblate_auth_group_projects_pkey PRIMARY KEY (id);


--
-- Name: weblate_auth_group_roles weblate_auth_group_roles_group_id_role_id_9662132c_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_roles
    ADD CONSTRAINT weblate_auth_group_roles_group_id_role_id_9662132c_uniq UNIQUE (group_id, role_id);


--
-- Name: weblate_auth_group_roles weblate_auth_group_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_roles
    ADD CONSTRAINT weblate_auth_group_roles_pkey PRIMARY KEY (id);


--
-- Name: weblate_auth_invitation weblate_auth_invitation_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_invitation
    ADD CONSTRAINT weblate_auth_invitation_pkey PRIMARY KEY (uuid);


--
-- Name: weblate_auth_permission weblate_auth_permission_codename_key; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_permission
    ADD CONSTRAINT weblate_auth_permission_codename_key UNIQUE (codename);


--
-- Name: weblate_auth_permission weblate_auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_permission
    ADD CONSTRAINT weblate_auth_permission_pkey PRIMARY KEY (id);


--
-- Name: weblate_auth_role weblate_auth_role_name_key; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_role
    ADD CONSTRAINT weblate_auth_role_name_key UNIQUE (name);


--
-- Name: weblate_auth_role_permissions weblate_auth_role_permis_role_id_permission_id_58e25e9f_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_role_permissions
    ADD CONSTRAINT weblate_auth_role_permis_role_id_permission_id_58e25e9f_uniq UNIQUE (role_id, permission_id);


--
-- Name: weblate_auth_role_permissions weblate_auth_role_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_role_permissions
    ADD CONSTRAINT weblate_auth_role_permissions_pkey PRIMARY KEY (id);


--
-- Name: weblate_auth_role weblate_auth_role_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_role
    ADD CONSTRAINT weblate_auth_role_pkey PRIMARY KEY (id);


--
-- Name: weblate_auth_user weblate_auth_user_email_aaabd769_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_user
    ADD CONSTRAINT weblate_auth_user_email_aaabd769_uniq UNIQUE (email);


--
-- Name: weblate_auth_user_groups weblate_auth_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_user_groups
    ADD CONSTRAINT weblate_auth_user_groups_pkey PRIMARY KEY (id);


--
-- Name: weblate_auth_user_groups weblate_auth_user_groups_user_id_group_id_16cfc05b_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_user_groups
    ADD CONSTRAINT weblate_auth_user_groups_user_id_group_id_16cfc05b_uniq UNIQUE (user_id, group_id);


--
-- Name: weblate_auth_user weblate_auth_user_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_user
    ADD CONSTRAINT weblate_auth_user_pkey PRIMARY KEY (id);


--
-- Name: weblate_auth_user weblate_auth_user_username_key; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_user
    ADD CONSTRAINT weblate_auth_user_username_key UNIQUE (username);


--
-- Name: weblate_auth_userblock weblate_auth_userblock_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_userblock
    ADD CONSTRAINT weblate_auth_userblock_pkey PRIMARY KEY (id);


--
-- Name: weblate_auth_userblock weblate_auth_userblock_user_id_project_id_7e74a707_uniq; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_userblock
    ADD CONSTRAINT weblate_auth_userblock_user_id_project_id_7e74a707_uniq UNIQUE (user_id, project_id);


--
-- Name: wladmin_backuplog wladmin_backuplog_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.wladmin_backuplog
    ADD CONSTRAINT wladmin_backuplog_pkey PRIMARY KEY (id);


--
-- Name: wladmin_backupservice wladmin_backupservice_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.wladmin_backupservice
    ADD CONSTRAINT wladmin_backupservice_pkey PRIMARY KEY (id);


--
-- Name: wladmin_configurationerror wladmin_configurationerror_name_key; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.wladmin_configurationerror
    ADD CONSTRAINT wladmin_configurationerror_name_key UNIQUE (name);


--
-- Name: wladmin_configurationerror wladmin_configurationerror_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.wladmin_configurationerror
    ADD CONSTRAINT wladmin_configurationerror_pkey PRIMARY KEY (id);


--
-- Name: wladmin_supportstatus wladmin_supportstatus_pkey; Type: CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.wladmin_supportstatus
    ADD CONSTRAINT wladmin_supportstatus_pkey PRIMARY KEY (id);


--
-- Name: accounts_auditlog_activity_8f58593c; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_auditlog_activity_8f58593c ON public.accounts_auditlog USING btree (activity);


--
-- Name: accounts_auditlog_activity_8f58593c_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_auditlog_activity_8f58593c_like ON public.accounts_auditlog USING btree (activity varchar_pattern_ops);


--
-- Name: accounts_auditlog_timestamp_fc82620d; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_auditlog_timestamp_fc82620d ON public.accounts_auditlog USING btree ("timestamp");


--
-- Name: accounts_auditlog_user_id_1dfbca79; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_auditlog_user_id_1dfbca79 ON public.accounts_auditlog USING btree (user_id);


--
-- Name: accounts_profile_commented_8e3a8722; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_profile_commented_8e3a8722 ON public.accounts_profile USING btree (commented);


--
-- Name: accounts_profile_dashboard_component_list_id_4730151f; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_profile_dashboard_component_list_id_4730151f ON public.accounts_profile USING btree (dashboard_component_list_id);


--
-- Name: accounts_profile_languages_language_id_194609ba; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_profile_languages_language_id_194609ba ON public.accounts_profile_languages USING btree (language_id);


--
-- Name: accounts_profile_languages_profile_id_eabf6019; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_profile_languages_profile_id_eabf6019 ON public.accounts_profile_languages USING btree (profile_id);


--
-- Name: accounts_profile_secondary_languages_language_id_e0f1e325; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_profile_secondary_languages_language_id_e0f1e325 ON public.accounts_profile_secondary_languages USING btree (language_id);


--
-- Name: accounts_profile_secondary_languages_profile_id_acf6974e; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_profile_secondary_languages_profile_id_acf6974e ON public.accounts_profile_secondary_languages USING btree (profile_id);


--
-- Name: accounts_profile_suggested_8e0fb145; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_profile_suggested_8e0fb145 ON public.accounts_profile USING btree (suggested);


--
-- Name: accounts_profile_translated_45d8856d; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_profile_translated_45d8856d ON public.accounts_profile USING btree (translated);


--
-- Name: accounts_profile_uploaded_f5223324; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_profile_uploaded_f5223324 ON public.accounts_profile USING btree (uploaded);


--
-- Name: accounts_profile_watched_profile_id_adce7487; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_profile_watched_profile_id_adce7487 ON public.accounts_profile_watched USING btree (profile_id);


--
-- Name: accounts_profile_watched_project_id_b8975f00; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_profile_watched_project_id_b8975f00 ON public.accounts_profile_watched USING btree (project_id);


--
-- Name: accounts_subscription_component_id_f17fa0c7; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_subscription_component_id_f17fa0c7 ON public.accounts_subscription USING btree (component_id);


--
-- Name: accounts_subscription_project_id_0ac0474e; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_subscription_project_id_0ac0474e ON public.accounts_subscription USING btree (project_id);


--
-- Name: accounts_subscription_user_id_980c85f5; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_subscription_user_id_980c85f5 ON public.accounts_subscription USING btree (user_id);


--
-- Name: accounts_verifiedemail_email; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_verifiedemail_email ON public.accounts_verifiedemail USING btree (upper((email)::text));


--
-- Name: accounts_verifiedemail_social_id_c6d8a262; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX accounts_verifiedemail_social_id_c6d8a262 ON public.accounts_verifiedemail USING btree (social_id);


--
-- Name: addons_addon_component_id_87dbd2fc; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX addons_addon_component_id_87dbd2fc ON public.addons_addon USING btree (component_id);


--
-- Name: addons_addon_project_id_d2181050; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX addons_addon_project_id_d2181050 ON public.addons_addon USING btree (project_id);


--
-- Name: addons_addon_repo_scope_20c74be8; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX addons_addon_repo_scope_20c74be8 ON public.addons_addon USING btree (repo_scope);


--
-- Name: addons_addonactivitylog_addon_id_44e38f98; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX addons_addonactivitylog_addon_id_44e38f98 ON public.addons_addonactivitylog USING btree (addon_id);


--
-- Name: addons_addonactivitylog_component_id_baafffdc; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX addons_addonactivitylog_component_id_baafffdc ON public.addons_addonactivitylog USING btree (component_id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- Name: authtoken_token_key_10f0b77e_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX authtoken_token_key_10f0b77e_like ON public.authtoken_token USING btree (key varchar_pattern_ops);


--
-- Name: checks_check_dismissed_a11836a3; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX checks_check_dismissed_a11836a3 ON public.checks_check USING btree (dismissed);


--
-- Name: comment_comment_fulltext; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX comment_comment_fulltext ON public.trans_comment USING gin (comment public.gin_trgm_ops, unit_id);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- Name: django_celery_beat_periodictask_clocked_id_47a69f82; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX django_celery_beat_periodictask_clocked_id_47a69f82 ON public.django_celery_beat_periodictask USING btree (clocked_id);


--
-- Name: django_celery_beat_periodictask_crontab_id_d3cba168; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX django_celery_beat_periodictask_crontab_id_d3cba168 ON public.django_celery_beat_periodictask USING btree (crontab_id);


--
-- Name: django_celery_beat_periodictask_interval_id_a8ca27da; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX django_celery_beat_periodictask_interval_id_a8ca27da ON public.django_celery_beat_periodictask USING btree (interval_id);


--
-- Name: django_celery_beat_periodictask_name_265a36b7_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX django_celery_beat_periodictask_name_265a36b7_like ON public.django_celery_beat_periodictask USING btree (name varchar_pattern_ops);


--
-- Name: django_celery_beat_periodictask_solar_id_a87ce72c; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX django_celery_beat_periodictask_solar_id_a87ce72c ON public.django_celery_beat_periodictask USING btree (solar_id);


--
-- Name: django_otp_webauthn_weba_credential_id_sha256_1a385252_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX django_otp_webauthn_weba_credential_id_sha256_1a385252_like ON public.django_otp_webauthn_webauthncredential USING btree (credential_id_sha256 varchar_pattern_ops);


--
-- Name: django_otp_webauthn_webauthncredential_user_id_023391d8; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX django_otp_webauthn_webauthncredential_user_id_023391d8 ON public.django_otp_webauthn_webauthncredential USING btree (user_id);


--
-- Name: django_otp_webauthn_webauthnuserhandle_handle_hex_ebcf77a1_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX django_otp_webauthn_webauthnuserhandle_handle_hex_ebcf77a1_like ON public.django_otp_webauthn_webauthnuserhandle USING btree (handle_hex varchar_pattern_ops);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: fonts_font_project_id_855704e0; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX fonts_font_project_id_855704e0 ON public.fonts_font USING btree (project_id);


--
-- Name: fonts_font_user_id_5897e323; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX fonts_font_user_id_5897e323 ON public.fonts_font USING btree (user_id);


--
-- Name: fonts_fontgroup_font_id_e4c04e1d; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX fonts_fontgroup_font_id_e4c04e1d ON public.fonts_fontgroup USING btree (font_id);


--
-- Name: fonts_fontgroup_name_cf198a4d; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX fonts_fontgroup_name_cf198a4d ON public.fonts_fontgroup USING btree (name);


--
-- Name: fonts_fontgroup_name_cf198a4d_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX fonts_fontgroup_name_cf198a4d_like ON public.fonts_fontgroup USING btree (name varchar_pattern_ops);


--
-- Name: fonts_fontoverride_font_id_ae703c52; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX fonts_fontoverride_font_id_ae703c52 ON public.fonts_fontoverride USING btree (font_id);


--
-- Name: fonts_fontoverride_language_id_ccb8c819; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX fonts_fontoverride_language_id_ccb8c819 ON public.fonts_fontoverride USING btree (language_id);


--
-- Name: lang_language_code_764a7a1d_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX lang_language_code_764a7a1d_like ON public.lang_language USING btree (code varchar_pattern_ops);


--
-- Name: lang_plural_language_id_b5f4646a; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX lang_plural_language_id_b5f4646a ON public.lang_plural USING btree (language_id);


--
-- Name: memory_from_file; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX memory_from_file ON public.memory_memory USING btree (from_file) WHERE from_file;


--
-- Name: memory_md5_index; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX memory_md5_index ON public.memory_memory USING btree (md5(origin), md5(source), md5(target), source_language_id, target_language_id);


--
-- Name: memory_memory_project_id_f26cda43; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX memory_memory_project_id_f26cda43 ON public.memory_memory USING btree (project_id);


--
-- Name: memory_memory_source_language_id_c53ef4ff; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX memory_memory_source_language_id_c53ef4ff ON public.memory_memory USING btree (source_language_id);


--
-- Name: memory_memory_target_language_id_c44dca3c; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX memory_memory_target_language_id_c44dca3c ON public.memory_memory USING btree (target_language_id);


--
-- Name: memory_memory_user_id_1f05b3bb; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX memory_memory_user_id_1f05b3bb ON public.memory_memory USING btree (user_id);


--
-- Name: memory_source_trgm; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX memory_source_trgm ON public.memory_memory USING gin (source public.gin_trgm_ops, target_language_id, source_language_id);


--
-- Name: otp_static_staticdevice_user_id_7f9cff2b; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX otp_static_staticdevice_user_id_7f9cff2b ON public.otp_static_staticdevice USING btree (user_id);


--
-- Name: otp_static_statictoken_device_id_74b7c7d1; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX otp_static_statictoken_device_id_74b7c7d1 ON public.otp_static_statictoken USING btree (device_id);


--
-- Name: otp_static_statictoken_token_d0a51866; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX otp_static_statictoken_token_d0a51866 ON public.otp_static_statictoken USING btree (token);


--
-- Name: otp_static_statictoken_token_d0a51866_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX otp_static_statictoken_token_d0a51866_like ON public.otp_static_statictoken USING btree (token varchar_pattern_ops);


--
-- Name: otp_totp_totpdevice_user_id_0fb18292; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX otp_totp_totpdevice_user_id_0fb18292 ON public.otp_totp_totpdevice USING btree (user_id);


--
-- Name: screenshots_screenshot_translation_id_3b239850; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX screenshots_screenshot_translation_id_3b239850 ON public.screenshots_screenshot USING btree (translation_id);


--
-- Name: screenshots_screenshot_units_screenshot_id_03db0a11; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX screenshots_screenshot_units_screenshot_id_03db0a11 ON public.screenshots_screenshot_units USING btree (screenshot_id);


--
-- Name: screenshots_screenshot_units_unit_id_2b24914f; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX screenshots_screenshot_units_unit_id_2b24914f ON public.screenshots_screenshot_units USING btree (unit_id);


--
-- Name: screenshots_screenshot_user_id_9350e149; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX screenshots_screenshot_user_id_9350e149 ON public.screenshots_screenshot USING btree (user_id);


--
-- Name: social_auth_code_code_a2393167; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX social_auth_code_code_a2393167 ON public.social_auth_code USING btree (code);


--
-- Name: social_auth_code_code_a2393167_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX social_auth_code_code_a2393167_like ON public.social_auth_code USING btree (code varchar_pattern_ops);


--
-- Name: social_auth_code_timestamp_176b341f; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX social_auth_code_timestamp_176b341f ON public.social_auth_code USING btree ("timestamp");


--
-- Name: social_auth_partial_timestamp_50f2119f; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX social_auth_partial_timestamp_50f2119f ON public.social_auth_partial USING btree ("timestamp");


--
-- Name: social_auth_partial_token_3017fea3; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX social_auth_partial_token_3017fea3 ON public.social_auth_partial USING btree (token);


--
-- Name: social_auth_partial_token_3017fea3_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX social_auth_partial_token_3017fea3_like ON public.social_auth_partial USING btree (token varchar_pattern_ops);


--
-- Name: social_auth_usersocialauth_uid_796e51dc; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX social_auth_usersocialauth_uid_796e51dc ON public.social_auth_usersocialauth USING btree (uid);


--
-- Name: social_auth_usersocialauth_uid_796e51dc_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX social_auth_usersocialauth_uid_796e51dc_like ON public.social_auth_usersocialauth USING btree (uid varchar_pattern_ops);


--
-- Name: social_auth_usersocialauth_user_id_17d28448; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX social_auth_usersocialauth_user_id_17d28448 ON public.social_auth_usersocialauth USING btree (user_id);


--
-- Name: suggestion_target_fulltext; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX suggestion_target_fulltext ON public.trans_suggestion USING gin (target public.gin_trgm_ops, unit_id);


--
-- Name: trans_alert_dismissed_93e9b793; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_alert_dismissed_93e9b793 ON public.trans_alert USING btree (dismissed);


--
-- Name: trans_announcement_category_id_913f87b9; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_announcement_category_id_913f87b9 ON public.trans_announcement USING btree (category_id);


--
-- Name: trans_announcement_component_id_72695410; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_announcement_component_id_72695410 ON public.trans_announcement USING btree (component_id);


--
-- Name: trans_announcement_expiry_a06d62a1; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_announcement_expiry_a06d62a1 ON public.trans_announcement USING btree (expiry);


--
-- Name: trans_announcement_language_id_f5f7a357; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_announcement_language_id_f5f7a357 ON public.trans_announcement USING btree (language_id);


--
-- Name: trans_announcement_project_id_3713e8a9; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_announcement_project_id_3713e8a9 ON public.trans_announcement USING btree (project_id);


--
-- Name: trans_autocomponentlist_componentlist_id_9ff87f21; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_autocomponentlist_componentlist_id_9ff87f21 ON public.trans_autocomponentlist USING btree (componentlist_id);


--
-- Name: trans_category_category_id_0f21e824; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_category_category_id_0f21e824 ON public.trans_category USING btree (category_id);


--
-- Name: trans_category_project_id_7dc717ed; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_category_project_id_7dc717ed ON public.trans_category USING btree (project_id);


--
-- Name: trans_category_slug_52f13beb; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_category_slug_52f13beb ON public.trans_category USING btree (slug);


--
-- Name: trans_category_slug_52f13beb_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_category_slug_52f13beb_like ON public.trans_category USING btree (slug varchar_pattern_ops);


--
-- Name: trans_change_action_idx; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_change_action_idx ON public.trans_change USING btree ("timestamp" DESC, action);


--
-- Name: trans_change_alert_id_34808078; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_change_alert_id_34808078 ON public.trans_change USING btree (alert_id);


--
-- Name: trans_change_announcement_id_1ad27981; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_change_announcement_id_1ad27981 ON public.trans_change USING btree (announcement_id);


--
-- Name: trans_change_category_idx; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_change_category_idx ON public.trans_change USING btree (category_id, "timestamp" DESC, action) WHERE (category_id IS NOT NULL);


--
-- Name: trans_change_comment_id_9702b436; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_change_comment_id_9702b436 ON public.trans_change USING btree (comment_id);


--
-- Name: trans_change_component_idx; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_change_component_idx ON public.trans_change USING btree (component_id, "timestamp" DESC, action) WHERE (component_id IS NOT NULL);


--
-- Name: trans_change_language_idx; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_change_language_idx ON public.trans_change USING btree (language_id, "timestamp" DESC, action) WHERE (language_id IS NOT NULL);


--
-- Name: trans_change_prj_language_idx; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_change_prj_language_idx ON public.trans_change USING btree (project_id, language_id, "timestamp" DESC, action) WHERE ((project_id IS NOT NULL) AND (language_id IS NOT NULL));


--
-- Name: trans_change_project_idx; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_change_project_idx ON public.trans_change USING btree (project_id, "timestamp" DESC, action) WHERE (project_id IS NOT NULL);


--
-- Name: trans_change_screenshot_id_ebbee35e; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_change_screenshot_id_ebbee35e ON public.trans_change USING btree (screenshot_id);


--
-- Name: trans_change_suggestion_id_0e61f1cb; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_change_suggestion_id_0e61f1cb ON public.trans_change USING btree (suggestion_id);


--
-- Name: trans_change_translation_idx; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_change_translation_idx ON public.trans_change USING btree (translation_id, "timestamp" DESC, action) WHERE (translation_id IS NOT NULL);


--
-- Name: trans_change_unit_idx; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_change_unit_idx ON public.trans_change USING btree (unit_id, "timestamp" DESC, action) WHERE (unit_id IS NOT NULL);


--
-- Name: trans_change_user_id_8d1225f9; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_change_user_id_8d1225f9 ON public.trans_change USING btree (user_id);


--
-- Name: trans_change_user_idx; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_change_user_idx ON public.trans_change USING btree (user_id, "timestamp" DESC, action);


--
-- Name: trans_comment_resolved_81cae7f4; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_comment_resolved_81cae7f4 ON public.trans_comment USING btree (resolved);


--
-- Name: trans_comment_timestamp_1148a5ab; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_comment_timestamp_1148a5ab ON public.trans_comment USING btree ("timestamp");


--
-- Name: trans_comment_unit_id_73ca7c89; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_comment_unit_id_73ca7c89 ON public.trans_comment USING btree (unit_id);


--
-- Name: trans_comment_user_id_c2f200eb; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_comment_user_id_c2f200eb ON public.trans_comment USING btree (user_id);


--
-- Name: trans_compo_project_d044e1_idx; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_compo_project_d044e1_idx ON public.trans_component USING btree (project_id, allow_translation_propagation);


--
-- Name: trans_component_category_id_7c9c5306; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_component_category_id_7c9c5306 ON public.trans_component USING btree (category_id);


--
-- Name: trans_component_is_glossary_b4b922b7; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_component_is_glossary_b4b922b7 ON public.trans_component USING btree (is_glossary);


--
-- Name: trans_component_linked_component_id_82b0de9e; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_component_linked_component_id_82b0de9e ON public.trans_component USING btree (linked_component_id);


--
-- Name: trans_component_links_component_id_2342af45; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_component_links_component_id_2342af45 ON public.trans_component_links USING btree (component_id);


--
-- Name: trans_component_links_project_id_840f1e11; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_component_links_project_id_840f1e11 ON public.trans_component_links USING btree (project_id);


--
-- Name: trans_component_restricted_ec682d06; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_component_restricted_ec682d06 ON public.trans_component USING btree (restricted);


--
-- Name: trans_component_secondary_language_id_496a8d45; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_component_secondary_language_id_496a8d45 ON public.trans_component USING btree (secondary_language_id);


--
-- Name: trans_component_slug_5bd48be1; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_component_slug_5bd48be1 ON public.trans_component USING btree (slug);


--
-- Name: trans_component_slug_5bd48be1_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_component_slug_5bd48be1_like ON public.trans_component USING btree (slug varchar_pattern_ops);


--
-- Name: trans_component_source_language_id_2610b49e; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_component_source_language_id_2610b49e ON public.trans_component USING btree (source_language_id);


--
-- Name: trans_componentlist_components_component_id_5642ff5c; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_componentlist_components_component_id_5642ff5c ON public.trans_componentlist_components USING btree (component_id);


--
-- Name: trans_componentlist_components_componentlist_id_44d9ba8f; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_componentlist_components_componentlist_id_44d9ba8f ON public.trans_componentlist_components USING btree (componentlist_id);


--
-- Name: trans_componentlist_name_93196759_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_componentlist_name_93196759_like ON public.trans_componentlist USING btree (name varchar_pattern_ops);


--
-- Name: trans_componentlist_show_dashboard_1394f78f; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_componentlist_show_dashboard_1394f78f ON public.trans_componentlist USING btree (show_dashboard);


--
-- Name: trans_componentlist_slug_05ac37c2_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_componentlist_slug_05ac37c2_like ON public.trans_componentlist USING btree (slug varchar_pattern_ops);


--
-- Name: trans_contributoragreement_component_id_31bafbef; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_contributoragreement_component_id_31bafbef ON public.trans_contributoragreement USING btree (component_id);


--
-- Name: trans_pendingunitchange_author_id_38073ef3; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_pendingunitchange_author_id_38073ef3 ON public.trans_pendingunitchange USING btree (author_id);


--
-- Name: trans_pendingunitchange_state_bbbe001f; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_pendingunitchange_state_bbbe001f ON public.trans_pendingunitchange USING btree (state);


--
-- Name: trans_pendingunitchange_timestamp_1f1271fd; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_pendingunitchange_timestamp_1f1271fd ON public.trans_pendingunitchange USING btree ("timestamp");


--
-- Name: trans_pendingunitchange_unit_id_eda769c3; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_pendingunitchange_unit_id_eda769c3 ON public.trans_pendingunitchange USING btree (unit_id);


--
-- Name: trans_project_access_control_c17e787a; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_project_access_control_c17e787a ON public.trans_project USING btree (access_control);


--
-- Name: trans_project_name_a3285a23_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_project_name_a3285a23_like ON public.trans_project USING btree (name varchar_pattern_ops);


--
-- Name: trans_project_secondary_language_id_57e84b09; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_project_secondary_language_id_57e84b09 ON public.trans_project USING btree (secondary_language_id);


--
-- Name: trans_project_slug_77cd973b_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_project_slug_77cd973b_like ON public.trans_project USING btree (slug varchar_pattern_ops);


--
-- Name: trans_suggestion_unit_id_eb46fceb; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_suggestion_unit_id_eb46fceb ON public.trans_suggestion USING btree (unit_id);


--
-- Name: trans_suggestion_user_id_69ce0c2b; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_suggestion_user_id_69ce0c2b ON public.trans_suggestion USING btree (user_id);


--
-- Name: trans_translation_language_id_030f0b30; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_translation_language_id_030f0b30 ON public.trans_translation USING btree (language_id);


--
-- Name: trans_translation_plural_id_5cf36dc7; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_translation_plural_id_5cf36dc7 ON public.trans_translation USING btree (plural_id);


--
-- Name: trans_unit_automatically_translated_96d2b31d; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_unit_automatically_translated_96d2b31d ON public.trans_unit USING btree (automatically_translated);


--
-- Name: trans_unit_context_md5; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_unit_context_md5 ON public.trans_unit USING btree (md5(lower(context)), translation_id);


--
-- Name: trans_unit_labels_label_id_4ca92ebd; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_unit_labels_label_id_4ca92ebd ON public.trans_unit_labels USING btree (label_id);


--
-- Name: trans_unit_labels_unit_id_a3c2ddc5; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_unit_labels_unit_id_a3c2ddc5 ON public.trans_unit_labels USING btree (unit_id);


--
-- Name: trans_unit_source_md5; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_unit_source_md5 ON public.trans_unit USING btree (md5(lower(source)), translation_id);


--
-- Name: trans_unit_source_unit_id_7a735f87; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_unit_source_unit_id_7a735f87 ON public.trans_unit USING btree (source_unit_id);


--
-- Name: trans_unit_target_md5; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_unit_target_md5 ON public.trans_unit USING btree (md5(lower(target)), translation_id);


--
-- Name: trans_unit_variant_id_c3315c70; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_unit_variant_id_c3315c70 ON public.trans_unit USING btree (variant_id);


--
-- Name: trans_variant_defining_units_unit_id_f692977b; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_variant_defining_units_unit_id_f692977b ON public.trans_variant_defining_units USING btree (unit_id);


--
-- Name: trans_variant_defining_units_variant_id_20848c13; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_variant_defining_units_variant_id_20848c13 ON public.trans_variant_defining_units USING btree (variant_id);


--
-- Name: trans_vote_user_id_86a644fd; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_vote_user_id_86a644fd ON public.trans_vote USING btree (user_id);


--
-- Name: trans_workflowsetting_language_id_fcb1fa15; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_workflowsetting_language_id_fcb1fa15 ON public.trans_workflowsetting USING btree (language_id);


--
-- Name: trans_workflowsetting_project_id_32daa6c8; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX trans_workflowsetting_project_id_32daa6c8 ON public.trans_workflowsetting USING btree (project_id);


--
-- Name: unit_context_fulltext; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX unit_context_fulltext ON public.trans_unit USING gin (context public.gin_trgm_ops, translation_id);


--
-- Name: unit_explanation_fulltext; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX unit_explanation_fulltext ON public.trans_unit USING gin (explanation public.gin_trgm_ops, translation_id);


--
-- Name: unit_location_fulltext; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX unit_location_fulltext ON public.trans_unit USING gin (location public.gin_trgm_ops, translation_id);


--
-- Name: unit_note_fulltext; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX unit_note_fulltext ON public.trans_unit USING gin (note public.gin_trgm_ops, translation_id);


--
-- Name: unit_source_fulltext; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX unit_source_fulltext ON public.trans_unit USING gin (source public.gin_trgm_ops, translation_id);


--
-- Name: unit_target_fulltext; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX unit_target_fulltext ON public.trans_unit USING gin (target public.gin_trgm_ops, translation_id);


--
-- Name: webauthncredential_sha256_idx; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX webauthncredential_sha256_idx ON public.django_otp_webauthn_webauthncredential USING btree (credential_id_sha256);


--
-- Name: weblate_auth_autogroup_group_id_37b7ff0b; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_autogroup_group_id_37b7ff0b ON public.weblate_auth_autogroup USING btree (group_id);


--
-- Name: weblate_auth_group_admins_group_id_fa29ae29; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_group_admins_group_id_fa29ae29 ON public.weblate_auth_group_admins USING btree (group_id);


--
-- Name: weblate_auth_group_admins_user_id_f5851c1b; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_group_admins_user_id_f5851c1b ON public.weblate_auth_group_admins USING btree (user_id);


--
-- Name: weblate_auth_group_componentlists_componentlist_id_b59f8fe9; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_group_componentlists_componentlist_id_b59f8fe9 ON public.weblate_auth_group_componentlists USING btree (componentlist_id);


--
-- Name: weblate_auth_group_componentlists_group_id_7af40eb9; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_group_componentlists_group_id_7af40eb9 ON public.weblate_auth_group_componentlists USING btree (group_id);


--
-- Name: weblate_auth_group_components_component_id_2b53d012; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_group_components_component_id_2b53d012 ON public.weblate_auth_group_components USING btree (component_id);


--
-- Name: weblate_auth_group_components_group_id_a07e20aa; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_group_components_group_id_a07e20aa ON public.weblate_auth_group_components USING btree (group_id);


--
-- Name: weblate_auth_group_defining_project_id_b2ad81a7; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_group_defining_project_id_b2ad81a7 ON public.weblate_auth_group USING btree (defining_project_id);


--
-- Name: weblate_auth_group_languages_group_id_aa12d0a6; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_group_languages_group_id_aa12d0a6 ON public.weblate_auth_group_languages USING btree (group_id);


--
-- Name: weblate_auth_group_languages_language_id_4b7f5d81; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_group_languages_language_id_4b7f5d81 ON public.weblate_auth_group_languages USING btree (language_id);


--
-- Name: weblate_auth_group_projects_group_id_f713a220; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_group_projects_group_id_f713a220 ON public.weblate_auth_group_projects USING btree (group_id);


--
-- Name: weblate_auth_group_projects_project_id_26b8e2b6; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_group_projects_project_id_26b8e2b6 ON public.weblate_auth_group_projects USING btree (project_id);


--
-- Name: weblate_auth_group_roles_group_id_ed18f8d0; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_group_roles_group_id_ed18f8d0 ON public.weblate_auth_group_roles USING btree (group_id);


--
-- Name: weblate_auth_group_roles_role_id_de6300ca; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_group_roles_role_id_de6300ca ON public.weblate_auth_group_roles USING btree (role_id);


--
-- Name: weblate_auth_invitation_author_id_a713ef92; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_invitation_author_id_a713ef92 ON public.weblate_auth_invitation USING btree (author_id);


--
-- Name: weblate_auth_invitation_group_id_07a52aff; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_invitation_group_id_07a52aff ON public.weblate_auth_invitation USING btree (group_id);


--
-- Name: weblate_auth_invitation_user_id_6a0c6dec; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_invitation_user_id_6a0c6dec ON public.weblate_auth_invitation USING btree (user_id);


--
-- Name: weblate_auth_permission_codename_b551931f_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_permission_codename_b551931f_like ON public.weblate_auth_permission USING btree (codename varchar_pattern_ops);


--
-- Name: weblate_auth_role_name_97854f8d_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_role_name_97854f8d_like ON public.weblate_auth_role USING btree (name varchar_pattern_ops);


--
-- Name: weblate_auth_role_permissions_permission_id_d0650152; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_role_permissions_permission_id_d0650152 ON public.weblate_auth_role_permissions USING btree (permission_id);


--
-- Name: weblate_auth_role_permissions_role_id_fa163124; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_role_permissions_role_id_fa163124 ON public.weblate_auth_role_permissions USING btree (role_id);


--
-- Name: weblate_auth_user_email_aaabd769_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_user_email_aaabd769_like ON public.weblate_auth_user USING btree (email varchar_pattern_ops);


--
-- Name: weblate_auth_user_email_ci; Type: INDEX; Schema: public; Owner: weblate
--

CREATE UNIQUE INDEX weblate_auth_user_email_ci ON public.weblate_auth_user USING btree (upper((email)::text));


--
-- Name: weblate_auth_user_groups_group_id_48c0a977; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_user_groups_group_id_48c0a977 ON public.weblate_auth_user_groups USING btree (group_id);


--
-- Name: weblate_auth_user_groups_user_id_37e61ff1; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_user_groups_user_id_37e61ff1 ON public.weblate_auth_user_groups USING btree (user_id);


--
-- Name: weblate_auth_user_is_bot_f4b1c6fb; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_user_is_bot_f4b1c6fb ON public.weblate_auth_user USING btree (is_bot);


--
-- Name: weblate_auth_user_username_ci; Type: INDEX; Schema: public; Owner: weblate
--

CREATE UNIQUE INDEX weblate_auth_user_username_ci ON public.weblate_auth_user USING btree (upper((username)::text));


--
-- Name: weblate_auth_user_username_d226e4a0_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_user_username_d226e4a0_like ON public.weblate_auth_user USING btree (username varchar_pattern_ops);


--
-- Name: weblate_auth_userblock_project_id_44aae0be; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX weblate_auth_userblock_project_id_44aae0be ON public.weblate_auth_userblock USING btree (project_id);


--
-- Name: wladmin_backuplog_event_fbf23e08; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX wladmin_backuplog_event_fbf23e08 ON public.wladmin_backuplog USING btree (event);


--
-- Name: wladmin_backuplog_event_fbf23e08_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX wladmin_backuplog_event_fbf23e08_like ON public.wladmin_backuplog USING btree (event varchar_pattern_ops);


--
-- Name: wladmin_backuplog_service_id_10292c2d; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX wladmin_backuplog_service_id_10292c2d ON public.wladmin_backuplog USING btree (service_id);


--
-- Name: wladmin_con_ignored_fb498d_idx; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX wladmin_con_ignored_fb498d_idx ON public.wladmin_configurationerror USING btree (ignored, "timestamp");


--
-- Name: wladmin_configurationerror_ignored_8a22575f; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX wladmin_configurationerror_ignored_8a22575f ON public.wladmin_configurationerror USING btree (ignored);


--
-- Name: wladmin_configurationerror_name_99ad2168_like; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX wladmin_configurationerror_name_99ad2168_like ON public.wladmin_configurationerror USING btree (name varchar_pattern_ops);


--
-- Name: wladmin_supportstatus_enabled_fbe08b47; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX wladmin_supportstatus_enabled_fbe08b47 ON public.wladmin_supportstatus USING btree (enabled);


--
-- Name: wladmin_supportstatus_expiry_2855a549; Type: INDEX; Schema: public; Owner: weblate
--

CREATE INDEX wladmin_supportstatus_expiry_2855a549 ON public.wladmin_supportstatus USING btree (expiry);


--
-- Name: accounts_auditlog accounts_auditlog_user_id_1dfbca79_fk_weblate_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_auditlog
    ADD CONSTRAINT accounts_auditlog_user_id_1dfbca79_fk_weblate_auth_user_id FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_profile accounts_profile_dashboard_component__4730151f_fk_trans_com; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_profile
    ADD CONSTRAINT accounts_profile_dashboard_component__4730151f_fk_trans_com FOREIGN KEY (dashboard_component_list_id) REFERENCES public.trans_componentlist(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_profile_languages accounts_profile_lan_language_id_194609ba_fk_lang_lang; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_profile_languages
    ADD CONSTRAINT accounts_profile_lan_language_id_194609ba_fk_lang_lang FOREIGN KEY (language_id) REFERENCES public.lang_language(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_profile_languages accounts_profile_lan_profile_id_eabf6019_fk_accounts_; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_profile_languages
    ADD CONSTRAINT accounts_profile_lan_profile_id_eabf6019_fk_accounts_ FOREIGN KEY (profile_id) REFERENCES public.accounts_profile(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_profile_secondary_languages accounts_profile_sec_language_id_e0f1e325_fk_lang_lang; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_profile_secondary_languages
    ADD CONSTRAINT accounts_profile_sec_language_id_e0f1e325_fk_lang_lang FOREIGN KEY (language_id) REFERENCES public.lang_language(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_profile_secondary_languages accounts_profile_sec_profile_id_acf6974e_fk_accounts_; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_profile_secondary_languages
    ADD CONSTRAINT accounts_profile_sec_profile_id_acf6974e_fk_accounts_ FOREIGN KEY (profile_id) REFERENCES public.accounts_profile(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_profile accounts_profile_user_id_49a85d32_fk_weblate_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_profile
    ADD CONSTRAINT accounts_profile_user_id_49a85d32_fk_weblate_auth_user_id FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_profile_watched accounts_profile_wat_profile_id_adce7487_fk_accounts_; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_profile_watched
    ADD CONSTRAINT accounts_profile_wat_profile_id_adce7487_fk_accounts_ FOREIGN KEY (profile_id) REFERENCES public.accounts_profile(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_profile_watched accounts_profile_wat_project_id_b8975f00_fk_trans_pro; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_profile_watched
    ADD CONSTRAINT accounts_profile_wat_project_id_b8975f00_fk_trans_pro FOREIGN KEY (project_id) REFERENCES public.trans_project(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_subscription accounts_subscriptio_component_id_f17fa0c7_fk_trans_com; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_subscription
    ADD CONSTRAINT accounts_subscriptio_component_id_f17fa0c7_fk_trans_com FOREIGN KEY (component_id) REFERENCES public.trans_component(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_subscription accounts_subscription_project_id_0ac0474e_fk_trans_project_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_subscription
    ADD CONSTRAINT accounts_subscription_project_id_0ac0474e_fk_trans_project_id FOREIGN KEY (project_id) REFERENCES public.trans_project(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_subscription accounts_subscription_user_id_980c85f5_fk_weblate_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_subscription
    ADD CONSTRAINT accounts_subscription_user_id_980c85f5_fk_weblate_auth_user_id FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_verifiedemail accounts_verifiedemail_social_id_c6d8a262_fk; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.accounts_verifiedemail
    ADD CONSTRAINT accounts_verifiedemail_social_id_c6d8a262_fk FOREIGN KEY (social_id) REFERENCES public.social_auth_usersocialauth(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: addons_addon addons_addon_component_id_87dbd2fc_fk_trans_component_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.addons_addon
    ADD CONSTRAINT addons_addon_component_id_87dbd2fc_fk_trans_component_id FOREIGN KEY (component_id) REFERENCES public.trans_component(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: addons_addon addons_addon_project_id_d2181050_fk_trans_project_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.addons_addon
    ADD CONSTRAINT addons_addon_project_id_d2181050_fk_trans_project_id FOREIGN KEY (project_id) REFERENCES public.trans_project(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: addons_addonactivitylog addons_addonactivity_component_id_baafffdc_fk_trans_com; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.addons_addonactivitylog
    ADD CONSTRAINT addons_addonactivity_component_id_baafffdc_fk_trans_com FOREIGN KEY (component_id) REFERENCES public.trans_component(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: addons_addonactivitylog addons_addonactivitylog_addon_id_44e38f98_fk_addons_addon_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.addons_addonactivitylog
    ADD CONSTRAINT addons_addonactivitylog_addon_id_44e38f98_fk_addons_addon_id FOREIGN KEY (addon_id) REFERENCES public.addons_addon(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: addons_event addons_event_addon_id_66d8d06c_fk_addons_addon_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.addons_event
    ADD CONSTRAINT addons_event_addon_id_66d8d06c_fk_addons_addon_id FOREIGN KEY (addon_id) REFERENCES public.addons_addon(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: authtoken_token authtoken_token_user_id_35299eff_fk_weblate_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.authtoken_token
    ADD CONSTRAINT authtoken_token_user_id_35299eff_fk_weblate_auth_user_id FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: checks_check checks_check_unit_id_c312ecef_fk_trans_unit_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.checks_check
    ADD CONSTRAINT checks_check_unit_id_c312ecef_fk_trans_unit_id FOREIGN KEY (unit_id) REFERENCES public.trans_unit(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_weblate_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_weblate_auth_user_id FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_celery_beat_periodictask django_celery_beat_p_clocked_id_47a69f82_fk_django_ce; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_celery_beat_periodictask
    ADD CONSTRAINT django_celery_beat_p_clocked_id_47a69f82_fk_django_ce FOREIGN KEY (clocked_id) REFERENCES public.django_celery_beat_clockedschedule(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_celery_beat_periodictask django_celery_beat_p_crontab_id_d3cba168_fk_django_ce; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_celery_beat_periodictask
    ADD CONSTRAINT django_celery_beat_p_crontab_id_d3cba168_fk_django_ce FOREIGN KEY (crontab_id) REFERENCES public.django_celery_beat_crontabschedule(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_celery_beat_periodictask django_celery_beat_p_interval_id_a8ca27da_fk_django_ce; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_celery_beat_periodictask
    ADD CONSTRAINT django_celery_beat_p_interval_id_a8ca27da_fk_django_ce FOREIGN KEY (interval_id) REFERENCES public.django_celery_beat_intervalschedule(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_celery_beat_periodictask django_celery_beat_p_solar_id_a87ce72c_fk_django_ce; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_celery_beat_periodictask
    ADD CONSTRAINT django_celery_beat_p_solar_id_a87ce72c_fk_django_ce FOREIGN KEY (solar_id) REFERENCES public.django_celery_beat_solarschedule(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_otp_webauthn_webauthnattestation django_otp_webauthn__credential_id_b2e6f7e8_fk_django_ot; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_otp_webauthn_webauthnattestation
    ADD CONSTRAINT django_otp_webauthn__credential_id_b2e6f7e8_fk_django_ot FOREIGN KEY (credential_id) REFERENCES public.django_otp_webauthn_webauthncredential(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_otp_webauthn_webauthncredential django_otp_webauthn__user_id_023391d8_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_otp_webauthn_webauthncredential
    ADD CONSTRAINT django_otp_webauthn__user_id_023391d8_fk_weblate_a FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_otp_webauthn_webauthnuserhandle django_otp_webauthn__user_id_47f479ce_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.django_otp_webauthn_webauthnuserhandle
    ADD CONSTRAINT django_otp_webauthn__user_id_47f479ce_fk_weblate_a FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: fonts_font fonts_font_project_id_855704e0_fk_trans_project_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.fonts_font
    ADD CONSTRAINT fonts_font_project_id_855704e0_fk_trans_project_id FOREIGN KEY (project_id) REFERENCES public.trans_project(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: fonts_font fonts_font_user_id_5897e323_fk_weblate_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.fonts_font
    ADD CONSTRAINT fonts_font_user_id_5897e323_fk_weblate_auth_user_id FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: fonts_fontgroup fonts_fontgroup_font_id_e4c04e1d_fk_fonts_font_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.fonts_fontgroup
    ADD CONSTRAINT fonts_fontgroup_font_id_e4c04e1d_fk_fonts_font_id FOREIGN KEY (font_id) REFERENCES public.fonts_font(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: fonts_fontgroup fonts_fontgroup_project_id_5d47adf5_fk_trans_project_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.fonts_fontgroup
    ADD CONSTRAINT fonts_fontgroup_project_id_5d47adf5_fk_trans_project_id FOREIGN KEY (project_id) REFERENCES public.trans_project(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: fonts_fontoverride fonts_fontoverride_font_id_ae703c52_fk_fonts_font_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.fonts_fontoverride
    ADD CONSTRAINT fonts_fontoverride_font_id_ae703c52_fk_fonts_font_id FOREIGN KEY (font_id) REFERENCES public.fonts_font(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: fonts_fontoverride fonts_fontoverride_group_id_cab65c09_fk_fonts_fontgroup_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.fonts_fontoverride
    ADD CONSTRAINT fonts_fontoverride_group_id_cab65c09_fk_fonts_fontgroup_id FOREIGN KEY (group_id) REFERENCES public.fonts_fontgroup(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: fonts_fontoverride fonts_fontoverride_language_id_ccb8c819_fk_lang_language_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.fonts_fontoverride
    ADD CONSTRAINT fonts_fontoverride_language_id_ccb8c819_fk_lang_language_id FOREIGN KEY (language_id) REFERENCES public.lang_language(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: lang_plural lang_plural_language_id_b5f4646a_fk_lang_language_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.lang_plural
    ADD CONSTRAINT lang_plural_language_id_b5f4646a_fk_lang_language_id FOREIGN KEY (language_id) REFERENCES public.lang_language(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: memory_memory memory_memory_project_id_f26cda43_fk_trans_project_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.memory_memory
    ADD CONSTRAINT memory_memory_project_id_f26cda43_fk_trans_project_id FOREIGN KEY (project_id) REFERENCES public.trans_project(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: memory_memory memory_memory_source_language_id_c53ef4ff_fk_lang_language_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.memory_memory
    ADD CONSTRAINT memory_memory_source_language_id_c53ef4ff_fk_lang_language_id FOREIGN KEY (source_language_id) REFERENCES public.lang_language(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: memory_memory memory_memory_target_language_id_c44dca3c_fk_lang_language_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.memory_memory
    ADD CONSTRAINT memory_memory_target_language_id_c44dca3c_fk_lang_language_id FOREIGN KEY (target_language_id) REFERENCES public.lang_language(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: memory_memory memory_memory_user_id_1f05b3bb_fk_weblate_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.memory_memory
    ADD CONSTRAINT memory_memory_user_id_1f05b3bb_fk_weblate_auth_user_id FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: otp_static_staticdevice otp_static_staticdev_user_id_7f9cff2b_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.otp_static_staticdevice
    ADD CONSTRAINT otp_static_staticdev_user_id_7f9cff2b_fk_weblate_a FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: otp_static_statictoken otp_static_statictok_device_id_74b7c7d1_fk_otp_stati; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.otp_static_statictoken
    ADD CONSTRAINT otp_static_statictok_device_id_74b7c7d1_fk_otp_stati FOREIGN KEY (device_id) REFERENCES public.otp_static_staticdevice(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: otp_totp_totpdevice otp_totp_totpdevice_user_id_0fb18292_fk_weblate_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.otp_totp_totpdevice
    ADD CONSTRAINT otp_totp_totpdevice_user_id_0fb18292_fk_weblate_auth_user_id FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: screenshots_screenshot_units screenshots_screensh_screenshot_id_03db0a11_fk_screensho; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.screenshots_screenshot_units
    ADD CONSTRAINT screenshots_screensh_screenshot_id_03db0a11_fk_screensho FOREIGN KEY (screenshot_id) REFERENCES public.screenshots_screenshot(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: screenshots_screenshot screenshots_screensh_translation_id_3b239850_fk_trans_tra; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.screenshots_screenshot
    ADD CONSTRAINT screenshots_screensh_translation_id_3b239850_fk_trans_tra FOREIGN KEY (translation_id) REFERENCES public.trans_translation(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: screenshots_screenshot_units screenshots_screenshot_units_unit_id_2b24914f_fk_trans_unit_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.screenshots_screenshot_units
    ADD CONSTRAINT screenshots_screenshot_units_unit_id_2b24914f_fk_trans_unit_id FOREIGN KEY (unit_id) REFERENCES public.trans_unit(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: screenshots_screenshot screenshots_screenshot_user_id_9350e149_fk_weblate_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.screenshots_screenshot
    ADD CONSTRAINT screenshots_screenshot_user_id_9350e149_fk_weblate_auth_user_id FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: social_auth_usersocialauth social_auth_usersoci_user_id_17d28448_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.social_auth_usersocialauth
    ADD CONSTRAINT social_auth_usersoci_user_id_17d28448_fk_weblate_a FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_alert trans_alert_component_id_e9bdfacb_fk_trans_component_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_alert
    ADD CONSTRAINT trans_alert_component_id_e9bdfacb_fk_trans_component_id FOREIGN KEY (component_id) REFERENCES public.trans_component(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_announcement trans_announcement_category_id_913f87b9_fk_trans_category_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_announcement
    ADD CONSTRAINT trans_announcement_category_id_913f87b9_fk_trans_category_id FOREIGN KEY (category_id) REFERENCES public.trans_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_announcement trans_announcement_component_id_72695410_fk_trans_component_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_announcement
    ADD CONSTRAINT trans_announcement_component_id_72695410_fk_trans_component_id FOREIGN KEY (component_id) REFERENCES public.trans_component(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_announcement trans_announcement_language_id_f5f7a357_fk_lang_language_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_announcement
    ADD CONSTRAINT trans_announcement_language_id_f5f7a357_fk_lang_language_id FOREIGN KEY (language_id) REFERENCES public.lang_language(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_announcement trans_announcement_project_id_3713e8a9_fk_trans_project_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_announcement
    ADD CONSTRAINT trans_announcement_project_id_3713e8a9_fk_trans_project_id FOREIGN KEY (project_id) REFERENCES public.trans_project(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_autocomponentlist trans_autocomponentl_componentlist_id_9ff87f21_fk_trans_com; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_autocomponentlist
    ADD CONSTRAINT trans_autocomponentl_componentlist_id_9ff87f21_fk_trans_com FOREIGN KEY (componentlist_id) REFERENCES public.trans_componentlist(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_category trans_category_category_id_0f21e824_fk_trans_category_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_category
    ADD CONSTRAINT trans_category_category_id_0f21e824_fk_trans_category_id FOREIGN KEY (category_id) REFERENCES public.trans_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_category trans_category_project_id_7dc717ed_fk_trans_project_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_category
    ADD CONSTRAINT trans_category_project_id_7dc717ed_fk_trans_project_id FOREIGN KEY (project_id) REFERENCES public.trans_project(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_change trans_change_alert_id_34808078_fk_trans_alert_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_change
    ADD CONSTRAINT trans_change_alert_id_34808078_fk_trans_alert_id FOREIGN KEY (alert_id) REFERENCES public.trans_alert(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_change trans_change_announcement_id_1ad27981_fk_trans_announcement_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_change
    ADD CONSTRAINT trans_change_announcement_id_1ad27981_fk_trans_announcement_id FOREIGN KEY (announcement_id) REFERENCES public.trans_announcement(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_change trans_change_author_id_09329d48_fk_weblate_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_change
    ADD CONSTRAINT trans_change_author_id_09329d48_fk_weblate_auth_user_id FOREIGN KEY (author_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_change trans_change_category_id_436958e0_fk_trans_category_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_change
    ADD CONSTRAINT trans_change_category_id_436958e0_fk_trans_category_id FOREIGN KEY (category_id) REFERENCES public.trans_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_change trans_change_comment_id_9702b436_fk_trans_comment_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_change
    ADD CONSTRAINT trans_change_comment_id_9702b436_fk_trans_comment_id FOREIGN KEY (comment_id) REFERENCES public.trans_comment(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_change trans_change_component_id_288ed925_fk_trans_component_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_change
    ADD CONSTRAINT trans_change_component_id_288ed925_fk_trans_component_id FOREIGN KEY (component_id) REFERENCES public.trans_component(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_change trans_change_language_id_73bd2ce4_fk_lang_language_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_change
    ADD CONSTRAINT trans_change_language_id_73bd2ce4_fk_lang_language_id FOREIGN KEY (language_id) REFERENCES public.lang_language(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_change trans_change_project_id_b2db51ee_fk_trans_project_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_change
    ADD CONSTRAINT trans_change_project_id_b2db51ee_fk_trans_project_id FOREIGN KEY (project_id) REFERENCES public.trans_project(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_change trans_change_screenshot_id_ebbee35e_fk_screensho; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_change
    ADD CONSTRAINT trans_change_screenshot_id_ebbee35e_fk_screensho FOREIGN KEY (screenshot_id) REFERENCES public.screenshots_screenshot(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_change trans_change_suggestion_id_0e61f1cb_fk_trans_suggestion_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_change
    ADD CONSTRAINT trans_change_suggestion_id_0e61f1cb_fk_trans_suggestion_id FOREIGN KEY (suggestion_id) REFERENCES public.trans_suggestion(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_change trans_change_translation_id_c5aa927b_fk_trans_translation_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_change
    ADD CONSTRAINT trans_change_translation_id_c5aa927b_fk_trans_translation_id FOREIGN KEY (translation_id) REFERENCES public.trans_translation(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_change trans_change_unit_id_76b0c6c0_fk_trans_unit_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_change
    ADD CONSTRAINT trans_change_unit_id_76b0c6c0_fk_trans_unit_id FOREIGN KEY (unit_id) REFERENCES public.trans_unit(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_change trans_change_user_id_8d1225f9_fk_weblate_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_change
    ADD CONSTRAINT trans_change_user_id_8d1225f9_fk_weblate_auth_user_id FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_comment trans_comment_unit_id_73ca7c89_fk_trans_unit_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_comment
    ADD CONSTRAINT trans_comment_unit_id_73ca7c89_fk_trans_unit_id FOREIGN KEY (unit_id) REFERENCES public.trans_unit(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_comment trans_comment_user_id_c2f200eb_fk_weblate_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_comment
    ADD CONSTRAINT trans_comment_user_id_c2f200eb_fk_weblate_auth_user_id FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_component trans_component_category_id_7c9c5306_fk_trans_category_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_component
    ADD CONSTRAINT trans_component_category_id_7c9c5306_fk_trans_category_id FOREIGN KEY (category_id) REFERENCES public.trans_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_component_links trans_component_link_component_id_2342af45_fk_trans_com; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_component_links
    ADD CONSTRAINT trans_component_link_component_id_2342af45_fk_trans_com FOREIGN KEY (component_id) REFERENCES public.trans_component(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_component trans_component_linked_component_id_82b0de9e_fk_trans_com; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_component
    ADD CONSTRAINT trans_component_linked_component_id_82b0de9e_fk_trans_com FOREIGN KEY (linked_component_id) REFERENCES public.trans_component(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_component_links trans_component_links_project_id_840f1e11_fk_trans_project_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_component_links
    ADD CONSTRAINT trans_component_links_project_id_840f1e11_fk_trans_project_id FOREIGN KEY (project_id) REFERENCES public.trans_project(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_component trans_component_project_id_04a8b52c_fk_trans_project_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_component
    ADD CONSTRAINT trans_component_project_id_04a8b52c_fk_trans_project_id FOREIGN KEY (project_id) REFERENCES public.trans_project(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_component trans_component_secondary_language_i_496a8d45_fk_lang_lang; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_component
    ADD CONSTRAINT trans_component_secondary_language_i_496a8d45_fk_lang_lang FOREIGN KEY (secondary_language_id) REFERENCES public.lang_language(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_component trans_component_source_language_id_2610b49e_fk_lang_language_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_component
    ADD CONSTRAINT trans_component_source_language_id_2610b49e_fk_lang_language_id FOREIGN KEY (source_language_id) REFERENCES public.lang_language(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_componentlist_components trans_componentlist__component_id_5642ff5c_fk_trans_com; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_componentlist_components
    ADD CONSTRAINT trans_componentlist__component_id_5642ff5c_fk_trans_com FOREIGN KEY (component_id) REFERENCES public.trans_component(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_componentlist_components trans_componentlist__componentlist_id_44d9ba8f_fk_trans_com; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_componentlist_components
    ADD CONSTRAINT trans_componentlist__componentlist_id_44d9ba8f_fk_trans_com FOREIGN KEY (componentlist_id) REFERENCES public.trans_componentlist(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_contributoragreement trans_contributoragr_component_id_31bafbef_fk_trans_com; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_contributoragreement
    ADD CONSTRAINT trans_contributoragr_component_id_31bafbef_fk_trans_com FOREIGN KEY (component_id) REFERENCES public.trans_component(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_contributoragreement trans_contributoragr_user_id_220dedfc_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_contributoragreement
    ADD CONSTRAINT trans_contributoragr_user_id_220dedfc_fk_weblate_a FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_label trans_label_project_id_8320ed70_fk_trans_project_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_label
    ADD CONSTRAINT trans_label_project_id_8320ed70_fk_trans_project_id FOREIGN KEY (project_id) REFERENCES public.trans_project(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_pendingunitchange trans_pendingunitcha_author_id_38073ef3_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_pendingunitchange
    ADD CONSTRAINT trans_pendingunitcha_author_id_38073ef3_fk_weblate_a FOREIGN KEY (author_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_pendingunitchange trans_pendingunitchange_unit_id_eda769c3_fk_trans_unit_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_pendingunitchange
    ADD CONSTRAINT trans_pendingunitchange_unit_id_eda769c3_fk_trans_unit_id FOREIGN KEY (unit_id) REFERENCES public.trans_unit(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_project trans_project_secondary_language_i_57e84b09_fk_lang_lang; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_project
    ADD CONSTRAINT trans_project_secondary_language_i_57e84b09_fk_lang_lang FOREIGN KEY (secondary_language_id) REFERENCES public.lang_language(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_suggestion trans_suggestion_unit_id_eb46fceb_fk_trans_unit_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_suggestion
    ADD CONSTRAINT trans_suggestion_unit_id_eb46fceb_fk_trans_unit_id FOREIGN KEY (unit_id) REFERENCES public.trans_unit(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_suggestion trans_suggestion_user_id_69ce0c2b_fk_weblate_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_suggestion
    ADD CONSTRAINT trans_suggestion_user_id_69ce0c2b_fk_weblate_auth_user_id FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_translation trans_translation_component_id_c4b70a26_fk_trans_component_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_translation
    ADD CONSTRAINT trans_translation_component_id_c4b70a26_fk_trans_component_id FOREIGN KEY (component_id) REFERENCES public.trans_component(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_translation trans_translation_language_id_030f0b30_fk_lang_language_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_translation
    ADD CONSTRAINT trans_translation_language_id_030f0b30_fk_lang_language_id FOREIGN KEY (language_id) REFERENCES public.lang_language(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_translation trans_translation_plural_id_5cf36dc7_fk_lang_plural_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_translation
    ADD CONSTRAINT trans_translation_plural_id_5cf36dc7_fk_lang_plural_id FOREIGN KEY (plural_id) REFERENCES public.lang_plural(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_unit_labels trans_unit_labels_label_id_4ca92ebd_fk_trans_label_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_unit_labels
    ADD CONSTRAINT trans_unit_labels_label_id_4ca92ebd_fk_trans_label_id FOREIGN KEY (label_id) REFERENCES public.trans_label(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_unit_labels trans_unit_labels_unit_id_a3c2ddc5_fk_trans_unit_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_unit_labels
    ADD CONSTRAINT trans_unit_labels_unit_id_a3c2ddc5_fk_trans_unit_id FOREIGN KEY (unit_id) REFERENCES public.trans_unit(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_unit trans_unit_source_unit_id_7a735f87_fk_trans_unit_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_unit
    ADD CONSTRAINT trans_unit_source_unit_id_7a735f87_fk_trans_unit_id FOREIGN KEY (source_unit_id) REFERENCES public.trans_unit(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_unit trans_unit_translation_id_513bb910_fk_trans_translation_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_unit
    ADD CONSTRAINT trans_unit_translation_id_513bb910_fk_trans_translation_id FOREIGN KEY (translation_id) REFERENCES public.trans_translation(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_unit trans_unit_variant_id_c3315c70_fk_trans_variant_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_unit
    ADD CONSTRAINT trans_unit_variant_id_c3315c70_fk_trans_variant_id FOREIGN KEY (variant_id) REFERENCES public.trans_variant(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_variant trans_variant_component_id_0915cbfc_fk_trans_component_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_variant
    ADD CONSTRAINT trans_variant_component_id_0915cbfc_fk_trans_component_id FOREIGN KEY (component_id) REFERENCES public.trans_component(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_variant_defining_units trans_variant_defini_variant_id_20848c13_fk_trans_var; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_variant_defining_units
    ADD CONSTRAINT trans_variant_defini_variant_id_20848c13_fk_trans_var FOREIGN KEY (variant_id) REFERENCES public.trans_variant(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_variant_defining_units trans_variant_defining_units_unit_id_f692977b_fk_trans_unit_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_variant_defining_units
    ADD CONSTRAINT trans_variant_defining_units_unit_id_f692977b_fk_trans_unit_id FOREIGN KEY (unit_id) REFERENCES public.trans_unit(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_vote trans_vote_suggestion_id_0df2bda2_fk_trans_suggestion_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_vote
    ADD CONSTRAINT trans_vote_suggestion_id_0df2bda2_fk_trans_suggestion_id FOREIGN KEY (suggestion_id) REFERENCES public.trans_suggestion(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_vote trans_vote_user_id_86a644fd_fk_weblate_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_vote
    ADD CONSTRAINT trans_vote_user_id_86a644fd_fk_weblate_auth_user_id FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_workflowsetting trans_workflowsetting_language_id_fcb1fa15_fk_lang_language_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_workflowsetting
    ADD CONSTRAINT trans_workflowsetting_language_id_fcb1fa15_fk_lang_language_id FOREIGN KEY (language_id) REFERENCES public.lang_language(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: trans_workflowsetting trans_workflowsetting_project_id_32daa6c8_fk_trans_project_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.trans_workflowsetting
    ADD CONSTRAINT trans_workflowsetting_project_id_32daa6c8_fk_trans_project_id FOREIGN KEY (project_id) REFERENCES public.trans_project(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_autogroup weblate_auth_autogro_group_id_37b7ff0b_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_autogroup
    ADD CONSTRAINT weblate_auth_autogro_group_id_37b7ff0b_fk_weblate_a FOREIGN KEY (group_id) REFERENCES public.weblate_auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_group_admins weblate_auth_group_a_group_id_fa29ae29_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_admins
    ADD CONSTRAINT weblate_auth_group_a_group_id_fa29ae29_fk_weblate_a FOREIGN KEY (group_id) REFERENCES public.weblate_auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_group_admins weblate_auth_group_a_user_id_f5851c1b_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_admins
    ADD CONSTRAINT weblate_auth_group_a_user_id_f5851c1b_fk_weblate_a FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_group_components weblate_auth_group_c_component_id_2b53d012_fk_trans_com; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_components
    ADD CONSTRAINT weblate_auth_group_c_component_id_2b53d012_fk_trans_com FOREIGN KEY (component_id) REFERENCES public.trans_component(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_group_componentlists weblate_auth_group_c_componentlist_id_b59f8fe9_fk_trans_com; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_componentlists
    ADD CONSTRAINT weblate_auth_group_c_componentlist_id_b59f8fe9_fk_trans_com FOREIGN KEY (componentlist_id) REFERENCES public.trans_componentlist(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_group_componentlists weblate_auth_group_c_group_id_7af40eb9_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_componentlists
    ADD CONSTRAINT weblate_auth_group_c_group_id_7af40eb9_fk_weblate_a FOREIGN KEY (group_id) REFERENCES public.weblate_auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_group_components weblate_auth_group_c_group_id_a07e20aa_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_components
    ADD CONSTRAINT weblate_auth_group_c_group_id_a07e20aa_fk_weblate_a FOREIGN KEY (group_id) REFERENCES public.weblate_auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_group weblate_auth_group_defining_project_id_b2ad81a7_fk_trans_pro; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group
    ADD CONSTRAINT weblate_auth_group_defining_project_id_b2ad81a7_fk_trans_pro FOREIGN KEY (defining_project_id) REFERENCES public.trans_project(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_group_languages weblate_auth_group_l_group_id_aa12d0a6_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_languages
    ADD CONSTRAINT weblate_auth_group_l_group_id_aa12d0a6_fk_weblate_a FOREIGN KEY (group_id) REFERENCES public.weblate_auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_group_languages weblate_auth_group_l_language_id_4b7f5d81_fk_lang_lang; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_languages
    ADD CONSTRAINT weblate_auth_group_l_language_id_4b7f5d81_fk_lang_lang FOREIGN KEY (language_id) REFERENCES public.lang_language(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_group_projects weblate_auth_group_p_group_id_f713a220_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_projects
    ADD CONSTRAINT weblate_auth_group_p_group_id_f713a220_fk_weblate_a FOREIGN KEY (group_id) REFERENCES public.weblate_auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_group_projects weblate_auth_group_p_project_id_26b8e2b6_fk_trans_pro; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_projects
    ADD CONSTRAINT weblate_auth_group_p_project_id_26b8e2b6_fk_trans_pro FOREIGN KEY (project_id) REFERENCES public.trans_project(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_group_roles weblate_auth_group_r_group_id_ed18f8d0_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_roles
    ADD CONSTRAINT weblate_auth_group_r_group_id_ed18f8d0_fk_weblate_a FOREIGN KEY (group_id) REFERENCES public.weblate_auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_group_roles weblate_auth_group_r_role_id_de6300ca_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_group_roles
    ADD CONSTRAINT weblate_auth_group_r_role_id_de6300ca_fk_weblate_a FOREIGN KEY (role_id) REFERENCES public.weblate_auth_role(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_invitation weblate_auth_invitat_author_id_a713ef92_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_invitation
    ADD CONSTRAINT weblate_auth_invitat_author_id_a713ef92_fk_weblate_a FOREIGN KEY (author_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_invitation weblate_auth_invitat_group_id_07a52aff_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_invitation
    ADD CONSTRAINT weblate_auth_invitat_group_id_07a52aff_fk_weblate_a FOREIGN KEY (group_id) REFERENCES public.weblate_auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_invitation weblate_auth_invitat_user_id_6a0c6dec_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_invitation
    ADD CONSTRAINT weblate_auth_invitat_user_id_6a0c6dec_fk_weblate_a FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_role_permissions weblate_auth_role_pe_permission_id_d0650152_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_role_permissions
    ADD CONSTRAINT weblate_auth_role_pe_permission_id_d0650152_fk_weblate_a FOREIGN KEY (permission_id) REFERENCES public.weblate_auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_role_permissions weblate_auth_role_pe_role_id_fa163124_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_role_permissions
    ADD CONSTRAINT weblate_auth_role_pe_role_id_fa163124_fk_weblate_a FOREIGN KEY (role_id) REFERENCES public.weblate_auth_role(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_user_groups weblate_auth_user_gr_group_id_48c0a977_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_user_groups
    ADD CONSTRAINT weblate_auth_user_gr_group_id_48c0a977_fk_weblate_a FOREIGN KEY (group_id) REFERENCES public.weblate_auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_user_groups weblate_auth_user_gr_user_id_37e61ff1_fk_weblate_a; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_user_groups
    ADD CONSTRAINT weblate_auth_user_gr_user_id_37e61ff1_fk_weblate_a FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_userblock weblate_auth_userblock_project_id_44aae0be_fk_trans_project_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_userblock
    ADD CONSTRAINT weblate_auth_userblock_project_id_44aae0be_fk_trans_project_id FOREIGN KEY (project_id) REFERENCES public.trans_project(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: weblate_auth_userblock weblate_auth_userblock_user_id_06173205_fk_weblate_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.weblate_auth_userblock
    ADD CONSTRAINT weblate_auth_userblock_user_id_06173205_fk_weblate_auth_user_id FOREIGN KEY (user_id) REFERENCES public.weblate_auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: wladmin_backuplog wladmin_backuplog_service_id_10292c2d_fk_wladmin_b; Type: FK CONSTRAINT; Schema: public; Owner: weblate
--

ALTER TABLE ONLY public.wladmin_backuplog
    ADD CONSTRAINT wladmin_backuplog_service_id_10292c2d_fk_wladmin_b FOREIGN KEY (service_id) REFERENCES public.wladmin_backupservice(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

\unrestrict MwLqXpuLlM5Rkq6Kffs6D5wbTQaJeA99q9HSNfNavOedwDgz7aIckS4jXk09lYE


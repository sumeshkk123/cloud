import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db/prisma';
import { randomUUID } from 'crypto';

interface PlanData {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
}

const plans: PlanData[] = [
  {
    title: 'MLM Binary Plan',
    subtitle: 'Two-leg structure with balanced growth',
    description: 'An MLM Binary plan is a popular compensation structure where each distributor has two legs or sub-teams. Earnings are based on the sales volume of the weaker leg, which incentivizes balanced growth and teamwork. This plan is known for its simplicity, making it easy to understand and implement. It offers the potential for rapid expansion and significant earnings, especially for those who can effectively manage and grow both legs of their network.',
    icon: 'remix:RiNodeTree',
    features: ['Two Legs', 'Balanced Growth', 'Simple Structure', 'Teamwork']
  },
  {
    title: 'MLM Matrix Plan',
    subtitle: 'Fixed-width, fixed-depth structure',
    description: 'An MLM Matrix Plan is a compensation structure where distributors are placed in a fixed-width, fixed-depth matrix, such as 3×3 or 5×7. Each distributor can recruit a limited number of frontline members, with additional recruits placed further down the network. This plan promotes teamwork, as distributors benefit from the efforts of their downline. It\'s designed to maximize earnings potential and ensure even distribution of recruits within the network.',
    icon: 'remix:RiGridFill',
    features: ['Fixed Matrix', 'Limited Frontline', 'Team Benefits', 'Even Distribution']
  },
  {
    title: 'MLM Uni-level Plan',
    subtitle: 'Unlimited frontline recruitment',
    description: 'An MLM Unilevel Plan allows distributors to recruit an unlimited number of frontline members directly under them. All recruits are placed on the same level, with earnings based on the sales of these frontline members and potentially several levels deep. This simple and straightforward plan encourages wide recruitment and provides clear earning potential, making it easy for distributors to understand and manage their network effectively.',
    icon: 'remix:RiTeamLine',
    features: ['Unlimited Recruits', 'Same Level', 'Wide Recruitment', 'Simple Structure']
  },
  {
    title: 'MLM Generation Plan',
    subtitle: 'Multi-generation performance rewards',
    description: 'An MLM Generation Plan rewards distributors based on the performance of their entire downline across multiple generations. Unlike other plans, it focuses on leadership development and long-term growth. Earnings are derived from the sales of multiple levels within a generation, fostering deep network development. This plan encourages mentoring and support, as leaders benefit from the success of their entire team, making it ideal for sustainable business growth.',
    icon: 'remix:RiGitBranchLine',
    features: ['Multi-Generation', 'Leadership Focus', 'Deep Network', 'Long-term Growth']
  },
  {
    title: 'MLM Gift Plan',
    subtitle: 'Direct value exchange model',
    description: 'An MLM Gift Plan involves participants gifting a set amount to join and then recruiting others to do the same. Each member receives gifts from their recruits, creating a cycle of giving. This plan focuses on the direct exchange of value without products or services, relying on trust and community. It\'s simple and straightforward, often appealing to those seeking quick returns, but it requires careful management to ensure sustainability.',
    icon: 'remix:RiGiftLine',
    features: ['Gift Exchange', 'Direct Value', 'Community Trust', 'Simple Model']
  },
  {
    title: 'MLM Board Plan',
    subtitle: 'Board-based cycle system',
    description: 'An MLM Board Plan operates by dividing participants into boards or cycles. New recruits fill spots on a board, and once filled, the board splits, promoting top members to the next level. This cycle continues, with members earning bonuses as they progress through the boards. The plan encourages teamwork and rapid recruitment, as participants work together to advance through the stages and achieve higher rewards.',
    icon: 'remix:RiDashboardLine',
    features: ['Board Cycles', 'Progressive Levels', 'Teamwork', 'Rapid Growth']
  },
  {
    title: 'MLM Party Plan',
    subtitle: 'Social event-based selling',
    description: 'An MLM Party Plan involves hosting social events, where distributors showcase and sell products in a relaxed, group setting. These gatherings provide a fun, interactive way to demonstrate products, allowing attendees to experience them firsthand. Distributors earn commissions on sales made during the events and can recruit new members. This plan emphasizes personal connections and direct selling, making it effective for building relationships and driving sales through engaging, in-person interactions.',
    icon: 'remix:RiGroupLine',
    features: ['Social Events', 'Product Demo', 'Personal Connection', 'Interactive Selling']
  },
  {
    title: 'MLM Australian Binary Plan',
    subtitle: 'Hybrid binary-matrix structure',
    description: 'The MLM Australian Binary Plan is a hybrid structure combining binary and matrix plans. Distributors have two main legs, similar to a binary plan, but each leg can expand into multiple sub-levels like a matrix. Earnings are based on the weaker leg\'s performance, with bonuses for balanced growth. This plan promotes deep network building and balanced recruitment, providing both stability and significant earning potential through structured and strategic team development.',
    icon: 'remix:RiNodeTree',
    features: ['Hybrid Structure', 'Two Legs', 'Sub-levels', 'Balanced Growth']
  },
  {
    title: 'MLM Monoline Plan',
    subtitle: 'Single-line sequential structure',
    description: 'The MLM Monoline Plan features a single line of distributors, where each new recruit is placed sequentially below the previous one. Earnings are generated from the collective sales of everyone below a distributor, creating a straightforward and transparent system. This plan ensures that all members benefit from every new addition, promoting unity and collective growth. Its simplicity and equal earning opportunity make it appealing to those new to MLM structures.',
    icon: 'remix:RiLineChartLine',
    features: ['Single Line', 'Sequential Placement', 'Transparent System', 'Equal Opportunity']
  },
  {
    title: 'MLM Repurchase Plan',
    subtitle: 'Continual product purchase model',
    description: 'The MLM Repurchase Plan focuses on continual product purchases by existing members. Distributors earn commissions on the repeated sales made within their network. This plan incentivizes ongoing consumption and sales, ensuring steady income through regular repurchases. It encourages loyalty and consistent product usage, fostering a sustainable business model. By rewarding both recruitment and continuous sales, it promotes long-term growth and stability within the MLM structure.',
    icon: 'remix:RiRepeatLine',
    features: ['Repeat Sales', 'Ongoing Consumption', 'Steady Income', 'Loyalty Rewards']
  },
  {
    title: 'MLM Spillover Plan',
    subtitle: 'Excess recruit distribution',
    description: 'The MLM Spillover Plan involves placing excess recruits from a distributor\'s frontline into their downline, benefiting team members below them. This ensures that even those who struggle with recruitment can grow their network and earn commissions. The plan encourages teamwork and balanced growth, as leaders help build their downline\'s structure. It creates a supportive environment, fostering collective success and making it easier for new members to succeed in the MLM business.',
    icon: 'remix:RiWaterFlashLine',
    features: ['Spillover Effect', 'Team Support', 'Balanced Growth', 'Supportive Environment']
  },
  {
    title: 'MLM Stair Step Plan',
    subtitle: 'Rank-based advancement system',
    description: 'The MLM Stair-Step Plan rewards distributors for achieving sales targets and advancing through ranks or steps. Each step represents a higher sales volume and greater rewards. Distributors earn commissions from their sales and their downline\'s performance. This plan encourages consistent effort and leadership development, as members must mentor their team to progress. It fosters motivation and long-term growth, providing clear goals and incremental incentives for sustained success.',
    icon: 'remix:RiStairsLine',
    features: ['Rank Advancement', 'Sales Targets', 'Incremental Rewards', 'Leadership Development']
  },
  {
    title: 'MLM Crowdfunding Plan',
    subtitle: 'Community funding model',
    description: 'The MLM Crowd-funding Plan combines network marketing with crowd-funding principles. Participants contribute funds and recruit others to do the same, creating a pool of resources. Earnings are distributed based on contributions and the recruitment network\'s size. This plan emphasizes community support and collective financial growth, allowing members to fund personal projects or business ventures. It fosters a collaborative environment where success is shared among all participants.',
    icon: 'remix:RiFundsLine',
    features: ['Community Funding', 'Resource Pool', 'Collective Growth', 'Shared Success']
  },
  {
    title: 'MLM Help Plan',
    subtitle: 'Mutual aid community model',
    description: 'The MLM Help Plan focuses on mutual aid and community support. Participants contribute funds to assist others within the network and, in turn, receive help when needed. This plan emphasizes reciprocity and trust, creating a cycle of giving and receiving. Earnings are generated based on contributions and network growth. It fosters a supportive environment where members work together to achieve financial stability and success, promoting a sense of unity and cooperation.',
    icon: 'remix:RiHandHeartLine',
    features: ['Mutual Aid', 'Community Support', 'Reciprocity', 'Unity']
  },
  {
    title: 'MLM Investment Plan',
    subtitle: 'Network-based investment returns',
    description: 'The MLM Investment Plan involves participants investing money into the network, with returns based on overall network performance and growth. Distributors recruit others to increase the investment pool, sharing profits from collective gains. This plan emphasizes financial growth and shared success, encouraging strategic recruitment and investment. It offers potential for high returns, making it attractive to those seeking both passive income and active involvement in growing a profitable network.',
    icon: 'remix:RiMoneyDollarCircleLine',
    features: ['Investment Pool', 'Network Returns', 'Shared Profits', 'High Returns']
  },
  {
    title: 'MLM Growth Plan',
    subtitle: 'Rapid expansion focus',
    description: 'The MLM Growth Plan emphasizes rapid expansion and continuous recruitment. Distributors earn commissions based on their sales and the growth of their downline. This plan rewards consistent recruitment and network building, motivating members to expand their teams actively. It promotes scalability and dynamic growth, offering incentives for achieving milestones and increasing sales volume. The focus on constant expansion makes it ideal for ambitious individuals aiming for substantial and sustained business growth.',
    icon: 'remix:RiBarChartLine',
    features: ['Rapid Expansion', 'Continuous Recruitment', 'Scalability', 'Milestone Rewards']
  },
  {
    title: 'MLM Australian X-up Plan',
    subtitle: 'Leveraged pass-up system',
    description: 'The MLM Australian X-Up Plan involves passing up a set number of recruits (e.g., the 2nd, 4th, etc.) to the sponsor as "X-ups." This creates leveraged income for sponsors while building the downline. Distributors benefit from both their recruits and the pass-ups they receive. This plan encourages active recruitment and mentorship, fostering teamwork and exponential growth as members work to advance and benefit from their network\'s efforts.',
    icon: 'remix:RiArrowUpCircleLine',
    features: ['X-up System', 'Leveraged Income', 'Mentorship', 'Exponential Growth']
  },
  {
    title: 'MLM Auto Fill Plan',
    subtitle: 'Automatic placement system',
    description: 'The MLM Auto-fill Plan automatically places new recruits into the network following a predetermined structure, such as filling levels sequentially from top to bottom and left to right. This ensures balanced growth and helps distributors build their teams efficiently. Earnings are based on the collective sales of the auto-filled network. This plan simplified recruitment, promotes fairness, and supports consistent network expansion, making it easier for all members to benefit from new additions.',
    icon: 'remix:RiSettingsLine',
    features: ['Auto Placement', 'Balanced Growth', 'Fair Distribution', 'Efficient Building']
  },
  {
    title: 'MLM Click Plan',
    subtitle: 'Digital action-based earnings',
    description: 'The MLM Click Plan leverages online platforms where distributors earn commissions through clicks, views, or online actions. Participants promote products or services via links, and earnings are generated based on the traffic and conversions they drive. This plan emphasizes digital marketing and requires minimal direct selling, making it attractive for tech-savvy individuals. It offers flexible earning opportunities, allowing distributors to leverage their online presence and marketing skills for income generation.',
    icon: 'remix:RiCursorLine',
    features: ['Click Based', 'Digital Marketing', 'Online Actions', 'Flexible Earnings']
  },
  {
    title: 'MLM Emgoldex Plan',
    subtitle: 'Gold investment network',
    description: 'The MLM Emgoldex Plan is centered around the purchase and sale of gold bars. Participants invest in gold and recruit others to do the same, earning commissions based on their network\'s investments. This plan combines the stability of gold investment with network marketing, promoting wealth accumulation and financial security. It appeals to those seeking tangible assets, leveraging the value of gold to provide a reliable and potentially lucrative income stream.',
    icon: 'remix:RiCoinLine',
    features: ['Gold Investment', 'Tangible Assets', 'Financial Security', 'Wealth Accumulation']
  },
  {
    title: 'MLM Hybrid Plan',
    subtitle: 'Multi-structure combination',
    description: 'The MLM Hybrid Plan combines elements from multiple MLM compensation structures, such as binary, unilevel, and matrix plans, to create a versatile and balanced approach. This plan offers diverse earning opportunities, including direct sales commissions, team bonuses, and rank advancements. By integrating various strategies, it caters to different distributor strengths and preferences, promoting robust network growth and stability. The hybrid nature ensures flexibility and adaptability, making it appealing to a broad range of participants.',
    icon: 'remix:RiStackLine',
    features: ['Multi-Structure', 'Diverse Earnings', 'Flexible Approach', 'Balanced Strategy']
  }
];

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const results = {
      created: [] as string[],
      updated: [] as string[],
      errors: [] as string[],
    };

    for (const planData of plans) {
      try {
        // Check if plan already exists (by title in English)
        const existing = await prisma.mlm_plans.findFirst({
          where: {
            title: planData.title,
            locale: 'en',
          },
        });

        if (existing) {
          // Update existing plan
          await prisma.mlm_plans.update({
            where: { id: existing.id },
            data: {
              title: planData.title,
              subtitle: planData.subtitle,
              description: planData.description,
              icon: planData.icon,
              features: planData.features as any,
              updatedAt: new Date(),
            },
          });
          results.updated.push(planData.title);
        } else {
          // Create new plan
          const id = randomUUID();
          await prisma.mlm_plans.create({
            data: {
              id,
              groupId: id,
              title: planData.title,
              subtitle: planData.subtitle,
              description: planData.description,
              icon: planData.icon,
              locale: 'en',
              showOnHomePage: false,
              features: planData.features as any,
              updatedAt: new Date(),
            },
          });
          results.created.push(planData.title);
        }
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'Unknown error';
        results.errors.push(`${planData.title}: ${errorMsg}`);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Seeded ${plans.length} plans`,
      results,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to seed plans.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

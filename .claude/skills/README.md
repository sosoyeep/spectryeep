# Claude Code workflows (.claude/skills)

Reusable workflows for the JIEBO Instrument / spectryeep.com sales & service team.
Each folder with a `SKILL.md` is a workflow Claude Code auto-loads.

| Skill | 中文 | When to use |
|-------|------|-------------|
| [`presales`](./presales/SKILL.md) | 售前销售 | Process an inbound inquiry / RFQ / lead → screen, qualify, match instrument, draft reply, CRM row + follow-up. |
| [`aftersales`](./aftersales/SKILL.md) | 售后服务 | Handle an existing customer's service request → identify instrument, triage + SLA, draft response, escalate, log ticket. |

## How to use

Just describe the task in natural language and Claude Code picks the matching
workflow automatically — e.g.:

- "处理这条新询盘:..." → runs **presales**
- "客户 T5 报修,光谱漂移..." → runs **aftersales**

Or invoke explicitly with the slash form: `/presales` · `/aftersales`.

## How to add another workflow

1. Create `.claude/skills/<name>/SKILL.md`.
2. Add YAML frontmatter with `name` and a `description` that says **when** to
   use it (the description is how Claude decides to trigger it).
3. Write the steps as a numbered procedure. Point at real repo files
   (`src/consts.ts`, `functions/api/inquiry.js`, the CRM doc) instead of
   restating facts, so the workflow stays in sync with the codebase.

Both current workflows produce **drafts for a human to review and send** — they
never contact customers or change external systems on their own.

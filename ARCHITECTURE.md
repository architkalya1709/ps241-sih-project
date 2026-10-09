# CAREERSAATHI — System Architecture & RAG Specification

```
                          STUDENT + PARENTS
                                  │
                                  ▼
                   CAREERSAATHI FRONTEND (React TS)
                                  │
                       REST API (HTTP / JSON)
                                  ▼
                    EXPRESS / FASTAPI BACKEND
                                  │
       ┌──────────────────────────┼──────────────────────────┐
       ▼                          ▼                          ▼
RECOMMENDATION ENGINE      PARENT OBJECTION ENGINE       RAG AI PIPELINE
(Multi-Factor Scoring)   (5-Stage Evidence Frame)    (DB Retrieval + LLM)
       │                          │                          │
       └──────────────────────────┼──────────────────────────┘
                                  ▼
                     VERIFIED DATABASE (PostgreSQL)
        [trades, earnings, placements, courses, roadmaps, concerns]
```

---

## 1. Grounded RAG Pipeline (Anti-Hallucination)

```
[User Query] ──► [Intent Detection] ──► [Context: Student + Parent Profile]
                                                 │
                                                 ▼
[Grounded Synthesis] ◄── [Verified NCVET Stats] ◄── [DB Retrieval]
        │
        ├── High Confidence ──► Return Grounded Answer
        └── Low / Unverified ──► Trigger Human Escalation + [Talk to Counsellor]
```

---

## 2. Parent Objection Resolution Framework
When a parent asks an income, security, or social status question, the backend processes it through a 5-stage evidence frame:
1. **Concern:** Identifies exact hesitation key (`security`, `income`, `safety`, `perception`).
2. **Evidence:** Fetches NCVET & Sector Skill Council verified placement rate & salary figures.
3. **Explanation:** Contextualizes why the industry is growing (e.g. PM Surya Ghar Yojana, NAPS apprenticeship).
4. **Career Implication:** Highlights long-term benefit (e.g. lateral entry to 3-Year B.Voc Degree).
5. **Next Step:** Recommends roadmap inspection or 1-on-1 human expert call.

---

## 3. Student vs Parent Preference Mismatch Engine
Instead of forcing a single choice, the mismatch engine evaluates alignment scores between student passion and parent security goals.
- If student wants **Solar Technician** & parent wants **Job Security**: Highlights 91% placement security with Tata Power.
- If student wants **Vocational Skill** & parent wants **Prestige/Degree**: Highlights NCrF credit transfer to **B.Voc University Degree**.

---

## 4. Replacing Demo Data with Real Production Datasets
To replace the 10 demo trades with live government statistics:
1. Connect PostgreSQL by configuring `DATABASE_URL` in `.env`.
2. Execute `schema.sql` to instantiate production tables.
3. Ingest official NCVET / NSDC / MSDE CSV or API feeds into `trades`, `earnings`, and `placements` tables.
4. Set `GEMINI_API_KEY` or `OPENAI_API_KEY` to switch `AIService` from `MockAIService` to live `RealLLMService`.

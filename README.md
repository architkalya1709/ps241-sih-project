# CAREERSAATHI (करियरसाथी) — SIH PS 241

> **Tagline:** *"Sahi Career, Saath Parivaar Ka."*  
> **SIH Problem Statement ID:** PS 241  
> **Category:** Vocational Education & Family Career Counselling Platform

---

## 📌 Project Overview

**CareerSaathi** is an AI-powered vocational career counselling platform designed specifically for India's vocational education ecosystem. In India, choosing a vocational or skill-based career is a **family decision**. While students may be enthusiastic about skill-based trades, parents often hesitate due to concerns about:

- 💰 **Income & Earning Potential**
- 🛡️ **Job Security & Industry Growth**
- 🎓 **Higher Education Opportunities (B.Voc / NCrF Credit Transfers)**
- 🤝 **Social Perception & Status**
- 🏥 **Workplace Safety & Medical Insurance**

CareerSaathi bridges the gap between **Student Aspirations** and **Parent Concerns** by delivering joint AI counselling, grounded NCVET/NSDC data verification, 5-year skill roadmaps, and human expert escalation.

---

## 🎯 Problem Statement & Solution

### The Problem (SIH PS 241)
Traditional career guidance platforms focus exclusively on students and academic degrees (engineering, medical), completely ignoring vocational education (ITI, NCVET trades) and parent decision-making. This results in high family friction, decision paralysis, and dropouts from vocational pathways.

### The Proposed Solution
CareerSaathi introduces a **5-Pillar Architecture**:
1. **Dual Student + Parent Onboarding:** Captures student interests/aptitude and parent hesitation concerns separately.
2. **Preference Mismatch Engine:** Identifies gaps between student passion and parent security goals.
3. **Grounded RAG AI Counsellor:** Delivers anti-hallucinated, NCVET-verified stats (placement rates, starting salaries, PM Surya Ghar scheme benefits).
4. **5-Year Skill Roadmap & Side-by-Side Comparison:** Maps career progression from ITI training to NCrF credit transfer for 3-Year B.Voc degrees.
5. **Human Counsellor Escalation:** Allows families to book 1-on-1 calls with Skill India experts when AI recommendations require human reassurance.

---

## ✨ Key Features

- 🌐 **Bilingual (English / हिन्दी) Interface:** Seamless language toggling with extensible Indian regional language support.
- 🧙‍♂️ **Dual-Step Onboarding Wizards:** 4-step student wizard and 9-card parent concern selector.
- 🤖 **Interactive AI Counsellor:** Conversational chat with quick-action prompt pills, speaker toggle (Student vs Parent), and RAG grounded answers.
- 📊 **Side-by-Side Trade Matrix:** Compare up to 3 vocational trades across 8 parameters (duration, eligibility, starting salary, 5-year growth, NCVET placement rate, parent security score).
- 🗺️ **5-Phase Visual Roadmap:** Step-by-step career path (Interest $\rightarrow$ ITI Training $\rightarrow$ NCVET Certification $\rightarrow$ Entry Job $\rightarrow$ B.Voc Degree).
- 📞 **Human Expert Booking System:** Complete appointment workflow generating verified ticket IDs (`#CS-2026-XXXX`).
- 📈 **National Admin Telemetry Dashboard:** Real-time analytics displaying KPI metrics, parent hesitation breakdown %, top trade demand, and state-wise volume.
- 🎨 **Monochrome B&W UI Design System:** Sophisticated pure white background (`#FFFFFF`), pure black text (`#000000`), subtle neutral borders, and high contrast typography.

---

## 🛠 Technology Stack

### Frontend
- **Framework:** React 19 (TypeScript)
- **Styling:** Tailwind CSS v4, Lucide React Icons
- **Build Tool:** Vite 8.3

### Backend
- **Runtime:** Node.js (v18+)
- **Framework:** Express 4.21 (TypeScript)
- **Environment:** `dotenv`, `cors`

### Database Architecture
- **Production Schema:** PostgreSQL DDL (`schema.sql` + `seed.sql`)
- **Hackathon In-Memory Store:** Embedded TypeScript Data Store (`server/src/data/dbStore.ts`)

### AI Architecture
- **RAG Pipeline:** Retrieval-Augmented Generation with NCVET verified statistics
- **Decision Engines:** Multi-Factor Scoring Engine, Parent Objection Resolution Framework, Preference Mismatch Engine
- **Pluggable AI Service:** Abstract `AIService` interface switching between `MockAIService` (grounded RAG) and `RealLLMService` (Google Gemini / OpenAI API) via environment variables

---

## 🏗 System Architecture

```
                       STUDENT + PARENT
                              │
                              ▼
               CAREERSAATHI FRONTEND (React 19 + TS)
                              │
                   REST API (HTTP / JSON)
                              ▼
               EXPRESS BACKEND (Node.js + TS)
                              │
   ┌──────────────────────────┼──────────────────────────┐
   ▼                          ▼                          ▼
RECOMMENDATION ENGINE   PARENT OBJECTION ENGINE    RAG AI PIPELINE
(Multi-Factor Scoring) (5-Stage Evidence Frame)  (NCVET Specs + LLM)
   │                          │                          │
   └──────────────────────────┼──────────────────────────┘
                              ▼
                 VERIFIED DATABASE (PostgreSQL)
   [trades, earnings, placements, courses, roadmaps, concerns]
```

### Parent Objection Resolution Framework (5-Stage Evidence Frame)
When a parent raises a concern (income, security, safety), the backend applies:
1. **Identify Concern:** Map hesitation key (`security`, `income`, `safety`).
2. **Fetch Evidence:** Retrieve NCVET & Sector Skill Council verified placement rates and salary data.
3. **Contextualize:** Explain national growth drivers (e.g., PM Surya Ghar Yojana, NAPS apprenticeship).
4. **Career Implication:** Highlight long-term growth (lateral entry to 3-Year B.Voc Degree).
5. **Actionable Next Step:** Provide roadmap link or 1-on-1 human expert call booking.

---

## 📁 Project Folder Structure

```
PS 241 SIH/
├── .env.example               # Environment variable template
├── .gitignore                  # Git exclusion rules
├── API_DOCUMENTATION.md        # Comprehensive REST API specifications
├── ARCHITECTURE.md             # System architecture & RAG specifications
├── index.html                  # Main HTML entry point
├── package.json                # Frontend dependencies & scripts
├── README.md                   # Project documentation
├── schema.sql                  # PostgreSQL production database schema
├── seed.sql                    # PostgreSQL sample seed data
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite bundler configuration
│
├── server/                     # Express REST API Backend
│   ├── package.json            # Backend dependencies & scripts
│   ├── tsconfig.json           # Backend TypeScript configuration
│   └── src/
│       ├── index.ts            # Express server entry point & middleware
│       ├── data/
│       │   └── dbStore.ts      # In-memory database store & seed data
│       ├── routes/
│       │   └── api.ts          # REST API endpoints controller
│       ├── services/
│       │   ├── aiService.ts    # AI Service interface & LLM factory
│       │   ├── mismatchEngine.ts # Student-Parent preference mismatch logic
│       │   ├── parentObjectionEngine.ts # 5-Stage parent objection resolver
│       │   ├── ragService.ts   # Grounded RAG retrieval pipeline
│       │   ├── recommendationEngine.ts # Multi-factor trade scoring algorithm
│       │   └── sentimentService.ts # Sentiment analysis helper
│       └── types/
│           └── index.ts        # Shared backend TypeScript interfaces
│
└── src/                        # React Frontend Application
    ├── main.tsx                # React root renderer
    ├── App.tsx                 # Main application & screen router
    ├── App.css                 # Custom styles
    ├── index.css               # Tailwind CSS imports & global theme
    ├── api/
    │   └── client.ts           # REST API client wrapper
    ├── components/
    │   ├── Header.tsx          # Navigation header & brand logo
    │   ├── Footer.tsx          # Page footer
    │   └── ScreenSwitcherBar.tsx # Hackathon screen navigator bar
    ├── data/
    │   ├── mockData.ts         # Fallback data structures
    │   └── translations.ts     # Bilingual (EN/HI) dictionary
    ├── screens/                # 12 Complete Screen Views
    │   ├── LandingScreen.tsx
    │   ├── LanguageScreen.tsx
    │   ├── StudentOnboardingScreen.tsx
    │   ├── ParentOnboardingScreen.tsx
    │   ├── FamilyDashboardScreen.tsx
    │   ├── AICounsellorScreen.tsx
    │   ├── CareerRecommendationsScreen.tsx
    │   ├── CareerDetailScreen.tsx
    │   ├── SkillRoadmapScreen.tsx
    │   ├── CareerComparisonScreen.tsx
    │   ├── HumanCounsellorScreen.tsx
    │   ├── AdminDashboardScreen.tsx
    │   ├── AuthScreen.tsx
    │   ├── JobsScreen.tsx
    │   └── ResumeBuilderScreen.tsx
    └── types/
        └── index.ts            # Shared frontend TypeScript interfaces
```

---

## 💻 Prerequisites

Ensure you have the following installed locally:
- **Node.js:** v18.0.0 or higher (Tested on Node.js v22.x)
- **npm:** v10.0.0 or higher
- **Git:** v2.x or higher

---

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ps241-sih-project.git
cd ps241-sih-project
```

### 2. Environment Configuration
Copy `.env.example` to create your local `.env` file:
```bash
cp .env.example .env
```

`.env` configuration file reference:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Connection (Optional - defaults to in-memory store if unset)
# DATABASE_URL=postgresql://postgres:password@localhost:5432/careersaathi

# AI Service Configuration (Optional - defaults to MockAIService if unset)
# GEMINI_API_KEY=your_google_gemini_api_key_here
# OPENAI_API_KEY=your_openai_api_key_here

# Frontend Configuration
VITE_API_URL=http://localhost:5000/api
```

---

## 🏃 Running the Application Locally

### Step 1: Start the Backend API Server
Open Terminal 1:
```bash
cd server
npm install
npm run dev
```
*Backend API server will start on:* `http://localhost:5000`

### Step 2: Start the Frontend Application
Open Terminal 2 (in project root):
```bash
npm install
npm run dev
```
*Frontend application will start on:* `http://localhost:5173`

---

## 🗄️ Database Setup (Production Mode)

By default, CareerSaathi runs in **Hackathon Demo Mode** using an embedded TypeScript store (`server/src/data/dbStore.ts`).

To connect a live PostgreSQL database:
1. Ensure PostgreSQL is installed and running.
2. Create the database:
   ```sql
   CREATE DATABASE careersaathi;
   ```
3. Run the schema and seed scripts:
   ```bash
   psql -U postgres -d careersaathi -f schema.sql
   psql -U postgres -d careersaathi -f seed.sql
   ```
4. Set `DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/careersaathi` in `.env`.

---

## 🔌 API Documentation Summary

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Health check & service status |
| `POST` | `/api/auth` | User registration / login |
| `GET` / `POST` | `/api/student/profile` | Retrieve / update student profile |
| `GET` / `POST` | `/api/parent/profile` | Retrieve / update parent concerns |
| `GET` | `/api/family/profile` | Joint family profile & mismatch analysis |
| `GET` | `/api/careers` | Fetch all 10 demo NCVET trades |
| `GET` | `/api/careers/:id` | Fetch specific trade details |
| `POST` | `/api/recommendations` | Execute trade recommendation engine |
| `POST` | `/api/chat` | RAG AI conversational counselling endpoint |
| `POST` | `/api/compare` | Compare up to 3 trades side-by-side |
| `GET` | `/api/roadmap/:career_id` | 5-phase career progression roadmap |
| `POST` | `/api/counsellor-request` | Book 1-on-1 human expert call |
| `GET` | `/api/admin/analytics` | Fetch national platform telemetry metrics |

---

## 🧪 Testing Instructions

### 1. Build Verification
Verify both frontend and backend compile without TypeScript or Vite errors:
```bash
# Verify Frontend Build
npm run build

# Verify Backend Build
cd server
npm run build
```

### 2. API Endpoint Testing
With the backend server running on port 5000, verify key endpoints:
```bash
# Health Check
curl http://localhost:5000/api/health

# Fetch Vocational Trades
curl http://localhost:5000/api/careers

# Test Admin Analytics
curl http://localhost:5000/api/admin/analytics
```

---

## 🖼️ Screenshots

| Landing Page & Hero Section | AI Counsellor & RAG Interface |
| :---: | :---: |
| *(Add screenshot here)* | *(Add screenshot here)* |

| Side-by-Side Trade Matrix | National Admin Telemetry |
| :---: | :---: |
| *(Add screenshot here)* | *(Add screenshot here)* |

---

## ⚠️ Known Limitations

- **Hackathon Dataset:** The 10 included vocational trades are structured demo data aligned with NCVET/NSDC standards. In production, live feeds from NCVET/MSDE databases can replace the dataset.
- **LLM API Key:** In default local mode, the AI Counsellor uses the grounded `MockAIService` RAG pipeline. Supply `GEMINI_API_KEY` or `OPENAI_API_KEY` in `.env` to enable live LLM synthesis.

---

## 👥 Team Information (SIH Team)

| Role | Name | Email / Contact |
| :--- | :--- | :--- |
| **Team Lead** | *[Team Lead Name]* | *[email@domain.com]* |
| **Full-Stack Developer** | *[Member Name]* | *[email@domain.com]* |
| **UI/UX Designer** | *[Member Name]* | *[email@domain.com]* |
| **AI/ML Developer** | *[Member Name]* | *[email@domain.com]* |
| **Mentor / Advisor** | *[Mentor Name]* | *[email@domain.com]* |

---

## 📜 License

This project is created for **Smart India Hackathon (SIH) — Problem Statement PS 241**.  
Distributed under the **MIT License**. See `LICENSE` for details.

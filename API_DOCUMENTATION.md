# CAREERSAATHI — REST API Documentation

**Tagline:** *"Sahi Career, Saath Parivaar Ka."*  
**Base URL:** `http://localhost:5000/api`

---

## 1. Authentication
### `POST /api/auth`
Register or authenticate student/parent user.
- **Request Body:**
  ```json
  {
    "email": "student@careersaathi.in",
    "name": "Rahul Verma",
    "role": "student",
    "language": "en"
  }
  ```
- **Response (200 OK):**
  ```json
  {
    "success": true,
    "token": "jwt-demo-u-1728412800",
    "user": { "id": "u-1728412800", "email": "student@careersaathi.in", "name": "Rahul Verma", "role": "student", "language": "en" }
  }
  ```

---

## 2. Student & Parent Profiles
### `GET /api/student/profile` & `POST /api/student/profile`
Retrieve or update student profile (interests, skills, education, location).

### `GET /api/parent/profile` & `POST /api/parent/profile`
Retrieve or update parent concern checklist and custom question.

### `GET /api/family/profile`
Retrieve joint family profile with mismatch analysis between student preference and parent concerns.

---

## 3. Vocational Career Trades
### `GET /api/careers`
Retrieve all 10 demo vocational trades with NCVET NSQF levels, earnings, and placement rates.
- **Response (200 OK):**
  ```json
  {
    "success": true,
    "count": 10,
    "disclaimer": "Demo / Hackathon Dataset (NCVET & NSDC Aligned)",
    "trades": [ ... ]
  }
  ```

### `GET /api/careers/:id`
Retrieve detailed breakdown for a specific trade (e.g. `solar-tech`, `electrician`, `ev-specialist`).

---

## 4. Career Recommendations Engine
### `POST /api/recommendations`
Score and rank trades based on student aptitude and parent security goals.
- **Request Body:**
  ```json
  {
    "studentProfile": { "interests": ["Solar & Green Energy"], "educationLevel": "Class 10th Passed" },
    "parentProfile": { "selectedConcerns": ["security", "income"] }
  }
  ```
- **Response (200 OK):**
  ```json
  {
    "success": true,
    "topMatches": [
      {
        "id": "solar-tech",
        "titleEn": "Solar PV Technician & Installer",
        "matchScore": 87,
        "matchReasonsEn": ["Matches student's interest in Clean Energy", "High Parent Job Security Rating (4.9/5.0)"]
      }
    ],
    "mismatchFound": false,
    "alignmentScore": 83
  }
  ```

---

## 5. Conversational AI & RAG Pipeline
### `POST /api/chat`
Execute RAG pipeline to retrieve factual NCVET specs before LLM synthesis.
- **Request Body:**
  ```json
  {
    "query": "Is Solar Technician a permanent job?",
    "speaker": "parent",
    "language": "en"
  }
  ```
- **Response (200 OK):**
  ```json
  {
    "success": true,
    "response": {
      "id": "ai-1728412800",
      "query": "Is Solar Technician a permanent job?",
      "textEn": "91% NCVET Verified Placement rate under Tata Power Solar. Solar Technicians are essential infrastructure services backed by PM Surya Ghar Yojana...",
      "intent": "job_security_reassurance",
      "confidenceScore": 0.94,
      "isGrounded": true,
      "requiresCounsellorEscalation": false,
      "sentiment": "Positive"
    }
  }
  ```

---

## 6. Trade Comparison & Skill Roadmaps
### `POST /api/compare`
Side-by-side comparison for up to 3 trades.

### `GET /api/roadmap/:career_id`
Retrieve 5-phase visual progression roadmap from Foundation Skills to Entry Job & B.Voc degree.

---

## 7. Human Counsellor Escalation
### `POST /api/counsellor-request`
Book 1-on-1 expert call when parent concerns or complex situations require human guidance.

---

## 8. Admin Telemetry & Analytics
### `GET /api/admin/analytics`
Retrieve national platform metrics, parent hesitation breakdown %, trade demand %, and escalation rates.

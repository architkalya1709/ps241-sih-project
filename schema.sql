-- CAREERSAATHI Production PostgreSQL Database Schema
-- Aligned with NCVET, NSDC, PMKVY & Skill India Frameworks

CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(64) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(32) NOT NULL DEFAULT 'student', -- 'student', 'parent', 'admin'
    language VARCHAR(10) NOT NULL DEFAULT 'en', -- 'en', 'hi'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS students (
    id VARCHAR(64) PRIMARY KEY,
    user_id VARCHAR(64) REFERENCES users(id) ON DELETE CASCADE,
    age INT,
    state VARCHAR(100),
    district VARCHAR(100),
    area_type VARCHAR(50), -- 'Rural', 'Semi-Urban', 'Urban'
    education_level VARCHAR(100),
    academic_stream VARCHAR(100),
    academic_performance VARCHAR(50),
    interests TEXT[], -- Array of strings
    skills TEXT[],
    preferred_work_type VARCHAR(100),
    preferred_work_location VARCHAR(100),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS parents (
    id VARCHAR(64) PRIMARY KEY,
    user_id VARCHAR(64) REFERENCES users(id) ON DELETE CASCADE,
    student_id VARCHAR(64) REFERENCES students(id) ON DELETE CASCADE,
    selected_concerns TEXT[],
    custom_question TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS families (
    id VARCHAR(64) PRIMARY KEY,
    student_id VARCHAR(64) REFERENCES students(id) ON DELETE CASCADE,
    parent_id VARCHAR(64) REFERENCES parents(id) ON DELETE CASCADE,
    mismatch_score FLOAT DEFAULT 0.0,
    joint_verdict TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS trades (
    id VARCHAR(64) PRIMARY KEY,
    title_en VARCHAR(255) NOT NULL,
    title_hi VARCHAR(255) NOT NULL,
    category_en VARCHAR(100) NOT NULL,
    category_hi VARCHAR(100) NOT NULL,
    match_baseline INT DEFAULT 75,
    eligibility_en VARCHAR(255) NOT NULL,
    eligibility_hi VARCHAR(255) NOT NULL,
    course_duration_en VARCHAR(100) NOT NULL,
    course_duration_hi VARCHAR(100) NOT NULL,
    nsqf_level INT NOT NULL DEFAULT 4,
    parent_safety_rating NUMERIC(3, 1) DEFAULT 4.8,
    parent_security_rating NUMERIC(3, 1) DEFAULT 4.9,
    nctv_accredited BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS courses (
    id VARCHAR(64) PRIMARY KEY,
    trade_id VARCHAR(64) REFERENCES trades(id) ON DELETE CASCADE,
    name_en VARCHAR(255) NOT NULL,
    name_hi VARCHAR(255) NOT NULL,
    duration VARCHAR(100) NOT NULL,
    certifying_body VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS training_providers (
    id VARCHAR(64) PRIMARY KEY,
    trade_id VARCHAR(64) REFERENCES trades(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    state VARCHAR(100) NOT NULL,
    nsdc_accredited BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS locations (
    id VARCHAR(64) PRIMARY KEY,
    state VARCHAR(100) NOT NULL,
    district VARCHAR(100) NOT NULL,
    trade_demand_score INT DEFAULT 85
);

CREATE TABLE IF NOT EXISTS skills (
    id VARCHAR(64) PRIMARY KEY,
    trade_id VARCHAR(64) REFERENCES trades(id) ON DELETE CASCADE,
    name_en VARCHAR(255) NOT NULL,
    name_hi VARCHAR(255) NOT NULL,
    category VARCHAR(50) DEFAULT 'vocational' -- 'foundation', 'vocational', 'advanced'
);

CREATE TABLE IF NOT EXISTS job_roles (
    id VARCHAR(64) PRIMARY KEY,
    trade_id VARCHAR(64) REFERENCES trades(id) ON DELETE CASCADE,
    title_en VARCHAR(255) NOT NULL,
    title_hi VARCHAR(255) NOT NULL,
    avg_starting_salary VARCHAR(100),
    avg_growth_salary VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS earnings (
    id VARCHAR(64) PRIMARY KEY,
    trade_id VARCHAR(64) REFERENCES trades(id) ON DELETE CASCADE,
    starting_min INT NOT NULL,
    starting_max INT NOT NULL,
    growth_5yr_min INT NOT NULL,
    growth_5yr_max INT NOT NULL,
    pf_esi_benefits BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS placements (
    id VARCHAR(64) PRIMARY KEY,
    trade_id VARCHAR(64) REFERENCES trades(id) ON DELETE CASCADE,
    placement_rate INT NOT NULL,
    verified_partners_en TEXT NOT NULL,
    verified_partners_hi TEXT NOT NULL,
    govt_scheme VARCHAR(255) DEFAULT 'PMKVY 4.0 & NAPS'
);

CREATE TABLE IF NOT EXISTS career_progression (
    id VARCHAR(64) PRIMARY KEY,
    trade_id VARCHAR(64) REFERENCES trades(id) ON DELETE CASCADE,
    step_number INT NOT NULL,
    phase_en VARCHAR(100) NOT NULL,
    phase_hi VARCHAR(100) NOT NULL,
    role_en VARCHAR(255) NOT NULL,
    role_hi VARCHAR(255) NOT NULL,
    estimated_income VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS parent_concerns (
    id VARCHAR(64) PRIMARY KEY,
    concern_key VARCHAR(64) UNIQUE NOT NULL,
    title_en VARCHAR(255) NOT NULL,
    title_hi VARCHAR(255) NOT NULL,
    description_en TEXT NOT NULL,
    description_hi TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS counselling_sessions (
    id VARCHAR(64) PRIMARY KEY,
    family_id VARCHAR(64) REFERENCES families(id) ON DELETE CASCADE,
    started_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    message_count INT DEFAULT 0,
    sentiment_before VARCHAR(32) DEFAULT 'Concerned',
    sentiment_after VARCHAR(32) DEFAULT 'Positive'
);

CREATE TABLE IF NOT EXISTS counsellor_requests (
    id VARCHAR(64) PRIMARY KEY,
    user_id VARCHAR(64) REFERENCES users(id) ON DELETE CASCADE,
    concern_topic VARCHAR(255) NOT NULL,
    language VARCHAR(50) NOT NULL DEFAULT 'Hindi',
    preferred_date VARCHAR(50) NOT NULL,
    preferred_time VARCHAR(50) NOT NULL,
    communication_mode VARCHAR(100) NOT NULL DEFAULT 'Phone Call',
    status VARCHAR(50) NOT NULL DEFAULT 'Pending', -- 'Pending', 'Assigned', 'Completed'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS engagement_events (
    id VARCHAR(64) PRIMARY KEY,
    user_id VARCHAR(64),
    event_type VARCHAR(100) NOT NULL,
    payload JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

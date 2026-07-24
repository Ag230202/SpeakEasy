---
trigger: always_on
---

Act as a Staff Software Engineer and Technical Writer.

Your task is to analyze my entire GitHub repository and produce production-quality documentation in Markdown (`README.md`).

Treat the repository as if it will be open-sourced and maintained by engineers unfamiliar with the codebase.

## Objectives
- Explain the project from both a user and developer perspective.
- Cover every major component, folder, module, and workflow.
- Make the documentation sufficient for a new contributor to understand and work on the project without reading the entire codebase.

## Analysis Requirements

Read and understand:
- Project structure
- Source code
- Configuration files
- Environment variables
- Build system
- Dependencies
- APIs
- Database models
- Authentication
- Business logic
- Utility functions
- Architecture
- Design patterns
- Deployment setup
- Tests
- CI/CD (if present)

Do not guess. Infer only from the repository. Clearly mark uncertain assumptions.

---

## Generate a Complete README.md

Structure it as follows:

# Project Name

## Overview
- What problem it solves
- Who it is for
- Key capabilities

## Features
- Major features
- Core functionality
- Technical highlights

## Tech Stack

Group by:
- Frontend
- Backend
- Database
- AI/ML
- Cloud
- DevOps
- Libraries
- Tools

## Architecture

Explain:
- High-level architecture
- Request flow
- Data flow
- Module interaction

Use Mermaid diagrams where helpful.

## Folder Structure

Explain every important directory and its purpose.

Example:

```text
src/
├── controllers/
├── services/
├── models/
├── routes/
├── middleware/
└── utils/
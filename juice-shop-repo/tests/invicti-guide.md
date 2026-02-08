# Invicti (Netsparker) Local Integration Guide

Invicti requires a local scan agent to test applications that are not publicly accessible (like `localhost`).

## Step 1: Install Scan Agent

1. Log in to your **Invicti Enterprise** dashboard.
2. Go to **Agents > Manage Agents > Configure New Agent**.
3. Download the **Linux or Docker Agent**.
4. Install it on your machine or as a container.

## Step 2: Configure the Agent

Update the `appsettings.json` in your agent folder with:

- **ApiToken**: Your Invicti API Token.
- **AgentName**: A unique name (e.g., `local-mac-agent`).

## Step 3: Add Target in Invicti

1. Go to **Targets > New Target**.
2. URL: `http://localhost:8080` (or your local IP).
3. Set **Mode** to **Internal**.
4. Assign the target to your `local-mac-agent`.

## Step 4: Run Scan

Select the target and click **New Scan**. The local agent will tunnel the traffic safely from Invicti to your local environment.

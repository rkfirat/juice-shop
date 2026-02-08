#!/bin/bash

# Ensure the app is running
if ! docker ps | grep -q "cybertedu-app"; then
  echo "Error: App container is not running. Please run 'docker-compose up -d' first."
  exit 1
fi

echo "Starting Nuclei Scan against http://localhost:8080..."

# Run Nuclei via Docker
docker run --rm -v $(pwd)/nuclei-results:/output projectdiscovery/nuclei:latest \
  -u http://host.docker.internal:8080 \
  -o /output/results.txt \
  -status

echo "Scan complete. Results saved to nuclei-results/results.txt"

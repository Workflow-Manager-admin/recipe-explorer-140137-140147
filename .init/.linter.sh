#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-explorer-140137-140147/recipes_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


#!/bin/bash

# Get the base directory of the project
base_dir="$(cd "$(dirname "$0")" && cd ..&& pwd)"
action='add_passwords'
timestamp=$(date +'%Y%m%d%H%M%S')

file_path="$base_dir/migrations"
# format: timestamp_action.sql
touch "$file_path/${timestamp}_${action}.sql"
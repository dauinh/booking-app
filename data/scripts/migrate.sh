#!/bin/bash

migration_file="20230618214745_add_passwords.sql"

# Get the base directory of the project
base_dir="$(cd "$(dirname "$0")" && cd .. && pwd)"
file_path="$base_dir/migrations/$migration_file"

command="$(psql -d booking_app -f $file_path)"
echo $command
#!/bin/bash

# Refer to https://github.com/mikaelvesavuori/security-testing-demos for the origin of this content

REPORT_FOLDER="reports"
mkdir -p $REPORT_FOLDER

###########
# Checkov #
###########

echo "Running checkov..."

checkov -d . > $REPORT_FOLDER/checkov.txt

#########
# Trivy #
#########

echo "Running trivy..."

trivy config . > $REPORT_FOLDER/trivy_directory_config.txt
trivy fs . > $REPORT_FOLDER/trivy_directory_fs.txt

########
# Syft #
########

echo "Running syft to scan source code directory..."

syft packages dir:. > $REPORT_FOLDER/syft_src_dir.txt

############
# gitleaks #
############

echo "Running gitleaks (no-git mode)..."

gitleaks detect --source . --no-git
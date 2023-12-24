const { execSync } = require('child_process');

const validateBranchName = () => {
  try {
    const branchName = execSync('git rev-parse --abbrev-ref HEAD')
      .toString()
      .trim();
    const branchRegex = /^(feature|bugfix|hotfix)\/[a-z0-9-]+$/;

    if (!branchRegex.test(branchName)) {
      console.error('Error: Invalid branch name format.');
      process.exit(1);
    } else {
      console.log('Branch name is valid:', branchName);
    }
  } catch (error) {
    console.error('Error occurred:', error);
    process.exit(1);
  }
};

validateBranchName();

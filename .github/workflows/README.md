# GitHub Actions Workflows

## CI Workflow (ci.yml)

This workflow runs on every push and pull request to `main` and `develop` branches.

### What it checks:

1. **TypeScript compilation** - Ensures code compiles without errors
2. **ESLint** - Checks for code quality and Next.js best practices
3. **Prettier** - Verifies code formatting consistency
4. **Unit Tests** - Runs all Vitest test suites
5. **Build** - Ensures the application builds successfully

### Matrix Strategy:

- Node.js versions: 18.x, 20.x
- Runs on Ubuntu Latest
- 15-minute timeout for jobs

### Local Testing:

Before pushing, you can run the same checks locally:

```bash
# Run all checks at once
pnpm run ci

# Or run individually:
pnpm type-check    # TypeScript check
pnpm lint          # ESLint
pnpm format:check  # Prettier check
pnpm test          # Unit tests
pnpm build         # Build check
```

### Branch Protection:

Use the `ci-success` job as a required status check in GitHub branch protection rules.

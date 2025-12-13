---
title: "The Six-Month Rule: Designing Pipelines for Future You"
description: "How to build analysis workflows that survive lab turnover, publication review, and your own forgetfulness."
pubDate: 2025-12-10
tags: ["data analysis", "python", "workflow"]
---

There is a specific feeling of dread that every computational biologist knows. It happens when a reviewer asks for a minor revision on a figure you generated six months ago.

You open the Jupyter notebook. You hit "Run All." And the screen lights up with red errors. The file paths were hardcoded to a folder that no longer exists. The libraries have updated and broken your syntax. You don't remember if you filtered the outliers *before* or *after* normalization.

I call this the **Six-Month Rule**: *Write every line of code assuming you will have complete amnesia when you return to it in six months.*

Here is how I structure my analysis to survive the gap.

### 1. Treat Raw Data as a Physical Specimen

In the wet lab, you would never contaminate your original stock solution. You take an aliquot and work with that. Data should be treated the same way.

**The Rule:** Raw data is immutable (read-only).

```python
# BAD: Overwriting your source
df = pd.read_csv("data.csv")
df = df.dropna()
df.to_csv("data.csv") # The original data is now destroyed

# GOOD: The pipeline approach
raw_df = pd.read_csv("data/raw/2024-assay-01.csv")
clean_df = process_data(raw_df)
clean_df.to_csv("data/processed/2024-assay-01_clean.csv")
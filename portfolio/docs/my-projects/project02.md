---
title: "Analysis of Thai Capital Market Linkages: Part III. Vine Copula and Monte Carlo Value-at-Risk/Expected Shortfall"
hide_title: true
---

import GithubIcon from '@site/src/components/GithubIcon';

<header>
    <GithubIcon title="Analysis of Thai Capital Market Linkages: Part III. Vine Copula and Monte Carlo Value-at-Risk/Expected Shortfall" link="https://github.com/KongkanKalakan/ThaiCapitalMktLink-VineCopula"/>
</header>

---

## About The Project

Analytically thorough understanding of financial-market dynamics is fundamental to the promotion of capital-market innovation, efficiency, and resilience; innovative, efficient, and resilient capital market, in turn, is fundamental to the sustainable economic development of the nation and the robust financial stability of its economy. Based on our earlier papers, which saw (Bivariate) Copula (semi-parametric statistics) techniques used to analyse pairwise probabilistic linkages amongst 14 variables representing domestic (Thai) and international (US/Emerging Market/Asia) foreign-exchange, fixed-income, and equity market movements, as well as foreign portfolio-investment flows into Thai equity shares and bonds, as well as comparison of Copula-based vs. Granger-Causality-based assessment of probabilistic linkages and their implication on resulting Katz/Betweenness Centrality Analysis, here we set out to build a multivariate distribution “from the ground up” using each capital market variable’s own marginal distributions and pairwise bivariate copulas under so-called Vine Copula construction. With individual marginal distributions linked up with said vine copula, we can extract practical insights from the resultant multivariate distribution, notably via the application of Monte Carlo simulation method. To demonstrate this application usage, we choose a few of our 14 capital market variables to define a demonstrative investment universe, from which we can then compute Monte Carlo Value-at-Risk (VaR) and Expected Shortfall (ES) for any hypothetical portfolio allocation.
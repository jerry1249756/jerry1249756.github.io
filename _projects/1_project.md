---
layout: page
title: Approximate Logic Synthesis with Multi-Objective Simulated Annealing
description: Final Project on Logic Synthesis and Verification
img: assets/img/LSV_title.jpg
importance: 1
category: projects
---

We proposed a method for Approximate Logic Synthesis (ALS) by applying the local approximate change (LACs) with a Multi-Objective Simulated Annealing (MOSA) engine. Our method includes LACs which can reduce the error rate with probability. With an alternation between LACs and exact circuit optimizations, we can explore better solutions compared to the existing ALS tool ALSRAC on EPFL benchmarks.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/LSV_main.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/LSV_result.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    (Left) The overall ALS flow. (Right) ALS area result and error rate vs. iterations with 1% error rate threshold on cla32 benchmark.
</div>

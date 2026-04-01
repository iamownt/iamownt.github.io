---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently a Ph.D. student at the [Department of Industrial and Systems Engineering](https://www.polyu.edu.hk/ise/) of The Hong Kong Polytechnic University, supervised by [Prof. Xiaoge Zhang](https://www.polyu.edu.hk/ise/people/academic-staff/xiaoge-zhang/) and [Prof. Nick Chung](https://www.polyu.edu.hk/ise/people/academic-staff/nick-sh-chung/). Previously, I received my M.E. and B.E. from the [School of Automation Science and Electrical Engineering](https://www.buaa.edu.cn/) of Beihang University in 2023 and 2020 respectively, supervised by [Prof. Lei Ren](https://shi.buaa.edu.cn/renlei/en/more/190928/jsjjgd/index.htm) and [Prof. Lin Zhang](https://scholar.google.com/citations?hl=en&user=OfYkLTgAAAAJ&view_op=list_works&sortby=pubdate). I also spent over a year working as a Research Intern at Baidu Research (Cognitive Computing Lab).

During my Ph.D. journey, I work closely with [Prof. Chao Yan](https://scholar.google.com/citations?hl=en&user=_yXrQFkAAAAJ) and [Prof. Bradley Malin](https://www.vumc.org/dbmi/person/bradley-malin-phd) from Vanderbilt University, and [Prof. Lei Ren](https://shi.buaa.edu.cn/renlei/en/more/190928/jsjjgd/index.htm) and [Prof. Lin Zhang](https://scholar.google.com/citations?hl=en&user=OfYkLTgAAAAJ&view_op=list_works&sortby=pubdate) from Beihang University.

# 🔥 News
- *2026.03*: &nbsp;🎉🎉 TRUECAM is accepted by **Nature Biomedical Engineering**.
- *2026.01*: &nbsp;🎉🎉 one paper is accepted by **IEEE Transactions on Systems, Man, and Cybernetics: Systems**.
- *2025.04*: &nbsp;🎉🎉 one survey paper is accepted by **Journal of Reliability Science and Engineering**.
- *2022.11*: &nbsp;🎉🎉 My third paper on **IEEE Transactions on Industrial Informatics** is accepted.
- *2022.09*: &nbsp;🎉🎉 Our model achieves state-of-the-art performance on [Waymo Open Motion Dataset](https://waymo.com/open/challenges/2022/motion-prediction/). Best Single Model: "TypeNMS".
- *2022.08*: &nbsp;🎉🎉 My article on Zhihu received 2w+ readings and 230+ stars, see [How long does it take to train a Transformer-based model](https://zhuanlan.zhihu.com/p/456046786).

# 📝 Publications
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NBME 2026</div><img src='images/TRUECAM.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Implementing Trust in Non-Small Cell Lung Cancer Diagnosis with a Conformalized Uncertainty-Aware AI Framework in Whole-Slide Images](https://www.researchsquare.com/article/rs-5723270/v1.pdf)

X. Zhang†*, **T. Wang†**, C. Yan†, F. Najdawi, K. Zhou, Y. Ma, Y. Cheung, B. A. Malin


[**Code**](https://github.com/iamownt/TRUECAM) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- We propose a framework to simultaneously ensure data and model trustworthiness: 1) a spectral-normalized neural Gaussian process (SNGP) to establish informative data representation and uncertainty quantification, 2) an elimination of ambiguous tiles (EAT) mechanism for filtering out noisy patches from slides, and 3) conformal prediction (CP) to enable a statistically guaranteed error rate.
</div>
</div>


- <span style="background-color: #003399; color: white; padding: 1px 6px; border-radius: 3px; font-weight: bold; font-size: 0.85em; margin-right: 5px;">TSMC</span> [**Causality-Informed Neural Networks for Regularized Learning in Regression Problems**](https://doi.org/10.1109/TSMC.2025.3646993), X. Zhang\*, **T. Wang**, X. L. Wang, F. L. Fan, Y. M. Cheung, and I. Bose.

- <span style="background-color: #003399; color: white; padding: 1px 6px; border-radius: 3px; font-weight: bold; font-size: 0.85em; margin-right: 5px;">JRSE</span> [**Reliability engineering, risk management, and trustworthiness assurance for AI systems**](https://doi.org/10.34133/jrse.0022), X. Zhang\*, **T. Wang**, L. Ma, S. Mahadevan. <span style="color: vkacj; font-weight: bold;">(Excellent Article of the Year)</span>

- <span style="background-color: #003399; color: white; padding: 1px 6px; border-radius: 3px; font-weight: bold; font-size: 0.85em; margin-right: 5px;">TII</span> [**A Lightweight and Adaptive Knowledge Distillation Framework for Remaining Useful Life Prediction**](https://doi.org/10.1109/TII.2022.3223071), L. Ren\*, **T. Wang**, Z. Jia, F. Li, H. Han. (*Student first author*)

- <span style="background-color: #003399; color: white; padding: 1px 6px; border-radius: 3px; font-weight: bold; font-size: 0.85em; margin-right: 5px;">TII</span> [**A Data-driven Self-supervised LSTM-DeepFM Model for Industrial Soft Sensor**](https://doi.org/10.1109/TII.2021.3131471), L. Ren\*, **T. Wang**, Y. Laili, L. Zhang. (*Student first author*)
- <span style="background-color: #003399; color: white; padding: 1px 6px; border-radius: 3px; font-weight: bold; font-size: 0.85em; margin-right: 5px;">TII</span> [**LM-CNN: A Cloud-Edge Collaborative Method for Adaptive Fault Diagnosis With Label Sampling Space Enlarging**](https://doi.org/10.1109/TII.2022.3180389), L. Ren\*, Z. Jia, **T. Wang**, Y. Ma, Lihui Wang.

<span> † means equal contribution and * indicates my supervisor.</span>


# 🎖 Honors and Awards
- *2023*: Outstanding Graduate, Beihang University. 
- *2023*: Outstanding Academic Innovation Achievement Award, Beihang University. 
- *2022*: National Scholarship, Ministry of Education of China. 
- *2020, 2021, 2022*: Second Prize Academic Scholarship, Beihang University. 
- *2019*: First Prize of The 11th National College Students Mathematics Competition. 
- *2018*: Special Scholarship for Discipline Competition, Beihang University. 
- *2017*: First Prize of The 9th National College Students Mathematics Competition. 
- *2015*: Second Prize of The Final of Fujian High School Mathematics Competition. 

# 💼 Academic Services

- **Journal Reviewer:** IEEE Transactions on Neural Networks and Learning Systems (TNNLS), IEEE Transactions on Automation Science and Engineering (T-ASE), Journal of Industrial Information Integration (JIII), BMC Medical Informatics and Decision Making
- **Conference Reviewer:** International Conference on Learning Representations (ICLR), Neural Information Processing Systems (NeurIPS)

# 🍹 Misc

* 🎸 I love rock and hip-hop music. Mayday and Jay Chou are my favorites.
* 🥾 I am passionate about hiking — every weekend I spend half day exploring trails in Hong Kong. I have completed over 400 km, including the famous MacLehose Trail (100 km), Lantau Trail (70 km), and Hong Kong Trail (50 km). Here are some photos I took along the way:

<div style="display: flex; gap: 8px; justify-content: center; margin-top: 20px;">
  <img src="images/scene_image1.jpg" style="width: 32%; border-radius: 4px; object-fit: cover; aspect-ratio: 4/3;" alt="Hiking scene 1">
  <img src="images/scene_image2.jpg" style="width: 32%; border-radius: 4px; object-fit: cover; aspect-ratio: 4/3;" alt="Hiking scene 2">
  <img src="images/scene_image3.jpg" style="width: 32%; border-radius: 4px; object-fit: cover; aspect-ratio: 4/3;" alt="Hiking scene 3">
</div>

[//]: # (# 📖 Educations)

[//]: # (- *2024.09 - 2027.09 &#40;expected&#41;*, Ph.D. in Industrial and Systems Engineering, **The Hong Kong Polytechnic University**. )

[//]: # (- *2020.09 - 2023.01*, M.Sc. in Electronic Information, **Beihang University**. )

[//]: # (- *2016.09 - 2020.07*, B.S. in Automation, **Beihang University**. )

[//]: # (# 💬 Invited Talks)

[//]: # (- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. )

[//]: # (- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]]&#40;https://github.com/&#41;)

[//]: # (# 💻 Internships)

[//]: # (- *2019.05 - 2020.02*, [Lorem]&#40;https://github.com/&#41;, China.)
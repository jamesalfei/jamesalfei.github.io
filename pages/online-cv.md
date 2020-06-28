---
layout: page
title: Online CV
permalink: /online-cv/
---

<div class="online-cv" markdown="1">
<div class="mainDetails">
<div id="headshot" markdown="1">

![James Alfei](/assets/headshot.jpg "James Alfei")

</div>

<div id="name" markdown="1">

# {{ site.author }}

## {{ site.data.online_cv.job_title }}

</div>

<div id="contactDetails" markdown="1">

* e: <a href="mailto:{{ site.email }}" target="_blank">{{ site.email }}</a>
* w: <a href="{{ site.url }}">{{ site.data.online_cv.website }}</a>
* m: {{ site.data.online_cv.mobile }}

</div>
<div class="clear"></div>
</div>

<div id="mainArea">
<section>
<article>
<div class="sectionTitle" markdown="1">

# Personal Profile

</div>

<div class="sectionContent" markdown="1">

{{ site.data.online_cv.personal_profile }}

</div>
</article>
<div class="clear"></div>
</section>


<section>
<div class="sectionTitle" markdown="1">
<h1>Work Experience</h1>
</div>

<div class="sectionContent">

{% for experience in site.data.online_cv.work_experience %}
<article>
<h2>{{ experience.job_title }}</h2>
<p class="subDetails">{{ experience.period }}</p>
{{ experience.details }}
</article>
{% endfor %}

</div>
<div class="clear"></div>
</section>


<section>
<div class="sectionTitle">
<h1>Key Skills</h1>
</div>

<div class="sectionContent">
<div class="keySkills" markdown="1">
{% for skill in site.data.online_cv.key_skills %}

# {{ skill }}

{% endfor %}
</div>
</div>
<div class="clear"></div>
</section>


<section>
<div class="sectionTitle">
<h1>Education</h1>
</div>

<div class="sectionContent">
<article>
<h2>College/University</h2>
<p class="subDetails">Qualification</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus
hendrerit. Curabitur non consequat enim.</p>
</article>

</div>
<div class="clear"></div>
</section>

</div>
</div>

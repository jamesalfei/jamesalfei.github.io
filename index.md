---
layout: home
---

<div class="online-cv" markdown="1">
<div class="mainDetails">
<div id="headshot" markdown="1">
![James Alfei](/assets/headshot.png "James Alfei")
</div>

<div id="name" markdown="1">

# {{ site.author.name }}

## {{ site.data.online_cv.job_title }}
</div>

<div id="contactDetails" markdown="1">

* e: <a href="mailto:{{ site.author.email }}" target="_blank">{{ site.author.email }}</a>
* w: <a href="{{ site.url }}">{{ site.data.online_cv.website }}</a>
* m: <a href="tel:{{ site.data.online_cv.mobile }}">{{ site.data.online_cv.mobile }}</a>

<div class="social-links">
  {%- include social.html -%}
</div>

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
# Work Experience
</div>

<div class="sectionContent">
{% for experience in site.data.online_cv.work_experience %}
<div id="companyLogo" markdown="1">
![{{experience.company}}](/assets/{{ experience.image }}.png "{{ experience.company }}")
</div>
<article markdown="1">
## {{ experience.job_title }} - [{{ experience.company }}]({{ experience.url }}){:target="_blank"}
<p class="subDetails">{{ experience.period }}</p>
<br>
{{ experience.details }}
</article>
<br>
{% endfor %}
</div>
<div class="clear"></div>
</section>


<section>
<div class="sectionTitle" markdown="1">
# Education
</div>

<div class="sectionContent">
{% for education in site.data.online_cv.education %}
<article markdown="1">
## {{ education.institution }}
<p class="subDetails">{{ education.period }}</p>
{{ education.qualification }}
</article>
{% endfor %}

</div>
<div class="clear"></div>
</section>


<section>
<div class="sectionTitle" markdown="1">
# Professional qualifications
</div>

<div class="sectionContent">
{% for qual in site.data.online_cv.profesional_qualifications %}
<article markdown="1">
## {{ qual.name }}
<p class="subDetails">{{ qual.period }}</p>
{{ qual.level }}
</article>
{% endfor %}

</div>
<div class="clear"></div>
</section>


<section>
<div class="sectionTitle" markdown="1">
# Volunteering
</div>

<div class="sectionContent">
{% for vol in site.data.online_cv.volunteering %}
<article markdown="1">
## {{ vol.name }}
<p class="subDetails">{{ vol.period }}</p>
</article>
<br>
{% endfor %}


</div>
<div class="clear"></div>
</section>



<section>
<div class="sectionTitle" markdown="1">
# Skills
</div>

<div class="sectionContent">
<div class="keySkills" markdown="1">
{% for skill in site.data.online_cv.key_skills %}
{{ skill }}
{% endfor %}
</div>
</div>
<div class="clear"></div>
</section>

</div>
</div>


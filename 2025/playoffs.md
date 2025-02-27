---
archetype: tournament
type: playoffs
year: 2025
style:  tabs       # defines body main class
script: standsched
layout: default
datatable: true
---
<h2>Playoff Bracket ({{page.year}})</h2>

<p> This year, the fourth place team after regular season does not make the playoffs. </p>
<p> The first place team goes directly to the finals. 2nd and 3rd place play in the semifinals. </p>

<h2> {{page.year}} Playoffs </h2>
<table class="display3">
  <colgroup>
    <col class="fifty"/>
    <col class="thirty"/>
    <col class="twenty"/>
  </colgroup>
  <thead>
    <tr>
      <th>Matchup</th>
      <th>Date</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    {% for game in site.data.seasons.twentyfive.games %}
    {% assign match = game[1] %}
    {% if match.stage == "po" %}
	{% assign home = site.data.seasons.twentyfive.teams[match.home_team_name] %}
	{% assign away = site.data.seasons.twentyfive.teams[match.away_team_name] %}
    <tr>
      {% if match.fin == "no" %}
      <td>{{home.name}} <b>vs</b> {{away.name}}</td>
      <td>{{match.type}}, {{match.short_date}}</td>
      <td> TBD </td>
      {% else %}
      {% if match.home_score > match.away_score   %}
      <td><u>{{home.name}}</u> <b>vs</b> {{away.name}}</td>
      <td>{{match.type}}, {{match .short_date}}</td>
      <td>{{home.tag}}, <b>{{match.home_score}}-{{match.away_score}}</b> {{match.ot}}</td>
      {% else %}
      <td>{{home.name}} <b>vs</b> <u>{{away.name}}</u></td>
      <td>{{match.type}}, {{match.short_date}}</td>
      <td>{{away.tag}}, <b>{{match.away_score}}-{{match.home_score}}</b> {{match.ot}}</td>
      {% endif %}
      {% endif %}	
    </tr>
    {% endif %}
    {% endfor %}
  </tbody>
 </table>
<br>
<br>
<img src="/resources/{{page.year}}/bracket.png" alt="Championship Bracket">

<br>

---
archetype: tournament
type: teams
year: 2025
id: 4
style: tabs       # defines body main class
script: tables
layout: default
datatable: true
---
{% for team_hash in site.data.seasons.twentyfive.teams %}
{% assign team = team_hash[1] %}
{% if team.team_id == page.id %}
<h2> {{page.year}} Season - {{team.name}} </h2>
<p><b>Regular Season Record</b>: {{team.wins}} - {{team.losses}}</p>
<p><b>Captain</b>: {{team.captain}}</p>
<p><b>Players</b>: 
{% for player in team.players %}
<a href="/players/{{player.player_id}}">{{player.name}},</a>
{% endfor %}
{% endif %}
{% endfor %}
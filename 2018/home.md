---
archetype: tournament
type: home
year: 2018
style: tabs       # defines body main class
script: stats
layout: default
datatable: true
---
<h2> 9tth Jesuwon Basketball Tournament ({{page.year}})</h2>

<p> Note: This tournament was played with 1s/2s, first to 15 (17 in playoffs). It was also on the old court, where the two point line was halfcourt.</p>

<h3> Champions: Mula Gang </h3>
{% for team_hash in site.data.seasons.eighteen.teams %}
{% assign team = team_hash[1] %}
{% if team.team_id == 4 %}
<p><b>Regular Season Record</b>: {{team.wins}} - {{team.losses}}</p>
<p><b>Captain</b>: {{team.captain}}</p>
<p><b>Players</b>: 
{% for player in team.players %}
<a href="/players/{{player.player_id}}">{{player.name}},</a>
{% endfor %}
{% endif %}
{% endfor %}

<br>
<br>
<h3> Weekly MVP Winners </h3>
<p> In this season, there were no end of season awards. Instead, there was a weekly MVP.</p>
<table class="display2">
  <colgroup>
      <col class="thirty"/>
      <col class="thirty"/>
      <col class="forty"/>
  </colgroup>
  <thead style="text-align: center;">
    <tr>
        <th>Award</th>
        <th>Winner</th>
        <th>Impact Stats</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
    <tr>
      <td>Week 1 MVP</td>
      <td>Bryce Kim</td>
      <td>13 Reb, 3 Blk</td>
    </tr>
    <tr>
      <td>Week 2 MVP</td>
      <td>Abe Park</td>
      <td>9 Pts, 2 Ast, 2 Stl</td>
    </tr>
    <tr>
      <td>Week 3 MVP</td>
      <td>David Lee</td>
      <td>7 Pts, 10 Reb, 6 Stl</td>
    </tr>
    <tr>
      <td>Semi Finals MVP</td>
      <td>Ryan Won</td>
      <td>9 Pts, 2 Ast, 3 Stl</td>
    </tr>
    <tr>
      <td>Finals MVP</td>
      <td>Bryce Kim</td>
      <td>6 Pts, 12 Reb, 3 Stl, 5 Blk</td>
    </tr>
  </tbody>
</table>
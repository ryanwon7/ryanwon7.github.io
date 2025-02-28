---
archetype: tournament
type: home
year: 2019
style: tabs       # defines body main class
script: stats
layout: default
datatable: true
---
<h2> 10th Jesuwon Basketball Tournament ({{page.year}})</h2>

<p> Note: This tournament was played on the old court, where the three point line was midcourt. It also had shorter games (20 minutes).</p>

<h3> Champions: Locusts and Wild Honey </h3>
{% for team_hash in site.data.seasons.nineteen.teams %}
{% assign team = team_hash[1] %}
{% if team.team_id == 3 %}
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
<h3> Season Award Winners </h3>
<table class="display2">
  <colgroup>
      <col class="fifty"/>
      <col class="fifty"/>
  </colgroup>
  <thead style="text-align: center;">
    <tr>
        <th>Award</th>
        <th>Winner</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
    <tr>
      <td>Most Valuable Player</td>
      <td>Abe Park</td>
    </tr>
    <tr>
      <td>Defensive Player of the Year</td>
      <td>Bryce Kim</td>
    </tr>
    <tr>
  		<td>Most Improved Player</td>
      <td>Ryan Lee</td>
    </tr>
    <tr>
  		<td>Rookie of the Year</td>
      <td>Andy Moon</td>
    </tr>
  </tbody>
</table>
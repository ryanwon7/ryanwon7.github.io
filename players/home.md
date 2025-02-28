---
layout: default
style: tabs
script: tables
datatable: true
---
<h2>Tournament Players</h2>
<p>Over the years there have been many participants in the annual tournament! Click a name to view the profile and tournament history for a specific person. You can also sort the table to view players.</p>
<table class="display7">
  <colgroup>
    <col class="fifty"/>
    <col class="thirty"/>
    <col class="twenty"/>
  </colgroup>
  <thead>
    <tr>
      <th>Name</th>
      <th>Last Played</th>
      <th>Seasons Played</th>
    </tr>
  </thead>
  <tbody>
    {% assign players_dt = site.data.players.players %}
    {% for player in players_dt %}
    <tr>
      <td><a href="/players/{{player.player_id}}">{{player.player_name}}</a></td>
      <td>{{player.seasons[0].year}}</td>
      <td>{{player.seasons.size}}</td>
    </tr>
    {% endfor %}
  </tbody>
 </table>
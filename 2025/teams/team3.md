---
archetype: tournament
type: teams
year: 2025
id: 3
style: tabs       # defines body main class
script: tables
layout: default
datatable: true
---
{% for team_hash in site.data.seasons.twentyfive.teams %}
{% assign team = team_hash[1] %}
{% if team.team_id == page.id %}
<h2>{{team.name}} ({{page.year}})</h2>
<p><b>Season Record</b>: {{team.wins}} - {{team.losses}}</p>
<p><b>Captain</b>: {{team.captain}}</p>
<h4>Players</h4>
<table class="display5">
  <caption style="text-align: center;"> <b>POS</b> = Position, <b>YRS</b> = JBA Seasons Played</caption>
  <colgroup>
      <col class="forty"/>
      <col class="thirty"/>
      <col class="fifteen"/>
      <col class="fifteen"/>
  </colgroup>
  <thead>
    <tr>
      <th>Name</th>
      <th>Group</th>
      <th>POS</th>
      <th>YRS</th>
    </tr>
  </thead>
  <tbody>
{% assign players_dt = site.data.players.players %}
{% for player in team.players %}
	{% assign indexer = player.player_id | minus: 1 %}
  	{% assign player_yp = 0 %}
  	<tr>
  		<td><a href="/players/{{player.player_id}}">{{player.name}}</a></td>
  		{% for season in players_dt[indexer].seasons %}
  			{% if season.year < page.year %}
  				{% assign player_yp = player_yp | plus: 1 %}
  			{% elsif season.year == page.year %}
  				<td>{{season.group}}</td>
  				<td>{{season.pos}}</td>
  			{% endif %}
  		{% endfor %}
  		<td>{{player_yp}}</td>
  	</tr>
{% endfor %}
{% endif %}
{% endfor %}
  </tbody>
 </table>
 <br>
 <br>
<h4> Schedule </h4>
<table class="display3">
  <colgroup>
      <col class="thirty"/>
      <col class="twenty"/>
      <col class="twenty"/>
      <col class="twenty"/>
  </colgroup>
  <thead>
    <tr>
      <th>Opponent</th>
      <th>Date</th>
      <th>W/L</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    {% for game in site.data.seasons.twentyfive.games %}
	    {% assign match = game[1] %}
		{% if match.home_team_id == page.id %}
		{% assign opp = match.away_team_name %}
		{% assign opp_data = site.data.seasons.twentyfive.teams[opp] %}
	    <tr>
	      <td>vs <a href="/{{page.year}}/teams/team{{opp_data.team_id}}">{{opp_data.name}}</a></td>
	      <td>{{match.short_date}} </td>
		  {% if match.fin == "yes"  %}
		  {% if match.home_score > match.away_score %}
		  <td>Won</td>
	      <td>{{match.home_score}}-{{match.away_score}} {{match.ot}}</td>
	      {% elsif match.home_score < match.away_score %}
	      <td>Lost</td>
	  	  <td>{{match.home_score}}-{{match.away_score}} {{match.ot}}</td>
	      {% endif %}
	      {% else %}
	      <td>-</td>
	      <td>-</td>
	      {% endif %}
	    </tr>
		{% elsif match.away_team_id == page.id %}
		{% assign opp = match.home_team_name %}
		{% assign opp_data = site.data.seasons.twentyfive.teams[opp] %}
	    <tr>
	      <td>@ <a href="/{{page.year}}/teams/team{{opp_data.team_id}}">{{opp_data.name}}</a></td>
	      <td>{{match.short_date}} </td>
		  {% if match.fin == "yes"  %}
		  {% if match.home_score > match.away_score %}
		  <td>Lost</td>
	      <td>{{match.home_score}}-{{match.away_score}} {{match.ot}}</td>
	      {% elsif match.home_score < match.away_score %}
	      <td>Won</td>
	  	  <td>{{match.home_score}}-{{match.away_score}} {{match.ot}}</td>
	      {% endif %}
	      {% else %}
	      <td>-</td>
	      <td>-</td>
	      {% endif %}
	    </tr>
	    {% endif %}
	    {% endfor %}
  </tbody>
 </table>
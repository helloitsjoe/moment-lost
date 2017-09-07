import html from "innerself";
import { connect } from "./store";

function ScoreScreen({results, target}) {
  const score = Math.floor(results[results.length - 1] * 100);
  return html`
    <img class="ui"
      style="opacity: .5"
      src="${target.snapshot}">
    <div class="ui action"
      onclick="dispatch('PLAY_AGAIN')">
      <div>${score}%</div>
    </div>
  `;
}

export default connect(ScoreScreen);

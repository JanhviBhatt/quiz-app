import { CHANGE_SCORE } from "./actionTypes"
export const handleScoreChange =(payload) =>({
    type: CHANGE_SCORE,
    payload,
})
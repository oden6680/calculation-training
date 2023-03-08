"use client";
import Grid from '@mui/material/Grid';

const N = 25;
const minNum = -10;
const maxNum = 10;

const makeFactorizationQuestion = (num1, num2) => {
    const xSquared = "x^2";
    const xTerm = num1 + num2 >= 0 ? "+" + (num1 + num2) + "x" : (num1 + num2) + "x";
    const constantTerm = num1 === 0 || num2 === 0 ? "" : num1 * num2 >= 0 ? "+" + num1 * num2 : num1 * num2;
    return xSquared + xTerm + constantTerm;
}

const makeFactorizationAnswer = (num1, num2) => {
    let firstFactor = num1 === 0 ? "x" : "(x" + (num1 > 0 ? "+" + num1 : num1) + ")";
    let secondFactor = num2 === 0 ? "x" : "(x" + (num2 > 0 ? "+" + num2 : num2) + ")";
    if (secondFactor === "x") {
        secondFactor = firstFactor;
        firstFactor = "x";
    }
    return firstFactor + secondFactor;
};


export const Factorization = () => {
    const questionList = [];
    const answerList   = [];
    for(let i = 0; i < N; i++){
        const leftNum  = Math.floor(Math.random()*(maxNum+1-minNum))+minNum;
        const rightNum = Math.floor(Math.random()*(maxNum+1-minNum))+minNum;
        const question = makeFactorizationQuestion(leftNum,rightNum);
        const answer = makeFactorizationAnswer(leftNum, rightNum);
        questionList.push(question);
        answerList.push(answer)
    }

    return (
        <Grid container>
            <Grid item xs={6}>
                {questionList.map((question,index) => (
                    <p style={{ fontSize: "3em" }}>{ "(" + String(Number(index)+1) + ")" + question}</p>
                ))}
            </Grid>
            <Grid item xs={6}>
                {answerList.map((answer,index) => (
                    <p style={{ fontSize: "3em" }}>{ "(" + String(Number(index)+1) + ")" + answer}</p>
                ))}
            </Grid>
        </Grid>
    );
};
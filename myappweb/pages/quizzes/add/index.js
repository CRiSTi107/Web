import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';

class AddQuiz extends Component {
    state = {
        lastUniqueKey: 11,
        title: "",
        image: "",
        questions: [
            {
                id: 1,
                question: "",
                options: [
                    {
                        id: 2,
                        option: "",
                        isanswear: true
                    },
                    {
                        id: 3,
                        option: "",
                        isanswear: false
                    },
                    {
                        id: 4,
                        option: "",
                        isanswear: false
                    },
                    {
                        id: 5,
                        option: "",
                        isanswear: false
                    }
                ]

            },
            {
                id: 6,
                question: "",
                options: [
                    {
                        id: 7,
                        option: "",
                        isanswear: true
                    },
                    {
                        id: 8,
                        option: "",
                        isanswear: false
                    },
                    {
                        id: 9,
                        option: "",
                        isanswear: false
                    },
                    {
                        id: 10,
                        option: "",
                        isanswear: false
                    }
                ]

            }
        ]
    }

    onChangeQuestion = (e) => {

        const id = e.target.id;
        const value = e.target.value;

        console.log(id + " " + value);

        let questions = [...this.state.questions];

        //Find index of specific object using findIndex method.    
        let objIndex = this.state.questions.findIndex(obj => obj.id == id);

        let item = { ...questions[objIndex] };
        item.question = value;
        questions[objIndex] = item;

        this.setState({ questions });
    }

    onChangeOption = (e) => {
        const id = e.target.id;
        const questionId = e.target.dataset.questionid;
        const value = e.target.value;

        console.log(id + " " + questionId + " " + value);

        let questions = [...this.state.questions];
        let questionIndex = this.state.questions.findIndex(obj => obj.id == questionId);
        let question = { ...questions[questionIndex] };

        let options = [...question.options];
        let optionIndex = options.findIndex(obj => obj.id == id);
        let option = { ...options[optionIndex] };

        option.option = value;

        options[optionIndex] = option;
        question.options = options;
        questions[questionIndex] = question;

        this.setState({ questions });

    }

    render() {

        let divKey = 100000000000;
        let questionCount = 1;
        let optionCount = 1;

        return (
            <Fragment>
                {this.state.questions.map(question =>
                    <div key={divKey++}>
                        <TextField
                            inputProps={
                                {
                                    id: question.id
                                }
                            }
                            key={question.id}
                            label={'Question ' + questionCount++}
                            variant="outlined"
                            value={question.question}
                            onChange={(e) => this.onChangeQuestion(e)}
                        />
                        <br />

                        {(optionCount = 1) && false}
                        {question.options.map(option =>
                            <TextField
                                inputProps={
                                    {
                                        id: option.id,
                                        'data-questionid': question.id
                                    }
                                }
                                key={option.id}
                                label={'Option ' + optionCount++}
                                variant="outlined"
                                value={option.option}
                                onChange={(e) => this.onChangeOption(e)}
                            />
                        )}

                        <br />
                        <br />
                    </div>
                )}
            </Fragment>
        );
    }
}

export default AddQuiz;
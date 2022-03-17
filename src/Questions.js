import React, { useEffect, useState } from "react";

export default function Questions({ attacks = [], setFinalAttacks }) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (attacks?.length === 1) {
      setFinalAttacks([{ idx: 0, sum: 0 }]);
      return;
    }
    let tempAns = [];
    attacks?.forEach((attack, idx) => {
      tempAns.push([]);
      attack.questions.forEach((question, idx1) => {
        tempAns[idx].push(question.ans.no);
      });
    });

    setAnswers(tempAns);
  }, [attacks, setFinalAttacks]);

  const handleAnsChange = (idx1, idx2, ans) => {
    setAnswers((prev) => {
      const temp = [...prev];
      temp[idx1][idx2] = parseInt(ans);
      return temp;
    });
  };

  const handleFinalPrediction = () => {
    const temp = answers.map((el, idx) => ({
      idx: idx,
      sum: el.reduce((acc, c) => acc + c, 0),
    }));
    temp.sort((a, b) => (a.sum < b.sum ? 1 : -1));
    const primary = temp.length ? temp[0] : [];

    setFinalAttacks(temp.filter((el) => el.sum === primary.sum));
  };

  if (!answers?.length) return null;

  return (
    <div className="mt-4">
      <h2>Answer few questions to help us find exact attack type</h2>

      <table className="table ">
        <thead>
          <tr>
            <th>Questions</th>
            <th>No</th>
            <th>Maybe</th>
            <th>Yes</th>
          </tr>
        </thead>
        <tbody>
          {answers.length &&
            attacks?.map((attack, idx1) => (
              <React.Fragment key={idx1}>
                {attack?.questions.map((question, idx2) => (
                  <tr key={question.ques}>
                    <td>{question.ques}</td>
                    <td>
                      <input
                        type="radio"
                        name={"ans" + idx1 + idx2}
                        value={0}
                        checked={answers[idx1][idx2] === 0}
                        onChange={(e) =>
                          handleAnsChange(idx1, idx2, e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        name={"ans" + idx1 + idx2}
                        value={1}
                        checked={answers[idx1][idx2] === 1}
                        onChange={(e) =>
                          handleAnsChange(idx1, idx2, e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        name={"ans" + idx1 + idx2}
                        value={2}
                        checked={answers[idx1][idx2] === 2}
                        onChange={(e) =>
                          handleAnsChange(idx1, idx2, e.target.value)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
        </tbody>
      </table>

      <button className="btn btn-primary" onClick={handleFinalPrediction}>
        Submit answers
      </button>
    </div>
  );
}

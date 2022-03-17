import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { dataset } from "./dataset";
import Questions from "./Questions";

const defaultValues = {
  story: "",
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  let { current: countKeywords } = useRef({});
  const [possibleAttacks, setPossibleAttacks] = useState([]);
  const [finalAttacks, setFinalAttacks] = useState([]);
  const [safeMsg, setSafeMsg] = useState();

  const handleFormSubmit = (data) => {
    countKeywords = {};
    setFinalAttacks([]);

    Object.keys(dataset).forEach((key) => {
      dataset[key].keyword.forEach((el) => {
        if (data.story.includes(el)) {
          if (countKeywords[key]) countKeywords[key]++;
          else countKeywords[key] = 1;
        }
      });
    });

    const predictedList = Object.keys(countKeywords).map((key) => ({
      name: key,
      value: countKeywords[key],
    }));

    predictedList.sort((a, b) => (a.value > b.value ? -1 : 1));
    const primaryAttack = predictedList.length ? predictedList[0] : [];
    const filteredAttacks = predictedList;
    predictedList.filter((el) => el.value === primaryAttack.value);

    setPossibleAttacks(filteredAttacks);
    setFinalAttacks([]);
    if (!filteredAttacks.length) setSafeMsg("Don't worry you are safe");
    else setSafeMsg();
  };

  return (
    <div className="container shadow rounded m-2 mx-auto p-5">
      <h1 className="text-center mb-3 text-info">Attack Predictor</h1>

      <form noValidate onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-group">
          <label htmlFor="story-input" className="form-label">
            Enter you story
          </label>
          <textarea
            id="story-input"
            rows={10}
            {...register("story", { required: "Story field can't be empty" })}
            className="form-control"
          ></textarea>

          {errors.story && (
            <div className="alert alert-danger my-2">
              {errors.story.message}
            </div>
          )}
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>

      {safeMsg ? (
        <div className="alert alert-success my-3">{safeMsg}</div>
      ) : (
        <div>
          {possibleAttacks.length ? (
            <div>
              <h4>Possible attack Type/Types:</h4>
              {possibleAttacks.map((possibleAttack) => (
                <div
                  key={possibleAttack.name}
                  className="badge bg-warning shadow p-3 m-2"
                >
                  {possibleAttack.name}
                </div>
              ))}
            </div>
          ) : null}

          {!finalAttacks.length ? (
            <Questions
              attacks={possibleAttacks?.map((el) => dataset[el.name]) ?? []}
              setFinalAttacks={setFinalAttacks}
            />
          ) : null}

          {finalAttacks.length ? (
            <div className="mt-4">
              <h4>Final atttack type/types: </h4>{" "}
              {finalAttacks?.map((fa) => (
                <div key={fa.idx} className="badge badge-info p-3 m-2 shadow">
                  {possibleAttacks[fa.idx].name}
                </div>
              ))}
            </div>
          ) : null}

          {finalAttacks?.length
            ? finalAttacks.map((fa) => (
                <div key={fa.idx} className="mt-4">
                  <h2>Attack parameters for {possibleAttacks[fa.idx].name}</h2>
                  <table className="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <td>Motivation Factor</td>
                        <td>
                          {
                            dataset[possibleAttacks[fa.idx].name][
                              "Motivation Factor"
                            ]
                          }
                        </td>
                      </tr>
                      <tr>
                        <td>Crime Structrue</td>
                        <td>
                          {
                            dataset[possibleAttacks[fa.idx].name][
                              "Crime Structrue"
                            ]
                          }
                        </td>
                      </tr>
                      <tr>
                        <td>Motivation Level</td>
                        <td>
                          {
                            dataset[possibleAttacks[fa.idx].name][
                              "Motivation Level"
                            ]
                          }
                        </td>
                      </tr>
                      <tr>
                        <td>Skill Set</td>
                        <td>
                          {dataset[possibleAttacks[fa.idx].name]["Skill Set"]}
                        </td>
                      </tr>
                      <tr>
                        <td>Impact Level</td>
                        <td>
                          {
                            dataset[possibleAttacks[fa.idx].name][
                              "Impact Level"
                            ]
                          }
                        </td>
                      </tr>
                      <tr>
                        <td>Modus Operandi</td>
                        <td>
                          {
                            dataset[possibleAttacks[fa.idx].name][
                              "Modus Operandi"
                            ]
                          }
                        </td>
                      </tr>
                      <tr>
                        <td>Countermeasures</td>
                        <td>
                          {
                            dataset[possibleAttacks[fa.idx].name][
                              "Countermeasures"
                            ]
                          }
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))
            : null}
        </div>
      )}
    </div>
  );
}

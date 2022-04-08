import { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

function Drugs(props) {
  const { drugsStore } = props;
  const { drugs, drug } = drugsStore;
  useEffect(() => {
    drugsStore.drugsRead();
  }, [drugsStore]);
  return (
    <div>
      <h3>Drugs</h3>
      <hr className="d-block" />
      <div>
        <h4>Read</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>UUID</th>
              <th>Summary</th>
              <th>Quantity for simplicity</th>
              <th>Date</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody>
            {drugs.map((drug, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text" placeholder="Name" value={drug.name}
                    onChange={event => { drug.name = event.target.value }}
                  />
                </td>
                <td>
                  <input
                    type="text" placeholder="UUID" value={drug.UUID}
                    onChange={event => { drug.UUID = event.target.value }}
                  />
                </td>
                <td>

                  <input
                    type="text" placeholder="Summary" value={drug.summary}
                    onChange={event => { drug.summary = event.target.value }}
                  />

                </td>
                <td>
                  <input
                    type="text" placeholder="Quantity for simplicity" value={drug.quantitySimplicity}
                    onChange={event => { drug.quantitySimplicity = event.target.value }}
                  />
                </td>
                <td>{drug.date}</td>
                <td>
                  <button onClick={() => drugsStore.drugsUpdate(index, drug)}>Update</button>
                  <button onClick={() => drugsStore.drugsDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="d-block" />
      <div>
        <h4>Create</h4>
        <input
          type="text" placeholder="Name" value={drug.name}
          onChange={event => { drug.name = event.target.value }}
        />
        <input
          type="text" placeholder="UUID" value={drug.UUID}
          onChange={event => { drug.UUID = event.target.value }}
        />
        <input
          type="text" placeholder="Summary" value={drug.summary}
          onChange={event => { drug.summary = event.target.value }}
        />
        <input
          type="text" placeholder="Quantity for simplicity" value={drug.quantitySimplicity}
          onChange={event => { drug.quantitySimplicity = event.target.value }}
        />
        <button onClick={() => drugsStore.drugsCreate()}>Create</button>
      </div>
    </div >
  )
}

export default inject('drugsStore')(observer(Drugs));

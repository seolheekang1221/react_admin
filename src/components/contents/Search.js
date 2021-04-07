import { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';

function Search(props) {
  const url = new URL(window.location.href);
  const spSearch = url.searchParams.get('q') || '';
  const { membersStore, searchStore, history } = props;
  const { members } = membersStore;
  const [ q, setQ ] = useState('');
  const searchRead = (event) => {
    history.push(`/search?q=${q}`);
    event.preventDefault();
  };
  useEffect(() => {
    searchStore.searchRead(spSearch);
    setQ(spSearch);
  }, [searchStore, spSearch]);
  return (
    <div>
      <h3>Search</h3>
      <hr className="d-block" />
      <div>
        <form onSubmit={(event) => {searchRead(event)}}>
          <input
            type="text" placeholder="Search"
            value={q}
            onChange={event => {setQ(event.target.value)}}
          />
          <button>Search</button>
        </form>
      </div>
      <hr className="d-block" />
      <div>
        <table className="table-search">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.age}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default inject('membersStore', 'searchStore')(observer(Search));

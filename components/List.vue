<template>
  <div>
    <table>
      <thead>
        <tr>
          <th
            class="col-head"
            scope="col"
            v-bind:class="item.column.toLowerCase()"
            v-for="item in columns"
            :key="item.field">{{item.column}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="row" v-for="item in list" :key="item.objectID">
          <td
            v-bind:data-label="col.column"
            v-bind:class="col.column.toLowerCase()"
            v-for="col in columns"
            :key="col.field">

            <select v-if="col.column === 'Options'" id="options">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>

            <a v-if="col.column === 'Title'" v-bind:href="item.url" target="_blank">{{item.title}}</a>

            <span v-else>{{item[col.field]}}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: ['list'],
  data() {
    return {
      columns: [
        { column: 'Author', field: 'author' },
        { column: 'Points', field: 'points' },
        { column: 'Title', field: 'title' },
        { column: 'Date', field: 'created_at' },
        { column: 'Options', field: '' }
      ],
    }
  },
  methods: {},
}
</script>
<style scoped>
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table tr {
  /*background-color: #f8f8f8;*/
  border: 1px solid #ddd;
  padding: .35em;
}

table th,
table td {
  padding: .625em;
  text-align: left;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

.row:hover {
  background-color: rgb(250, 250, 250);
}

.col-head:hover {
  background-color: rgb(247, 248, 248);
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
}
</style>


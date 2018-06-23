<template>
  <div class="Calendar">
    <div class="header">
      <h2>2018 06</h2>
      <input type="date"> <input type="date">
      <button>◀</button>    <button>▶</button>
    </div>
    
    <div class="Cal">
      <table>
        <thead>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
          </tr>
          <tr>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>23</td>
            <td>24</td>
          </tr>
          <tr>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Calendar',
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
    div {
      text-align: center;
    }
    .header{
      display: inline-block;
      text-align: center;
      font-size: 70px;
      h2 {
        line-height: 100px;
      }
      input{
        font-size: 25px;
      }
      button{
        font-size: 25px
      }
    }
    table {
      background: #fff;
      border-collapse: collapse;
      color: #222;
      font-size: 45px;
      width: 60%;
      margin: auto;
    }
    td {
      border: 1px solid #ccc;
      color: #444;
      line-height: 100px;
      text-align: center;
    }
    
    .Cal table th:first-child,
    .Cal table td:first-child{
      color: red;
    }
    .Cal th:last-child,
    .Cal td:last-child{
      color: blue;
    }
    th {
      line-height: 80px;
      font-weight: 700;
    }
</style>

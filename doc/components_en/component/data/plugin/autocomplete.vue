<template>
  <div class="doc">
    <h2>AutoComplete</h2>
  
    <h3>Basic</h3>
    <p>You can use <code>dict</code> call the system's global configuration, or by <code>datas</code>passing data.</p>
    <p>You can <code>autocomplete.default</code> set the control's default parameter values through global configuration parameters.</p>
    <p>There are three types of data: <code>key</code>,<code>title</code>,<code>object</code>, if the demand for more complex and listen for the <code>change</code> event manual processing.</p>
    <example demo="dataplugins/autocomplete1"></example>
    
    <h3>Selection mode</h3>
    <example demo="dataplugins/autocomplete8"></example>
  
    <h3>Can enter any mode</h3>
    <p class="tip">Use <code>mustMatch</code> parameters.</p>
    <p>This method can only choose to use <code>title</code>与<code>object</code> type of data.</p>
    <example demo="dataplugins/autocomplete9"></example>

    <h3>Custom style</h3>
    <p>Define your own style with custom parameters <code>className</code>.</p>
    <example demo="dataplugins/autocomplete14"></example>

    <h3>Custom content</h3>
    <p>Through the <code>slot</code> of <code>top</code> and <code>bottom</code>, custom the content.</p>
    <example demo="dataplugins/autocomplete6"></example>
  
    <h3>Pass external parameters</h3>
    <example demo="dataplugins/autocomplete10"></example>

    <h3>disabled</h3>
    <example demo="dataplugins/autocomplete2"></example>
<!--   
    <h3>多选</h3>
    <example demo="dataplugins/autocomplete3"></example> -->
  
    <!-- <h3>远程</h3>
    <p>通过<code>options</code>的<code>loadData</code>方法执行远程数据查询，执行完毕后调用<code>callback</code>方法返回数据。</p>
    <p>下面的用例使用的只是单纯的title值，请使用<code>type="title"</code>。</p>
    <example demo="dataplugins/autocomplete4"></example>
  
    <h3>选择模式</h3>
    <example demo="dataplugins/autocomplete5"></example> -->

    <!-- <h3>自定义返回数据的结构</h3>
    <p></p>
    <example demo="dataplugins/autocomplete11"></example> -->

    <!-- <h3>可以任意输入对象多选</h3> -->
    <!-- <example demo="dataplugins/autocomplete12"></example> -->
  
    <h3>Global configuration</h3>
    <example demo="dataplugins/autocomplete13"></example>
    
    <h3>AutoComplete Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>disabled</td>
        <td>disabled</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>type</td>
        <td>The format of the data</td>
        <td>String</td>
        <td>key, object, title</td>
        <td>key</td>
      </tr>
      <tr>
        <td>option</td>
        <td>Configuration items, see the options below for details</td>
        <td>Object</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>multiple</td>
        <td>Multiple choice</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>mustMatch</td>
        <td>Must be the selected item</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>datas</td>
        <td>Selected data</td>
        <td>Array, Object</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>dict</td>
        <td>Use the globally defined dictionary</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>Show the default prompt</td>
        <td>String</td>
        <td>-</td>
        <td>Search Input</td>
      </tr>
      <tr>
        <td>show</td>
        <td>Default displayed text, for storing and storing key values, but with the show value</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>emptyContent</td>
        <td>No prompt for search value</td>
        <td>String</td>
        <td>-</td>
        <td>No results found</td>
      </tr>
      <tr>
        <td>config</td>
        <td>Using the global configuration method</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>className</td>
        <td>Custom className</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>autoSelectFirst</td>
        <td>Whether to automatically select the first option</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>endInput</td>
        <td>Setting special character trigger enter</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>showDropdownWhenNoResult</td>
        <td>Whether the dropdown list is displayed when there is no data</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
    </table>

    

    <h3>AutoComplete Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
        <th>Data</th>
      </tr>
      <tr>
        <td>input</td>
        <td>The model value triggers a change</td>
        <td>Model corresponding value</td>
      </tr>
      <tr>
        <td>change</td>
        <td>The model value triggers a change</td>
        <td>The current data object, as well as the trigger source event: enter, blur, picker, remove, clear</td>
      </tr>
    </table>

    <h3>AutoComplete Method</h3>
    <table class="table">
      <tr>
        <th>Method</th>
        <th>Description</th>
        <th>Parameters</th>
      </tr>
      <tr>
        <td>hide</td>
        <td>Hide the dropdown box</td>
        <td>none</td>
      </tr>
    </table>
    
    <h3>option Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>key</td>
        <td>Key field of data</td>
        <td>String</td>
        <td>-</td>
        <td>Global configuration<code>autocomplete.default.key</code></td>
      </tr>
      <tr>
        <td>title</td>
        <td>The title of the data corresponds to the field</td>
        <td>String</td>
        <td>-</td>
        <td>Global configuration<code>autocomplete.default.title</code></td>
      </tr>
      <tr>
        <td>getValue</td>
        <td>Define the standard output format through data	</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>minWord</td>
        <td>The minimum number of words to start the query</td>
        <td>Number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>loadData</td>
        <td>Asynchronous data acquisition method</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>delay</td>
        <td>The delay time for data acquisition, improving performance in milliseconds</td>
        <td>Number</td>
        <td>-</td>
        <td>100</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  }
}
</script>

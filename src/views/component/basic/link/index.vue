<template>
  <div>
    <div class="page-component page-component__content">
      <div class="content-wrap">
        <section class="content element-doc content">
          <h2 id="link-wen-zi-lian-jie">Link 文字链接</h2>
          <p>文字超链接</p>
          <h3 id="ji-chu-yong-fa">基础用法</h3>
          <p>基础的文字链接用法。</p>
          <div class="demo-block demo-zh-CN demo-link">
            <div class="source">
              <div>
                <div>
                  <a
                    class="el-link el-link--default is-underline"
                    href="https://element.eleme.io"
                    target="_blank"
                    ><!----><span class="el-link--inner">默认链接</span
                    ><!----></a
                  ><a class="el-link el-link--primary is-underline" href=""
                    ><!----><span class="el-link--inner">主要链接</span
                    ><!----></a
                  ><a class="el-link el-link--success is-underline" href=""
                    ><!----><span class="el-link--inner">成功链接</span
                    ><!----></a
                  ><a class="el-link el-link--warning is-underline" href=""
                    ><!----><span class="el-link--inner">警告链接</span
                    ><!----></a
                  ><a class="el-link el-link--danger is-underline" href=""
                    ><!----><span class="el-link--inner">危险链接</span
                    ><!----></a
                  ><a class="el-link el-link--info is-underline" href=""
                    ><!----><span class="el-link--inner">信息链接</span
                    ><!----></a
                  >
                </div>
              </div>
            </div>
          </div>
          <h3 id="jin-yong-zhuang-tai">禁用状态</h3>
          <p>文字链接不可用状态。</p>
          <div class="demo-block demo-zh-CN demo-link">
            <div class="source">
              <div>
                <div>
                  <a class="el-link el-link--default is-disabled"
                    ><!----><span class="el-link--inner">默认链接</span
                    ><!----></a
                  ><a class="el-link el-link--primary is-disabled"
                    ><!----><span class="el-link--inner">主要链接</span
                    ><!----></a
                  ><a class="el-link el-link--success is-disabled"
                    ><!----><span class="el-link--inner">成功链接</span
                    ><!----></a
                  ><a class="el-link el-link--warning is-disabled"
                    ><!----><span class="el-link--inner">警告链接</span
                    ><!----></a
                  ><a class="el-link el-link--danger is-disabled"
                    ><!----><span class="el-link--inner">危险链接</span
                    ><!----></a
                  ><a class="el-link el-link--info is-disabled"
                    ><!----><span class="el-link--inner">信息链接</span
                    ><!----></a
                  >
                </div>
              </div>
            </div>
          </div>
          <h3 id="xia-hua-xian">下划线</h3>
          <p>文字链接下划线。</p>
          <div class="demo-block demo-zh-CN demo-link">
            <div class="source">
              <div>
                <div>
                  <a class="el-link el-link--default" href=""
                    ><!----><span class="el-link--inner">无下划线</span
                    ><!----></a
                  ><a class="el-link el-link--default is-underline" href=""
                    ><!----><span class="el-link--inner">有下划线</span
                    ><!----></a
                  >
                </div>
              </div>
            </div>
          </div>
          <h3 id="tu-biao">图标</h3>
          <p>带图标的文字链接可增强辨识度。</p>
          <div class="demo-block demo-zh-CN demo-link">
            <div class="source">
              <div>
                <div>
                  <a class="el-link el-link--default is-underline" href=""
                    ><i class="el-icon-edit"></i
                    ><span class="el-link--inner">编辑</span
                    ><!----></a
                  ><a class="el-link el-link--default is-underline" href=""
                    ><!----><span class="el-link--inner"
                      >查看<i class="el-icon-view el-icon--right"></i></span
                    ><!----></a
                  >
                </div>
              </div>
            </div>
          </div>
          <h3 id="attributes">Attributes</h3>
          <table>
            <thead>
              <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>type</td>
                <td>类型</td>
                <td>string</td>
                <td>primary / success / warning / danger / info</td>
                <td>default</td>
              </tr>
              <tr>
                <td>underline</td>
                <td>是否下划线</td>
                <td>boolean</td>
                <td>—</td>
                <td>true</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>是否禁用状态</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
              <tr>
                <td>href</td>
                <td>原生 href 属性</td>
                <td>string</td>
                <td>—</td>
                <td>-</td>
              </tr>
              <tr>
                <td>icon</td>
                <td>图标类名</td>
                <td>string</td>
                <td>—</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  </div>
</template>


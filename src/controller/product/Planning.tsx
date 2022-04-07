import {Breadcrumb, Layout} from "antd";
import 'handsontable/dist/handsontable.full.css';
import {HotTable} from '@handsontable/react';
import {registerAllModules} from 'handsontable/registry';

export const Planning = () => {
    registerAllModules();

    const data = [
        ["任务", "执行时间", "工时", "执行人", "备注", "状态"],
        ["任务", "执行时间", "工时", "执行人", "备注", "状态"],
    ]

    return (
        <Layout.Content style={{background: '#fff'}}>
            <Breadcrumb style={{margin: '16px'}}>
                <Breadcrumb.Item>产品管理</Breadcrumb.Item>
                <Breadcrumb.Item>产品规划</Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <HotTable style={{margin: '10px'}}
                          settings={{
                              data: data,
                              colHeaders: ["任务", "执行时间", "时长", "执行人", "备注", "状态"],
                              stretchH: 'all',
                              colWidths: [240, 60, 30, 40, 140, 30],
                              // 最小行数
                              minRows: 50,
                              rowHeaders: true,
                              height: 'auto',
                              rowHeights: 24,
                              className: 'htCenter',
                              // cell: [{row: 0, col: 0, className: 'htCenter'}],
                              columns: [
                                  {}, {
                                      data: "date",
                                      type: 'date',
                                      dateFormat: 'YYYY-MM-DD',
                                      correctFormat: true
                                  }, {
                                      data: "length",
                                      type: 'numeric',
                                      validator: (val, callback) => {
                                          if (val > 4 || val <= 0) {
                                              return callback(false);
                                          } else {
                                              return callback(true);
                                          }
                                      },
                                  }, {}, {},
                                  {
                                      data: "status",
                                      type: 'checkbox',
                                  }
                              ],
                              contextMenu: {
                                  items: {
                                      "row_above": {
                                          name: '向上插一行'
                                      },
                                      "row_below": {
                                          name: '向下插一行'
                                      },
                                      "remove_row": {
                                          name: '删除当前行',
                                      },
                                  }
                              },
                              licenseKey: 'non-commercial-and-evaluation'
                          }}
                />
            </div>
        </Layout.Content>
    );
}
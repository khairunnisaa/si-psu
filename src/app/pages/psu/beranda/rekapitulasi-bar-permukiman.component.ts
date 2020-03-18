import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-psu-bar-permukiman',
  template: `
<!--    <ngx-charts-bar-vertical-stacked-->
<!--      [results]="chartData"-->
<!--      [xAxis]="true"-->
<!--      [yAxis]="true"-->
<!--      [customColors]="myColors">-->
<!--    </ngx-charts-bar-vertical-stacked>-->
<div echarts [options]="options" class="echart"></div>
  `,
})
export class RekapitulasiBarPermukimanComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: ['Sudah Serah Terima', 'Belum Serah Terima'],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: [
          {
            name: 'Jumlah',
            type: 'bar',
            barWidth: '60%',
            // barHeight : '80%',
            data: [
              {
                value: 120,
                itemStyle: {color: 'green'},
              },
              {
                value: 200,
                itemStyle: {color: 'yellow'},
              },
            ],
          },
        ],
      };
    });
  }

  // myColors: any = [
  //   { name: 'selected issues', value: '#dfdfdf' },
  //   { name: 'selected closed issues', value: '#ababab' },
  // ];
  //
  // chartData: any = [
  //   {
  //     'name': 'Mon',
  //     'series': [
  //       {
  //         'name': 'issues',
  //         'value': 42,
  //         barWidth: '60%',
  //       },
  //       {
  //         'name': 'closed issues',
  //         'value': 11,
  //         barWidth: '60%',
  //       },
  //     ],
  //   },
  //   {
  //     'name': 'Tue',
  //     'series': [
  //       {
  //         'name': 'Selected issues',
  //         'value': 28,
  //         barWidth: '60%',
  //       },
  //       {
  //         'name': 'closed issues',
  //         'value': 10,
  //         barWidth: '60%',
  //       },
  //     ],
  //   },
  //   {
  //     'name': 'Wed',
  //     'series': [
  //       {
  //         'name': 'issues',
  //         'value': 43,
  //         barWidth: '60%',
  //       },
  //       {
  //         'name': 'closed issues',
  //         'value': 8,
  //         barWidth: '60%',
  //       },
  //     ],
  //   },
  //   {
  //     'name': 'Thu',
  //     'series': [
  //       {
  //         'name': 'selected issues',
  //         'value': 34,
  //         barWidth: '60%',
  //       },
  //       {
  //         'name': 'closed issues',
  //         'value': 11,
  //         barWidth: '60%',
  //       },
  //     ],
  //   },
  //   {
  //     'name': 'Fri',
  //     'series': [
  //       {
  //         'name': 'issues',
  //         'value': 20,
  //       },
  //       {
  //         'name': 'selected closed issues',
  //         'value': 8,
  //         barWidth: '60%',
  //       },
  //     ],
  //   },
  // ]
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { JogoService } from '../service/jogo.service';
import { ChartDataSets, ChartOptions, plugins } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  jogos: any[] = [];

  closeResult: string = '';

  public baralhoId: number = 0;

  barChartData: ChartDataSets[] =
    [
      {
        data: [],
        label: 'Win'
      },
      {
        data: [],
        label: 'Loss'
      }
    ];

  barChartLabels: Label[] = [];

  barChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'PARTIDAS',
      fontColor: '#A8DADC',  // chart title color (can be hexadecimal too)
      fontSize: 20
    },
    legend: {
      display: true,
      labels: {
        fontColor: 'white',
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: 'white'
          },
          gridLines: {
            color: '#5f5e5e'
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            fontColor: 'white'
          }
        }
      ]
    }
  };

  barChartColors: Color[] = [
    {
      backgroundColor: 'rgba(75, 192, 192,0.6)',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 3
    },
    {
      backgroundColor: 'rgba(255, 36, 99,0.6)',
      borderColor: 'rgb(255, 36, 99)',
      borderWidth: 3
    }
  ];

  barChartLegend = true;
  barChartPlugins = [];
  barChartType = 'bar' as const;


  constructor(private route: ActivatedRoute, private jogoService: JogoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.baralhoId = params.id
    });
    this.jogos = this.jogoService.getjogosbyId(this.baralhoId);

    this.updateChart();
  }

  public getWinRate(jogo: any) {
    let win = jogo.win;
    let loss = jogo.loss;
    let total = win + loss;
    let winRate = (win / total) * 100;
    return winRate.toPrecision(3);
  }

  addNewjogo(jogo: any) {
    this.jogos.push(jogo);
    this.updateChart();
  }

  updateChart() {
    this.barChartData.forEach(ds => {
      ds.data = [];
    })
    this.barChartLabels = []

    this.jogos.forEach(jogo => {
      this.barChartLabels.push(jogo.id);
      this.barChartData.find(ds => ds.label == "Win")?.data?.push(jogo.win);
      this.barChartData.find(ds => ds.label == "Loss")?.data?.push(jogo.loss);
    });
  }
}

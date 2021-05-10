import { Component, OnInit } from '@angular/core';
import { PartidasService } from '../service/partidas.service';
import { BaralhoService } from '../service/baralho.service';
import { ChartDataSets, ChartOptions, plugins } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  partidas: any[] = [];
  baralho: any;

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
      fontSize: 15
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

  constructor(private route: ActivatedRoute, private partidasService: PartidasService, private baralhoService: BaralhoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.baralhoId = params.id
    });

    this.partidasService.listarIdBaralho(this.baralhoId).subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        this.partidas.push(res[index]);
      }
    });
    this.baralhoService.detalhes(this.baralhoId).subscribe(res => {
      this.baralho = Object.values(res);
    });

    this.updateChart();
  }

  public getWinRate(partida: any) {
    let win = partida.win;
    let loss = partida.loss;
    let total = win + loss;
    let winRate = (win / total) * 100;
    return winRate.toPrecision(3);
  }

  updateChart() {
    
    this.barChartData.forEach(ds => {
      ds.data = [];
    });

    this.barChartLabels = [];

    this.partidas.forEach(partida => {
      console.log(partida._id);
      console.log(partida.win);
      console.log(partida.loss);

      this.barChartLabels.push(partida._id);
      this.barChartData.find(ds => ds.label == "Win")?.data?.push(partida.win);
      this.barChartData.find(ds => ds.label == "Loss")?.data?.push(partida.loss);
    });
  }
}

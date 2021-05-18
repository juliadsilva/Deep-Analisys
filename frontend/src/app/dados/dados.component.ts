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
  dadosGrafico: any[] = [];
  winRates: any[] = [];
  baralho: any;

  public baralhoId: number = 0;

  lineChartData: ChartDataSets[] =
    [
      {
        data: [],
        label: 'WinRate'
      },
    ];

  lineChartLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'PARTIDAS',
      fontColor: '#A8DADC',
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

  lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(75, 192, 192,0.6)',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 3
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line' as const;

  constructor(private route: ActivatedRoute, private partidasService: PartidasService, private baralhoService: BaralhoService) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
    this.baralhoId = params.id
    });

    this.partidasService.listarIdBaralho(this.baralhoId).subscribe(res => {
      let win = 0;
      let loss = 0;
      let total = 0;
      let winRate = 0;

      if (res.length > 0) {     
        for (let index = 0; index < res.length; index++) {
          this.partidas.push(res[index]);
          win = res[index].win + win;
          loss = res[index].loss + loss;
        }
        total = win + loss;
        winRate = (win / total) * 100;      
      }
      else {
        winRate = 0;
      }
      
      let wr_baralho = {
        winrate: winRate.toPrecision(3)
      }
      this.winRates.push(winRate);
      this.baralhoService.atualizarWinRate(this.baralhoId, wr_baralho).subscribe();
    });

    this.baralhoService.detalhes(this.baralhoId).subscribe(res => {
      this.baralho = Object.values(res);
    });

    this.updateChart();
  }

  public getWinRate(partida: any) {
    let partid = partida;
    let win = partida.win;
    let loss = partida.loss;
    let total = win + loss;
    let winRate = (win / total) * 100;

    return winRate.toPrecision(3);
  }

  updateChart() {

    this.lineChartLabels = []

    this.lineChartData.forEach(ds => {
      ds.data = [];
    })

    this.partidasService.listarIdBaralho(this.baralhoId).subscribe(res => {
      this.dadosGrafico = res;
      for (let index = 0; index < this.dadosGrafico.length; index++) {
        this.lineChartLabels.push(this.dadosGrafico[index].ident);
        this.lineChartData.find(ds => ds.label == "WinRate")?.data?.push(this.winRates[index]);
      }
    });
  }
}

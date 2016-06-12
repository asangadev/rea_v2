import { DataService } from './data.service';
import {
  expect, it, iit, xit,
  describe, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, withProviders,
  async, inject
} from '@angular/core/testing';
import {Http, BaseRequestOptions, Response, BaseResponseOptions, ResponseOptions, HTTP_PROVIDERS} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {provide} from '@angular/core';

import {Observable} from 'rxjs/Observable';

describe('MockBackend: DataService', () => {
  let mockbackend, service;

  beforeEachProviders(() => [
    DataService,
    MockBackend,
    BaseRequestOptions,
    provide(Http, {
    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
      return new Http(backend, defaultOptions);
    },
    deps: [MockBackend, BaseRequestOptions]
  })
  ]);

  beforeEach(inject([MockBackend, DataService], (_mockbackend, _service) => {
    mockbackend = _mockbackend;
    service = _service;
  }))

  it('result array should match with given format', done => {
      let response = [{
        "price": "$000,000",
        "agency": {
            "brandingColors": {
                "primary": "#000000"
            },
            "logo": "someURL"
        },
        "id": "1",
        "mainImage": "someURL"
    }
  ];

      var options = new ResponseOptions({
        body: JSON.stringify(response)
      });

      var res = new Response(options);

      mockbackend.connections.subscribe(connection => {
        connection.mockRespond(new Response(options));
      });
      service.getResults().subscribe(properties => {
        //console.log(properties[0].price);
        expect(properties[0].price).toContain('$000,000');
        expect(properties[0].agency.brandingColors.primary).toContain('#000000');
        expect(properties[0].agency.logo).toContain('someURL');
        expect(properties[0].id).toContain('1');
        expect(properties[0].mainImage).toContain('someURL');
        //expect(properties).toContain('es');
        //expect(properties.length).toBe(2);
        done();
      });

    });



    it('saved array should match with given format', done => {
        let response = [{
          "price": "$000,000",
          "agency": {
              "brandingColors": {
                  "primary": "#000000"
              },
              "logo": "someURL"
          },
          "id": "1",
          "mainImage": "someURL"
      }
    ];

        var options = new ResponseOptions({
          body: JSON.stringify(response)
        });

        var res = new Response(options);

        mockbackend.connections.subscribe(connection => {
          connection.mockRespond(new Response(options));
        });
        service.getSaved().subscribe(properties => {
          //console.log(properties[0].price);
          expect(properties[0].price).toContain('$000,000');
          expect(properties[0].agency.brandingColors.primary).toContain('#000000');
          expect(properties[0].agency.logo).toContain('someURL');
          expect(properties[0].id).toContain('1');
          expect(properties[0].mainImage).toContain('someURL');
          //expect(properties).toContain('es');
          //expect(properties.length).toBe(2);
          done();
        });

      });
})

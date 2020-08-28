import { EventMqttService } from './../../services/event-mqtt.service';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { IMqttMessage } from "ngx-mqtt";

@Component({
  selector: 'app-event-stream-component',
  templateUrl: './event-stream-component.component.html',
  styleUrls: ['./event-stream-component.component.scss'],
})
export class EventStreamComponentComponent implements OnInit {

  events: any[];
    private deviceId: string;
    subscription: Subscription;

    constructor(
        private readonly eventMqtt: EventMqttService,
    ) {
    }

    ngOnInit() {
        this.subscribeToTopic();
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    private subscribeToTopic() {
        this.subscription = this.eventMqtt.topic(this.deviceId)
            .subscribe((data: IMqttMessage) => {
                let item = JSON.parse(data.payload.toString());
								this.events.push(item);
            });
    }

}

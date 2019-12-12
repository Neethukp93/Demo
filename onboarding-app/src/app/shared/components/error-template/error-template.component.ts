/**
 * @description Generic Error Template component for error types : error, warn and info
 * @author Neethu KP
 */

import {
  NgModule,
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  Optional
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ErrorMessage } from '../../models/error-message.model';
import { ErrorMessageService } from '../../services/error-message.service';
import { PrimengModule } from '../../modules/primeng.module';

@Component({
  selector: 'app-error-template',
  templateUrl: './error-template.component.html',
  styleUrls: ['./error-template.component.scss'],
  providers: []
})
export class ErrorTemplateComponent implements OnInit, OnDestroy {
  display = false;

  severity = '';

  @Input() value: ErrorMessage;

  @Input() style: any;

  @Input() styleClass: string;

  @Input() enableService = true;

  @Input() key: string;

  @Output() valueChange: EventEmitter<ErrorMessage> = new EventEmitter<
    ErrorMessage
  >();

  messageSubscription: Subscription;
  fatalMessageSubscription: Subscription;
  clearSubscription: Subscription;

  constructor(@Optional() public errorMessageService: ErrorMessageService) {}

  ngOnInit() {
    if (this.value && this.value !== undefined) {
      this.display = true;
      this.severity =
        this.value.severity.charAt(0).toUpperCase() +
        this.value.severity.slice(1);
    }
    if (this.errorMessageService && this.enableService) {
      this.messageSubscription = this.errorMessageService.messageObserver.subscribe(
        (messages: any) => {
          if (messages) {
            if (this.key === messages.key) {
              this.value = messages;
            }
            this.display = this.value && this.value !== undefined;
            this.severity =
              this.value.severity.charAt(0).toUpperCase() +
              this.value.severity.slice(1);
          }
        }
      );

      this.clearSubscription = this.errorMessageService.clearObserver.subscribe(
        key => {
          if (key) {
            if (this.key === key) {
              this.value = null;
            }
          } else {
            this.value = null;
          }
        }
      );
    }
  }

  hasMessages() {
    return this.value && this.value !== undefined;
  }

  getSeverityClass() {
    return this.value.severity;
  }

  clear(event) {
    this.value = {};
    this.valueChange.emit(this.value);

    event.preventDefault();
  }

  get icon(): string {
    let icon: string = null;
    if (this.hasMessages()) {
      const msg = this.value;
      switch (msg.severity) {
        case 'success':
          icon = 'pi-check';
          break;

        case 'info':
          icon = 'pi-info-circle';
          break;

        case 'error':
          icon = 'pi-times';
          break;

        case 'warn':
          icon = 'pi-exclamation-triangle';
          break;

        default:
          icon = 'pi-info-circle';
          break;
      }
    }

    return icon;
  }

  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }

    if (this.clearSubscription) {
      this.clearSubscription.unsubscribe();
    }

    if (this.fatalMessageSubscription) {
      this.fatalMessageSubscription.unsubscribe();
    }
  }
}

@NgModule({
  imports: [CommonModule, PrimengModule],
  exports: [ErrorTemplateComponent],
  declarations: [ErrorTemplateComponent]
})
export class ErrorMessagesModule {}

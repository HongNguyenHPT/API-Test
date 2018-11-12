﻿function _get_dyn_external_content_for_st(){return '<div><style>.basic-block table td.no-border{padding-left:0;}</style><div class="st-act-wrapper "><div class="block basic-block"><table><tr><td class="name col-head-style">Name</td><td class="name col-head-style">Step ID</td><td class="name col-head-style">Status</td><td class="name col-head-style">Message</td></tr><tr><td class="value col-head-style">GetFlights</td><td class="value col-head-style">StServiceCallActivity4</td><td class="value col-head-style">Done</td><td class="value col-head-style">Web service call performed successfully</td></tr></table></div><div class="block other-props-block"><div class="block-title">More</div><table><tr><td class="name row-head-style">InputXml</td><td class="value row-head-style"><a href="####" onclick="__uiElements.show_content_in_float_pane(\'Data/StServiceCallActivity4_InputXml_996b8a1c-c076-43c2-a5d5-758d7bd71864.xml\', \'Data/StServiceCallActivity4_InputXml_996b8a1c-c076-43c2-a5d5-758d7bd71864.js4hrpt\', \'.xml\', \'InputXml\');return false;">&lt;Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"&gt;\r\n  &lt;Body&gt;\r\n    &lt;GetFlights xmlns="HP.SOAQ.SampleApp"&gt;\r\n      &lt;DepartureCity&gt;Denver&lt;/DepartureCity&gt;\r\n      &lt;ArrivalCity&gt;Paris&lt;/ArrivalCity&gt;\r\n      &lt;FlightDate&gt;2018-11-30T00:00:00+07:00&lt;/FlightDate&gt;\r\n    &lt;/GetFlights&gt;\r\n  &lt;/Body&gt;\r\n&lt;/Envelope&gt;</a></td></tr><tr><td class="name row-head-style">Service</td><td class="value row-head-style">HPFlights_Service</td></tr><tr><td class="name row-head-style">Port</td><td class="value row-head-style">FlightsServiceMethods</td></tr><tr><td class="name row-head-style">Operation</td><td class="value row-head-style">GetFlights</td></tr><tr><td class="name row-head-style">Address</td><td class="value row-head-style">http://localhost:8000/HPFlights_SOAP</td></tr><tr><td class="name row-head-style">SOAPAction</td><td class="value row-head-style">HP.SOAQ.SampleApp/IFlightsSoapService/GetFlights</td></tr><tr><td class="name row-head-style">ContentType</td><td class="value row-head-style">text/xml; charset=utf-8</td></tr><tr><td class="name row-head-style">MessageExchangePattern</td><td class="value row-head-style">Request Response</td></tr><tr><td class="name row-head-style">Full request</td><td class="value row-head-style"><a href="####" onclick="__uiElements.show_content_in_float_pane(\'Data/StServiceCallActivity4_Full_request_c949e948-becb-4f53-bcf8-16595245b30b.xml\', \'Data/StServiceCallActivity4_Full_request_c949e948-becb-4f53-bcf8-16595245b30b.js4hrpt\', \'.xml\', \'Full request\');return false;">&lt;Envelope xmlns="htt ... &lt;/Body&gt;\r\n&lt;/Envelope&gt;</a></td></tr><tr><td class="name row-head-style">InputHeader</td><td class="value row-head-style">SOAPAction:	HP.SOAQ.SampleApp/IFlightsSoapService/GetFlights\nContent-Type:	text/xml; charset=utf-8\nHost:	localhost:8000\nContent-Length:	254\nExpect:	100-continue\nConnection:	Close\n</td></tr><tr><td class="name row-head-style">OutputHeader</td><td class="value row-head-style">Connection:	close\nContent-Length:	1893\nContent-Type:	text/xml; charset=utf-8\nDate:	Mon, 12 Nov 2018 04:54:25 GMT\nServer:	Microsoft-HTTPAPI/2.0\n</td></tr><tr><td class="name row-head-style">OutputText</td><td class="value row-head-style">&lt;s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"&gt;&lt;s:Body&gt;&lt;GetFlightsResponse xmlns="HP.SOAQ.SampleApp"&gt;&lt;GetFlightsResult xmlns:i="http://www.w3.org/2001/XMLSchema-instance"&gt;&lt;Flight&gt;&lt;Airline&gt;NW&lt;/Airline&gt;&lt;ArrivalCity&gt;Paris&lt;/ArrivalCity&gt;&lt;ArrivalTime&gt;07:55 PM&lt;/ArrivalTime&gt;&lt;DepartureCity&gt;Denver&lt;/DepartureCity&gt;&lt;DepartureTime&gt;06:15 PM&lt;/DepartureTime&gt;&lt;FlightNumber&gt;15113&lt;/FlightNumber&gt;&lt;Price&gt;138.6&lt;/Price&gt;&lt;/Flight&gt;&lt;Flight&gt;&lt;Airline&gt;NW&lt;/Airline&gt;&lt;ArrivalCity&gt;Paris&lt;/ArrivalCity&gt;&lt;ArrivalTime&gt;03:07 PM&lt;/ArrivalTime&gt;&lt;DepartureCity&gt;Denver&lt;/DepartureCity&gt;&lt;DepartureTime&gt;01:27 PM&lt;/DepartureTime&gt;&lt;FlightNumber&gt;15567&lt;/FlightNumber&gt;&lt;Price&gt;155&lt;/Price&gt;&lt;/Flight&gt;&lt;Flight&gt;&lt;Airline&gt;AF&lt;/Airline&gt;&lt;ArrivalCity&gt;Paris&lt;/ArrivalCity&gt;&lt;ArrivalTime&gt;10:00 AM&lt;/ArrivalTime&gt;&lt;DepartureCity&gt;Denver&lt;/DepartureCity&gt;&lt;DepartureTime&gt;08:00 AM&lt;/DepartureTime&gt;&lt;FlightNumber&gt;15827&lt;/FlightNumber&gt;&lt;Price&gt;165.5&lt;/Price&gt;&lt;/Flight&gt;&lt;Flight&gt;&lt;Airline&gt;AF&lt;/Airline&gt;&lt;ArrivalCity&gt;Paris&lt;/ArrivalCity&gt;&lt;ArrivalTime&gt;12:24 PM&lt;/ArrivalTime&gt;&lt;DepartureCity&gt;Denver&lt;/DepartureCity&gt;&lt;DepartureTime&gt;10:24 AM&lt;/DepartureTime&gt;&lt;FlightNumber&gt;15831&lt;/FlightNumber&gt;&lt;Price&gt;162.4&lt;/Price&gt;&lt;/Flight&gt;&lt;Flight&gt;&lt;Airline&gt;AF&lt;/Airline&gt;&lt;ArrivalCity&gt;Paris&lt;/ArrivalCity&gt;&lt;ArrivalTime&gt;02:48 PM&lt;/ArrivalTime&gt;&lt;DepartureCity&gt;Denver&lt;/DepartureCity&gt;&lt;DepartureTime&gt;12:48 PM&lt;/DepartureTime&gt;&lt;FlightNumber&gt;15835&lt;/FlightNumber&gt;&lt;Price&gt;165.6&lt;/Price&gt;&lt;/Flight&gt;&lt;Flight&gt;&lt;Airline&gt;AF&lt;/Airline&gt;&lt;ArrivalCity&gt;Paris&lt;/ArrivalCity&gt;&lt;ArrivalTime&gt;05:12 PM&lt;/ArrivalTime&gt;&lt;DepartureCity&gt;Denver&lt;/DepartureCity&gt;&lt;DepartureTime&gt;03:12 PM&lt;/DepartureTime&gt;&lt;FlightNumber&gt;15839&lt;/FlightNumber&gt;&lt;Price&gt;165.7&lt;/Price&gt;&lt;/Flight&gt;&lt;Flight&gt;&lt;Airline&gt;NW&lt;/Airline&gt;&lt;ArrivalCity&gt;Paris&lt;/ArrivalCity&gt;&lt;ArrivalTime&gt;11:31 AM&lt;/ArrivalTime&gt;&lt;DepartureCity&gt;Denver&lt;/DepartureCity&gt;&lt;DepartureTime&gt;09:51 AM&lt;/DepartureTime&gt;&lt;FlightNumber&gt;16228&lt;/FlightNumber&gt;&lt;Price&gt;168.2&lt;/Price&gt;&lt;/Flight&gt;&lt;/GetFlightsResult&gt;&lt;/GetFlightsResponse&gt;&lt;/s:Body&gt;&lt;/s:Envelope&gt;</td></tr><tr><td class="name row-head-style">HttpStatusCode</td><td class="value row-head-style">200 : OK</td></tr><tr><td class="name row-head-style">OutputXml</td><td class="value row-head-style"><a href="####" onclick="__uiElements.show_content_in_float_pane(\'Data/StServiceCallActivity4_OutputXml_ceacffdf-3de7-47cb-b952-7337f8e375d7.xml\', \'Data/StServiceCallActivity4_OutputXml_ceacffdf-3de7-47cb-b952-7337f8e375d7.js4hrpt\', \'.xml\', \'OutputXml\');return false;">&lt;s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"&gt;\r\n  &lt;s:Body&gt;\r\n    &lt;GetFlightsResponse xmlns="HP.SOAQ.SampleApp"&gt;\r\n      &lt;GetFlightsResult xmlns:i="http://www.w3.org/2001/XMLSchema-instance"&gt;\r\n        &lt;Flight&gt;\r\n          &lt;Airline&gt;NW&lt;/Airline&gt;\r\n          &lt;ArrivalCity&gt;Paris&lt;/ArrivalCity&gt;\r\n          &lt;ArrivalTime&gt;07:55 PM&lt;/ArrivalTime&gt;\r\n          &lt;DepartureCity&gt;Denver&lt;/DepartureCity&gt;\r\n          &lt;DepartureTime&gt;06:15 PM&lt;/DepartureTime&gt;\r\n          &lt;FlightNumber&gt;15113&lt;/FlightNumber&gt;\r\n          &lt;Price&gt;138.6&lt;/Price&gt;\r\n        &lt;/Flight&gt;\r\n        &lt;Flight&gt;\r\n          &lt;Airline&gt;NW&lt;/Airline&gt;\r\n          &lt;ArrivalCity&gt;Paris&lt;/ArrivalCity&gt;\r\n          &lt;ArrivalTime&gt;03:07 PM&lt;/ArrivalTime&gt;\r\n          &lt;DepartureCity&gt;Denver&lt;/DepartureCity&gt;\r\n          &lt;DepartureTime&gt;01:27 PM&lt;/DepartureTime&gt;\r\n          &lt;FlightNumber&gt;15567&lt;/FlightNumber&gt;\r\n          &lt;Price&gt;155&lt;/Price&gt;\r\n        &lt;/Flight&gt;\r\n        &lt;Flight&gt;\r\n          &lt;Airline&gt;AF&lt;/Airline&gt;\r\n          &lt;ArrivalCity&gt;Paris&lt;/ArrivalCity&gt;\r\n          &lt;ArrivalTime&gt;10:00 AM&lt;/ArrivalTime&gt;\r\n          &lt;DepartureCity&gt;Denver&lt;/DepartureCity&gt;\r\n          &lt;DepartureTime&gt;08:00 AM&lt;/DepartureTime&gt;\r\n          &lt;FlightNumber&gt;15827&lt;/FlightNumber&gt;\r\n          &lt;Price&gt;165.5&lt;/Price&gt;\r\n        &lt;/Flight&gt;\r\n        &lt;Flight&gt;\r\n          &lt;Airline&gt;AF&lt;/Airline&gt;\r\n          &lt;ArrivalCity&gt;Paris&lt;/ArrivalCity&gt;\r\n          &lt;ArrivalTime&gt;12:24 PM&lt;/ArrivalTime&gt;\r\n          &lt;DepartureCity&gt;Denver&lt;/DepartureCity&gt;\r\n          &lt;DepartureTime&gt;10:24 AM&lt;/DepartureTime&gt;\r\n          &lt;FlightNumber&gt;15831&lt;/FlightNumber&gt;\r\n          &lt;Price&gt;162.4&lt;/Price&gt;\r\n        &lt;/Flight&gt;\r\n        &lt;Flight&gt;\r\n          &lt;Airline&gt;AF&lt;/Airline&gt;\r\n          &lt;ArrivalCity&gt;Paris&lt;/ArrivalCity&gt;\r\n          &lt;ArrivalTime&gt;02:48 PM&lt;/ArrivalTime&gt;\r\n          &lt;DepartureCity&gt;Denver&lt;/DepartureCity&gt;\r\n          &lt;DepartureTime&gt;12:48 PM&lt;/DepartureTime&gt;\r\n          &lt;FlightNumber&gt;15835&lt;/FlightNumber&gt;\r\n          &lt;Price&gt;165.6&lt;/Price&gt;\r\n        &lt;/Flight&gt;\r\n        &lt;Flight&gt;\r\n          &lt;Airline&gt;AF&lt;/Airline&gt;\r\n          &lt;ArrivalCity&gt;Paris&lt;/ArrivalCity&gt;\r\n          &lt;ArrivalTime&gt;05:12 PM&lt;/ArrivalTime&gt;\r\n          &lt;DepartureCity&gt;Denver&lt;/DepartureCity&gt;\r\n          &lt;DepartureTime&gt;03:12 PM&lt;/DepartureTime&gt;\r\n          &lt;FlightNumber&gt;15839&lt;/FlightNumber&gt;\r\n          &lt;Price&gt;165.7&lt;/Price&gt;\r\n        &lt;/Flight&gt;\r\n        &lt;Flight&gt;\r\n          &lt;Airline&gt;NW&lt;/Airline&gt;\r\n          &lt;ArrivalCity&gt;Paris&lt;/ArrivalCity&gt;\r\n          &lt;ArrivalTime&gt;11:31 AM&lt;/ArrivalTime&gt;\r\n          &lt;DepartureCity&gt;Denver&lt;/DepartureCity&gt;\r\n          &lt;DepartureTime&gt;09:51 AM&lt;/DepartureTime&gt;\r\n          &lt;FlightNumber&gt;16228&lt;/FlightNumber&gt;\r\n          &lt;Price&gt;168.2&lt;/Price&gt;\r\n        &lt;/Flight&gt;\r\n      &lt;/GetFlightsResult&gt;\r\n    &lt;/GetFlightsResponse&gt;\r\n  &lt;/s:Body&gt;\r\n&lt;/s:Envelope&gt;</a></td></tr> </table></div></div>';}
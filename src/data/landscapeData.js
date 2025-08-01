// Example data structure for the OpsZ Competitors Landscape
export const landscapeData = [
  {
    category: "Event / Alert Management",
    color: "#A259FF",
    subcategories: [
      {
        name: "Dashboards",
        companies: [
          { name: "Splunk", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Datadog", logo: "https://logo.clearbit.com/datadoghq.com", type: "Enterprise", link: "https://www.datadoghq.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "New Relic", logo: "https://logo.clearbit.com/newrelic.com", type: "Enterprise", link: "https://newrelic.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Dynatrace", logo: "https://logo.clearbit.com/dynatrace.com", type: "Enterprise", link: "https://www.dynatrace.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Prometheus (with Grafana)", logo: "https://logo.clearbit.com/prometheus.io", type: "Startup", link: "https://prometheus.io/", tags: ["Open Source", "Infrastructure/ITOps"] },
          { name: "Grafana Labs", logo: "https://logo.clearbit.com/grafana.com", type: "Startup", link: "https://grafana.com/", tags: ["Open Source", "Cloud-native"] },
          { name: "Elastic (ELK Stack)", logo: "https://logo.clearbit.com/elastic.co", type: "Enterprise", link: "https://www.elastic.co/", tags: ["Open Source", "On-Prem/Hybrid"] },
          { name: "Sumo Logic", logo: "https://logo.clearbit.com/sumologic.com", type: "Enterprise", link: "https://www.sumologic.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "LogicMonitor", logo: "https://logo.clearbit.com/logicmonitor.com", type: "Enterprise", link: "https://www.logicmonitor.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "ScienceLogic", logo: "https://logo.clearbit.com/sciencelogic.com", type: "Enterprise", link: "https://www.sciencelogic.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Zabbix", logo: "https://logo.clearbit.com/zabbix.com", type: "Startup", link: "https://www.zabbix.com/", tags: ["Open Source", "On-Prem/Hybrid"] },
          { name: "Nagios", logo: "https://logo.clearbit.com/nagios.org", type: "Startup", link: "https://www.nagios.org/", tags: ["Open Source", "On-Prem/Hybrid"] },
          { name: "ManageEngine Analytics Plus", logo: "https://logo.clearbit.com/manageengine.com", type: "Enterprise", link: "https://www.manageengine.com/products/analytics-plus/", tags: ["On-Prem/Hybrid", "Business/Support"] },
          { name: "SolarWinds", logo: "https://logo.clearbit.com/solarwinds.com", type: "Enterprise", link: "https://www.solarwinds.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Sematext", logo: "https://logo.clearbit.com/sematext.com", type: "Startup", link: "https://sematext.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Chronosphere", logo: "https://logo.clearbit.com/chronosphere.io", type: "Startup", link: "https://chronosphere.io/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Coralogix", logo: "https://logo.clearbit.com/coralogix.com", type: "Startup", link: "https://coralogix.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "IBM Instana", logo: "https://logo.clearbit.com/instana.com", type: "Enterprise", link: "https://www.ibm.com/products/instana", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Cisco AppDynamics", logo: "https://logo.clearbit.com/appdynamics.com", type: "Enterprise", link: "https://www.appdynamics.com/", tags: ["On-Prem/Hybrid", "Business/Support"] },
          { name: "Microsoft Azure Monitor", logo: "https://logo.clearbit.com/microsoft.com", type: "Enterprise", link: "https://azure.microsoft.com/en-us/services/monitor/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Google Cloud Operations (Stackdriver)", logo: "https://logo.clearbit.com/google.com", type: "Enterprise", link: "https://cloud.google.com/products/operations", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "BigPanda", logo: "https://logo.clearbit.com/bigpanda.io", type: "Startup", link: "https://www.bigpanda.io/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Moogsoft", logo: "https://logo.clearbit.com/moogsoft.com", type: "Startup", link: "https://www.moogsoft.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "PagerDuty", logo: "https://logo.clearbit.com/pagerduty.com", type: "Enterprise", link: "https://www.pagerduty.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Splunk ITSI", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/en_us/software/itsi.html", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Better Stack", logo: "https://logo.clearbit.com/betterstack.com", type: "Startup", link: "https://betterstack.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "CloudFabrix (Fabrix.ai)", logo: "https://logo.clearbit.com/fabrix.ai", type: "Startup", link: "https://www.fabrix.ai/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Opsgenie (Atlassian)", logo: "https://logo.clearbit.com/opsgenie.com", type: "Enterprise", link: "https://www.opsgenie.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "xMatters", logo: "https://logo.clearbit.com/xmatters.com", type: "Startup", link: "https://www.xmatters.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "AlertOps", logo: "https://logo.clearbit.com/alertops.com", type: "Startup", link: "https://www.alertops.com/", tags: ["Cloud-native", "Business/Support"] }
        ]
      },
      {
        name: "Deduplication",
        companies: [
          { name: "BigPanda", logo: "https://logo.clearbit.com/bigpanda.io", type: "Startup", link: "https://www.bigpanda.io/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Moogsoft", logo: "https://logo.clearbit.com/moogsoft.com", type: "Startup", link: "https://www.moogsoft.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Splunk ITSI", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/en_us/software/itsi.html", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "PagerDuty", logo: "https://logo.clearbit.com/pagerduty.com", type: "Enterprise", link: "https://www.pagerduty.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Opsgenie", logo: "https://logo.clearbit.com/opsgenie.com", type: "Enterprise", link: "https://www.opsgenie.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "xMatters", logo: "https://logo.clearbit.com/xmatters.com", type: "Startup", link: "https://www.xmatters.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "AlertOps", logo: "https://logo.clearbit.com/alertops.com", type: "Startup", link: "https://www.alertops.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "VictorOps (Splunk)", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/en_us/software/victorops.html", tags: ["Cloud-native", "Business/Support"] },
          { name: "OnPage", logo: "https://logo.clearbit.com/onpage.com", type: "Startup", link: "https://www.onpage.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Everbridge", logo: "https://logo.clearbit.com/everbridge.com", type: "Enterprise", link: "https://www.everbridge.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "AlertMedia", logo: "https://logo.clearbit.com/alertmedia.com", type: "Startup", link: "https://www.alertmedia.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "StatusPage", logo: "https://logo.clearbit.com/atlassian.com", type: "Enterprise", link: "https://www.atlassian.com/software/statuspage", tags: ["Cloud-native", "Business/Support"] },
          { name: "Better Uptime", logo: "https://logo.clearbit.com/betteruptime.com", type: "Startup", link: "https://betteruptime.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "UptimeRobot", logo: "https://logo.clearbit.com/uptimerobot.com", type: "Startup", link: "https://uptimerobot.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Pingdom", logo: "https://logo.clearbit.com/pingdom.com", type: "Enterprise", link: "https://www.pingdom.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Site24x7", logo: "https://logo.clearbit.com/site24x7.com", type: "Enterprise", link: "https://www.site24x7.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "LogicMonitor", logo: "https://logo.clearbit.com/logicmonitor.com", type: "Enterprise", link: "https://www.logicmonitor.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Datadog", logo: "https://logo.clearbit.com/datadoghq.com", type: "Enterprise", link: "https://www.datadoghq.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "New Relic", logo: "https://logo.clearbit.com/newrelic.com", type: "Enterprise", link: "https://newrelic.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Dynatrace", logo: "https://logo.clearbit.com/dynatrace.com", type: "Enterprise", link: "https://www.dynatrace.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "SolarWinds", logo: "https://logo.clearbit.com/solarwinds.com", type: "Enterprise", link: "https://www.solarwinds.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "ManageEngine", logo: "https://logo.clearbit.com/manageengine.com", type: "Enterprise", link: "https://www.manageengine.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Zabbix", logo: "https://logo.clearbit.com/zabbix.com", type: "Startup", link: "https://www.zabbix.com/", tags: ["Open Source", "On-Prem/Hybrid"] },
          { name: "Nagios", logo: "https://logo.clearbit.com/nagios.org", type: "Startup", link: "https://www.nagios.org/", tags: ["Open Source", "On-Prem/Hybrid"] },
          { name: "Icinga", logo: "https://logo.clearbit.com/icinga.com", type: "Startup", link: "https://icinga.com/", tags: ["Open Source", "On-Prem/Hybrid"] },
          { name: "Prometheus", logo: "https://logo.clearbit.com/prometheus.io", type: "Startup", link: "https://prometheus.io/", tags: ["Open Source", "Infrastructure/ITOps"] },
          { name: "Grafana", logo: "https://logo.clearbit.com/grafana.com", type: "Startup", link: "https://grafana.com/", tags: ["Open Source", "Cloud-native"] },
          { name: "Elastic", logo: "https://logo.clearbit.com/elastic.co", type: "Enterprise", link: "https://www.elastic.co/", tags: ["Open Source", "On-Prem/Hybrid"] },
          { name: "Sumo Logic", logo: "https://logo.clearbit.com/sumologic.com", type: "Enterprise", link: "https://www.sumologic.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "ScienceLogic", logo: "https://logo.clearbit.com/sciencelogic.com", type: "Enterprise", link: "https://www.sciencelogic.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Sematext", logo: "https://logo.clearbit.com/sematext.com", type: "Startup", link: "https://sematext.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Chronosphere", logo: "https://logo.clearbit.com/chronosphere.io", type: "Startup", link: "https://chronosphere.io/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Coralogix", logo: "https://logo.clearbit.com/coralogix.com", type: "Startup", link: "https://coralogix.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "IBM Instana", logo: "https://logo.clearbit.com/instana.com", type: "Enterprise", link: "https://www.ibm.com/products/instana", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Cisco AppDynamics", logo: "https://logo.clearbit.com/appdynamics.com", type: "Enterprise", link: "https://www.appdynamics.com/", tags: ["On-Prem/Hybrid", "Business/Support"] },
          { name: "Microsoft Azure Monitor", logo: "https://logo.clearbit.com/microsoft.com", type: "Enterprise", link: "https://azure.microsoft.com/en-us/services/monitor/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Google Cloud Operations", logo: "https://logo.clearbit.com/google.com", type: "Enterprise", link: "https://cloud.google.com/products/operations", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "AWS CloudWatch", logo: "https://logo.clearbit.com/amazon.com", type: "Enterprise", link: "https://aws.amazon.com/cloudwatch/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Better Stack", logo: "https://logo.clearbit.com/betterstack.com", type: "Startup", link: "https://betterstack.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "CloudFabrix", logo: "https://logo.clearbit.com/fabrix.ai", type: "Startup", link: "https://www.fabrix.ai/", tags: ["Cloud-native", "Infrastructure/ITOps"] }
        ]
      },
      {
        name: "Noise Reduction",
        companies: [
          { name: "BigPanda", logo: "https://logo.clearbit.com/bigpanda.io", type: "Startup", link: "https://www.bigpanda.io/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Moogsoft", logo: "https://logo.clearbit.com/moogsoft.com", type: "Startup", link: "https://www.moogsoft.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Splunk ITSI", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/en_us/software/itsi.html", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "PagerDuty", logo: "https://logo.clearbit.com/pagerduty.com", type: "Enterprise", link: "https://www.pagerduty.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Opsgenie", logo: "https://logo.clearbit.com/opsgenie.com", type: "Enterprise", link: "https://www.opsgenie.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "xMatters", logo: "https://logo.clearbit.com/xmatters.com", type: "Startup", link: "https://www.xmatters.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "AlertOps", logo: "https://logo.clearbit.com/alertops.com", type: "Startup", link: "https://www.alertops.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "VictorOps", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/en_us/software/victorops.html", tags: ["Cloud-native", "Business/Support"] },
          { name: "OnPage", logo: "https://logo.clearbit.com/onpage.com", type: "Startup", link: "https://www.onpage.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Everbridge", logo: "https://logo.clearbit.com/everbridge.com", type: "Enterprise", link: "https://www.everbridge.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "AlertMedia", logo: "https://logo.clearbit.com/alertmedia.com", type: "Startup", link: "https://www.alertmedia.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "StatusPage", logo: "https://logo.clearbit.com/atlassian.com", type: "Enterprise", link: "https://www.atlassian.com/software/statuspage", tags: ["Cloud-native", "Business/Support"] },
          { name: "Better Uptime", logo: "https://logo.clearbit.com/betteruptime.com", type: "Startup", link: "https://betteruptime.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "UptimeRobot", logo: "https://logo.clearbit.com/uptimerobot.com", type: "Startup", link: "https://uptimerobot.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Pingdom", logo: "https://logo.clearbit.com/pingdom.com", type: "Enterprise", link: "https://www.pingdom.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Site24x7", logo: "https://logo.clearbit.com/site24x7.com", type: "Enterprise", link: "https://www.site24x7.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "LogicMonitor", logo: "https://logo.clearbit.com/logicmonitor.com", type: "Enterprise", link: "https://www.logicmonitor.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Datadog", logo: "https://logo.clearbit.com/datadoghq.com", type: "Enterprise", link: "https://www.datadoghq.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "New Relic", logo: "https://logo.clearbit.com/newrelic.com", type: "Enterprise", link: "https://newrelic.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Dynatrace", logo: "https://logo.clearbit.com/dynatrace.com", type: "Enterprise", link: "https://www.dynatrace.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "SolarWinds", logo: "https://logo.clearbit.com/solarwinds.com", type: "Enterprise", link: "https://www.solarwinds.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "ManageEngine", logo: "https://logo.clearbit.com/manageengine.com", type: "Enterprise", link: "https://www.manageengine.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Zabbix", logo: "https://logo.clearbit.com/zabbix.com", type: "Startup", link: "https://www.zabbix.com/", tags: ["Open Source", "On-Prem/Hybrid"] },
          { name: "Nagios", logo: "https://logo.clearbit.com/nagios.org", type: "Startup", link: "https://www.nagios.org/", tags: ["Open Source", "On-Prem/Hybrid"] },
          { name: "Icinga", logo: "https://logo.clearbit.com/icinga.com", type: "Startup", link: "https://icinga.com/", tags: ["Open Source", "On-Prem/Hybrid"] },
          { name: "Prometheus", logo: "https://logo.clearbit.com/prometheus.io", type: "Startup", link: "https://prometheus.io/", tags: ["Open Source", "Infrastructure/ITOps"] },
          { name: "Grafana", logo: "https://logo.clearbit.com/grafana.com", type: "Startup", link: "https://grafana.com/", tags: ["Open Source", "Cloud-native"] },
          { name: "Elastic", logo: "https://logo.clearbit.com/elastic.co", type: "Enterprise", link: "https://www.elastic.co/", tags: ["Open Source", "On-Prem/Hybrid"] },
          { name: "Sumo Logic", logo: "https://logo.clearbit.com/sumologic.com", type: "Enterprise", link: "https://www.sumologic.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "ScienceLogic", logo: "https://logo.clearbit.com/sciencelogic.com", type: "Enterprise", link: "https://www.sciencelogic.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Sematext", logo: "https://logo.clearbit.com/sematext.com", type: "Startup", link: "https://sematext.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Chronosphere", logo: "https://logo.clearbit.com/chronosphere.io", type: "Startup", link: "https://chronosphere.io/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Coralogix", logo: "https://logo.clearbit.com/coralogix.com", type: "Startup", link: "https://coralogix.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "IBM Instana", logo: "https://logo.clearbit.com/instana.com", type: "Enterprise", link: "https://www.ibm.com/products/instana", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Cisco AppDynamics", logo: "https://logo.clearbit.com/appdynamics.com", type: "Enterprise", link: "https://www.appdynamics.com/", tags: ["On-Prem/Hybrid", "Business/Support"] },
          { name: "Microsoft Azure Monitor", logo: "https://logo.clearbit.com/microsoft.com", type: "Enterprise", link: "https://azure.microsoft.com/en-us/services/monitor/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Google Cloud Operations", logo: "https://logo.clearbit.com/google.com", type: "Enterprise", link: "https://cloud.google.com/products/operations", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "AWS CloudWatch", logo: "https://logo.clearbit.com/amazon.com", type: "Enterprise", link: "https://aws.amazon.com/cloudwatch/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Better Stack", logo: "https://logo.clearbit.com/betterstack.com", type: "Startup", link: "https://betterstack.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "CloudFabrix", logo: "https://logo.clearbit.com/fabrix.ai", type: "Startup", link: "https://www.fabrix.ai/", tags: ["Cloud-native", "Infrastructure/ITOps"] }
        ]
      },
      {
        name: "Aggregation",
        companies: [
          { name: "BigPanda", logo: "https://logo.clearbit.com/bigpanda.io", type: "Startup", link: "https://www.bigpanda.io/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Moogsoft", logo: "https://logo.clearbit.com/moogsoft.com", type: "Startup", link: "https://www.moogsoft.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Splunk ITSI", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/en_us/software/itsi.html", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "PagerDuty", logo: "https://logo.clearbit.com/pagerduty.com", type: "Enterprise", link: "https://www.pagerduty.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Opsgenie", logo: "https://logo.clearbit.com/opsgenie.com", type: "Enterprise", link: "https://www.opsgenie.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "xMatters", logo: "https://logo.clearbit.com/xmatters.com", type: "Startup", link: "https://www.xmatters.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "AlertOps", logo: "https://logo.clearbit.com/alertops.com", type: "Startup", link: "https://www.alertops.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "VictorOps", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/en_us/software/victorops.html", tags: ["Cloud-native", "Business/Support"] },
          { name: "OnPage", logo: "https://logo.clearbit.com/onpage.com", type: "Startup", link: "https://www.onpage.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Everbridge", logo: "https://logo.clearbit.com/everbridge.com", type: "Enterprise", link: "https://www.everbridge.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "AlertMedia", logo: "https://logo.clearbit.com/alertmedia.com", type: "Startup", link: "https://www.alertmedia.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "StatusPage", logo: "https://logo.clearbit.com/atlassian.com", type: "Enterprise", link: "https://www.atlassian.com/software/statuspage", tags: ["Cloud-native", "Business/Support"] },
          { name: "Better Uptime", logo: "https://logo.clearbit.com/betteruptime.com", type: "Startup", link: "https://betteruptime.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "UptimeRobot", logo: "https://logo.clearbit.com/uptimerobot.com", type: "Startup", link: "https://uptimerobot.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Pingdom", logo: "https://logo.clearbit.com/pingdom.com", type: "Enterprise", link: "https://www.pingdom.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Site24x7", logo: "https://logo.clearbit.com/site24x7.com", type: "Enterprise", link: "https://www.site24x7.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "LogicMonitor", logo: "https://logo.clearbit.com/logicmonitor.com", type: "Enterprise", link: "https://www.logicmonitor.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Datadog", logo: "https://logo.clearbit.com/datadoghq.com", type: "Enterprise", link: "https://www.datadoghq.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "New Relic", logo: "https://logo.clearbit.com/newrelic.com", type: "Enterprise", link: "https://newrelic.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Dynatrace", logo: "https://logo.clearbit.com/dynatrace.com", type: "Enterprise", link: "https://www.dynatrace.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "SolarWinds", logo: "https://logo.clearbit.com/solarwinds.com", type: "Enterprise", link: "https://www.solarwinds.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "ManageEngine", logo: "https://logo.clearbit.com/manageengine.com", type: "Enterprise", link: "https://www.manageengine.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Zabbix", logo: "https://logo.clearbit.com/zabbix.com", type: "Startup", link: "https://www.zabbix.com/", tags: ["Open Source", "On-Prem/Hybrid"] },
          { name: "Nagios", logo: "https://logo.clearbit.com/nagios.org", type: "Startup", link: "https://www.nagios.org/", tags: ["Open Source", "On-Prem/Hybrid"] },
          { name: "Icinga", logo: "https://logo.clearbit.com/icinga.com", type: "Startup", link: "https://icinga.com/", tags: ["Open Source", "On-Prem/Hybrid"] },
          { name: "Prometheus", logo: "https://logo.clearbit.com/prometheus.io", type: "Startup", link: "https://prometheus.io/", tags: ["Open Source", "Infrastructure/ITOps"] },
          { name: "Grafana", logo: "https://logo.clearbit.com/grafana.com", type: "Startup", link: "https://grafana.com/", tags: ["Open Source", "Cloud-native"] },
          { name: "Elastic", logo: "https://logo.clearbit.com/elastic.co", type: "Enterprise", link: "https://www.elastic.co/", tags: ["Open Source", "On-Prem/Hybrid"] },
          { name: "Sumo Logic", logo: "https://logo.clearbit.com/sumologic.com", type: "Enterprise", link: "https://www.sumologic.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "ScienceLogic", logo: "https://logo.clearbit.com/sciencelogic.com", type: "Enterprise", link: "https://www.sciencelogic.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Sematext", logo: "https://logo.clearbit.com/sematext.com", type: "Startup", link: "https://sematext.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Chronosphere", logo: "https://logo.clearbit.com/chronosphere.io", type: "Startup", link: "https://chronosphere.io/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Coralogix", logo: "https://logo.clearbit.com/coralogix.com", type: "Startup", link: "https://coralogix.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "IBM Instana", logo: "https://logo.clearbit.com/instana.com", type: "Enterprise", link: "https://www.ibm.com/products/instana", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Cisco AppDynamics", logo: "https://logo.clearbit.com/appdynamics.com", type: "Enterprise", link: "https://www.appdynamics.com/", tags: ["On-Prem/Hybrid", "Business/Support"] },
          { name: "Microsoft Azure Monitor", logo: "https://logo.clearbit.com/microsoft.com", type: "Enterprise", link: "https://azure.microsoft.com/en-us/services/monitor/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Google Cloud Operations", logo: "https://logo.clearbit.com/google.com", type: "Enterprise", link: "https://cloud.google.com/products/operations", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "AWS CloudWatch", logo: "https://logo.clearbit.com/amazon.com", type: "Enterprise", link: "https://aws.amazon.com/cloudwatch/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Better Stack", logo: "https://logo.clearbit.com/betterstack.com", type: "Startup", link: "https://betterstack.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "CloudFabrix", logo: "https://logo.clearbit.com/fabrix.ai", type: "Startup", link: "https://www.fabrix.ai/", tags: ["Cloud-native", "Infrastructure/ITOps"] }
        ]
      }
    ]
  },
  {
    category: "Observability Enhancement",
    color: "#FF6B6B",
    subcategories: [
      {
        name: "Adaptive Learning",
        companies: [
          { name: "Dynatrace", logo: "https://logo.clearbit.com/dynatrace.com", type: "Enterprise", link: "https://www.dynatrace.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Datadog", logo: "https://logo.clearbit.com/datadoghq.com", type: "Enterprise", link: "https://www.datadoghq.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Splunk ITSI", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/en_us/software/itsi.html", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "AppDynamics", logo: "https://logo.clearbit.com/appdynamics.com", type: "Enterprise", link: "https://www.appdynamics.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Elastic", logo: "https://logo.clearbit.com/elastic.co", type: "Enterprise", link: "https://www.elastic.co/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Grafana Labs", logo: "https://logo.clearbit.com/grafana.com", type: "Startup", link: "https://grafana.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "ScienceLogic", logo: "https://logo.clearbit.com/sciencelogic.com", type: "Enterprise", link: "https://www.sciencelogic.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Sumo Logic", logo: "https://logo.clearbit.com/sumologic.com", type: "Enterprise", link: "https://www.sumologic.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Chronosphere", logo: "https://logo.clearbit.com/chronosphere.io", type: "Startup", link: "https://chronosphere.io/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Coralogix", logo: "https://logo.clearbit.com/coralogix.com", type: "Startup", link: "https://coralogix.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "CloudFabrix", logo: "https://logo.clearbit.com/fabrix.ai", type: "Startup", link: "https://www.fabrix.ai/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "InsightFinder", logo: "https://logo.clearbit.com/insightfinder.com", type: "Startup", link: "https://insightfinder.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Aporia", logo: "https://logo.clearbit.com/aporia.com", type: "Startup", link: "https://aporia.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Bigeye", logo: "https://logo.clearbit.com/bigeye.com", type: "Startup", link: "https://www.bigeye.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Acceldata", logo: "https://logo.clearbit.com/acceldata.io", type: "Startup", link: "https://acceldata.io/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Monte Carlo", logo: "https://logo.clearbit.com/montecarlodata.com", type: "Startup", link: "https://www.montecarlodata.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Synq", logo: "https://logo.clearbit.com/synq.io", type: "Startup", link: "https://synq.io/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Telmai", logo: "https://logo.clearbit.com/telmai.com", type: "Startup", link: "https://telmai.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Unravel", logo: "https://logo.clearbit.com/unraveldata.com", type: "Startup", link: "https://unraveldata.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Validio", logo: "https://logo.clearbit.com/validio.io", type: "Startup", link: "https://validio.io/", tags: ["Cloud-native", "Business/Support"] }
        ]
      },
      {
        name: "Tool Integration",
        companies: [
          { name: "Dynatrace", logo: "https://logo.clearbit.com/dynatrace.com", type: "Enterprise", link: "https://www.dynatrace.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Datadog", logo: "https://logo.clearbit.com/datadoghq.com", type: "Enterprise", link: "https://www.datadoghq.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "New Relic", logo: "https://logo.clearbit.com/newrelic.com", type: "Enterprise", link: "https://newrelic.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Grafana Labs", logo: "https://logo.clearbit.com/grafana.com", type: "Startup", link: "https://grafana.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Splunk", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Elastic", logo: "https://logo.clearbit.com/elastic.co", type: "Enterprise", link: "https://www.elastic.co/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "AppDynamics", logo: "https://logo.clearbit.com/appdynamics.com", type: "Enterprise", link: "https://www.appdynamics.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com", type: "Enterprise", link: "https://www.servicenow.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "ScienceLogic", logo: "https://logo.clearbit.com/sciencelogic.com", type: "Enterprise", link: "https://www.sciencelogic.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Amazon CloudWatch", logo: "https://logo.clearbit.com/amazon.com", type: "Enterprise", link: "https://aws.amazon.com/cloudwatch/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "ManageEngine", logo: "https://logo.clearbit.com/manageengine.com", type: "Enterprise", link: "https://www.manageengine.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Honeycomb.io", logo: "https://logo.clearbit.com/honeycomb.io", type: "Startup", link: "https://www.honeycomb.io/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Chronosphere", logo: "https://logo.clearbit.com/chronosphere.io", type: "Startup", link: "https://chronosphere.io/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Coralogix", logo: "https://logo.clearbit.com/coralogix.com", type: "Startup", link: "https://coralogix.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "BigPanda", logo: "https://logo.clearbit.com/bigpanda.io", type: "Startup", link: "https://www.bigpanda.io/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Moogsoft", logo: "https://logo.clearbit.com/moogsoft.com", type: "Startup", link: "https://www.moogsoft.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "CloudFabrix", logo: "https://logo.clearbit.com/fabrix.ai", type: "Startup", link: "https://www.fabrix.ai/", tags: ["Cloud-native", "Business/Support"] },
          { name: "OpsRamp", logo: "https://logo.clearbit.com/opsramp.com", type: "Startup", link: "https://www.opsramp.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Cribl", logo: "https://logo.clearbit.com/cribl.io", type: "Startup", link: "https://cribl.io/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Kentik", logo: "https://logo.clearbit.com/kentik.com", type: "Startup", link: "https://www.kentik.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Lightstep", logo: "https://logo.clearbit.com/lightstep.com", type: "Startup", link: "https://lightstep.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Monte Carlo", logo: "https://logo.clearbit.com/montecarlodata.com", type: "Startup", link: "https://www.montecarlodata.com/", tags: ["Cloud-native", "Business/Support"] }
        ]
      },
      {
        name: "Enrichment",
        companies: [
          { name: "Dynatrace", logo: "https://logo.clearbit.com/dynatrace.com", type: "Enterprise", link: "https://www.dynatrace.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "AppDynamics", logo: "https://logo.clearbit.com/appdynamics.com", type: "Enterprise", link: "https://www.appdynamics.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "New Relic", logo: "https://logo.clearbit.com/newrelic.com", type: "Enterprise", link: "https://newrelic.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Elastic", logo: "https://logo.clearbit.com/elastic.co", type: "Enterprise", link: "https://www.elastic.co/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Grafana Labs", logo: "https://logo.clearbit.com/grafana.com", type: "Startup", link: "https://grafana.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "ScienceLogic", logo: "https://logo.clearbit.com/sciencelogic.com", type: "Enterprise", link: "https://www.sciencelogic.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Sumo Logic", logo: "https://logo.clearbit.com/sumologic.com", type: "Enterprise", link: "https://www.sumologic.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com", type: "Enterprise", link: "https://www.servicenow.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Coralogix", logo: "https://logo.clearbit.com/coralogix.com", type: "Startup", link: "https://coralogix.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "CloudFabrix", logo: "https://logo.clearbit.com/fabrix.ai", type: "Startup", link: "https://www.fabrix.ai/", tags: ["Cloud-native", "Business/Support"] },
          { name: "InsightFinder", logo: "https://logo.clearbit.com/insightfinder.com", type: "Startup", link: "https://insightfinder.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "LogAI (OSS)", logo: "https://logo.clearbit.com/github.com", type: "Startup", link: "https://github.com/logai", tags: ["Open Source", "Business/Support"] },
          { name: "Aporia", logo: "https://logo.clearbit.com/aporia.com", type: "Startup", link: "https://aporia.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "EdenAI", logo: "https://logo.clearbit.com/edenai.co", type: "Startup", link: "https://edenai.co/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Cribl", logo: "https://logo.clearbit.com/cribl.io", type: "Startup", link: "https://cribl.io/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Kentik", logo: "https://logo.clearbit.com/kentik.com", type: "Startup", link: "https://www.kentik.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Lightstep", logo: "https://logo.clearbit.com/lightstep.com", type: "Startup", link: "https://lightstep.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Bigeye", logo: "https://logo.clearbit.com/bigeye.com", type: "Startup", link: "https://www.bigeye.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Acceldata", logo: "https://logo.clearbit.com/acceldata.io", type: "Startup", link: "https://acceldata.io/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Monte Carlo", logo: "https://logo.clearbit.com/montecarlodata.com", type: "Startup", link: "https://www.montecarlodata.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Synq", logo: "https://logo.clearbit.com/synq.io", type: "Startup", link: "https://synq.io/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Telmai", logo: "https://logo.clearbit.com/telmai.com", type: "Startup", link: "https://telmai.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Unravel", logo: "https://logo.clearbit.com/unraveldata.com", type: "Startup", link: "https://unraveldata.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Validio", logo: "https://logo.clearbit.com/validio.io", type: "Startup", link: "https://validio.io/", tags: ["Cloud-native", "Business/Support"] }
        ]
      },
      {
        name: "AI Insights",
        companies: [
          { name: "Dynatrace", logo: "https://logo.clearbit.com/dynatrace.com", type: "Enterprise", link: "https://www.dynatrace.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Datadog", logo: "https://logo.clearbit.com/datadoghq.com", type: "Enterprise", link: "https://www.datadoghq.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Splunk", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "New Relic", logo: "https://logo.clearbit.com/newrelic.com", type: "Enterprise", link: "https://newrelic.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "AppDynamics", logo: "https://logo.clearbit.com/appdynamics.com", type: "Enterprise", link: "https://www.appdynamics.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Grafana Labs", logo: "https://logo.clearbit.com/grafana.com", type: "Startup", link: "https://grafana.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com", type: "Enterprise", link: "https://www.servicenow.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Instana", logo: "https://logo.clearbit.com/instana.com", type: "Enterprise", link: "https://www.ibm.com/products/instana", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "ScienceLogic", logo: "https://logo.clearbit.com/sciencelogic.com", type: "Enterprise", link: "https://www.sciencelogic.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Sumo Logic", logo: "https://logo.clearbit.com/sumologic.com", type: "Enterprise", link: "https://www.sumologic.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "CloudFabrix", logo: "https://logo.clearbit.com/fabrix.ai", type: "Startup", link: "https://www.fabrix.ai/", tags: ["Cloud-native", "Business/Support"] },
          { name: "InsightFinder", logo: "https://logo.clearbit.com/insightfinder.com", type: "Startup", link: "https://insightfinder.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Aporia", logo: "https://logo.clearbit.com/aporia.com", type: "Startup", link: "https://aporia.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Cribl", logo: "https://logo.clearbit.com/cribl.io", type: "Startup", link: "https://cribl.io/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Kentik", logo: "https://logo.clearbit.com/kentik.com", type: "Startup", link: "https://www.kentik.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Bigeye", logo: "https://logo.clearbit.com/bigeye.com", type: "Startup", link: "https://www.bigeye.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Monte Carlo", logo: "https://logo.clearbit.com/montecarlodata.com", type: "Startup", link: "https://www.montecarlodata.com/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Validio", logo: "https://logo.clearbit.com/validio.io", type: "Startup", link: "https://validio.io/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Chronosphere", logo: "https://logo.clearbit.com/chronosphere.io", type: "Startup", link: "https://chronosphere.io/", tags: ["Cloud-native", "Business/Support"] },
          { name: "Coralogix", logo: "https://logo.clearbit.com/coralogix.com", type: "Startup", link: "https://coralogix.com/", tags: ["Cloud-native", "Business/Support"] }
        ]
      }
    ]
  },
  {
    category: "ITOM (IT Operations Management)",
    color: "#4ECDC4",
    subcategories: [
      {
        name: "CMDB",
        companies: [
          { name: "Freshservice", logo: "https://logo.clearbit.com/freshservice.com", type: "Enterprise", link: "https://freshservice.com/", tags: ["Cloud-native", "Business/Asset Management"] },
          { name: "Device42", logo: "https://logo.clearbit.com/device42.com", type: "Startup", link: "https://www.device42.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Lansweeper", logo: "https://logo.clearbit.com/lansweeper.com", type: "Startup", link: "https://www.lansweeper.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Snipe-IT", logo: "https://logo.clearbit.com/snipeitapp.com", type: "Startup", link: "https://snipeitapp.com/", tags: ["Cloud-native", "Business/Asset Management"] },
          { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com", type: "Enterprise", link: "https://www.servicenow.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "BMC Helix", logo: "https://logo.clearbit.com/bmc.com", type: "Enterprise", link: "https://www.bmc.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Ivanti", logo: "https://logo.clearbit.com/ivanti.com", type: "Enterprise", link: "https://www.ivanti.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "ManageEngine", logo: "https://logo.clearbit.com/manageengine.com", type: "Enterprise", link: "https://www.manageengine.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "i-doit", logo: "https://logo.clearbit.com/i-doit.com", type: "Startup", link: "https://www.i-doit.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "GLPI", logo: "https://logo.clearbit.com/glpi-project.org", type: "Startup", link: "https://glpi-project.org/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Cherwell", logo: "https://logo.clearbit.com/cherwell.com", type: "Enterprise", link: "https://www.cherwell.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "CA/Broadcom", logo: "https://logo.clearbit.com/broadcom.com", type: "Enterprise", link: "https://www.broadcom.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "IBM Control Desk", logo: "https://logo.clearbit.com/ibm.com", type: "Enterprise", link: "https://www.ibm.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Virima", logo: "https://logo.clearbit.com/virima.com", type: "Startup", link: "https://virima.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Faddom", logo: "https://logo.clearbit.com/faddom.com", type: "Startup", link: "https://faddom.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Zluri", logo: "https://logo.clearbit.com/zluri.com", type: "Startup", link: "https://www.zluri.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "AssetSonar", logo: "https://logo.clearbit.com/assetsonar.com", type: "Startup", link: "https://www.assetsonar.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "HaloITSM", logo: "https://logo.clearbit.com/haloitsm.com", type: "Startup", link: "https://www.haloitsm.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "CloudAware", logo: "https://logo.clearbit.com/cloudaware.com", type: "Startup", link: "https://www.cloudaware.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "InvGate", logo: "https://logo.clearbit.com/invgate.com", type: "Startup", link: "https://invgate.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Canfigure", logo: "https://logo.clearbit.com/canfigure.com", type: "Startup", link: "https://canfigure.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Asset Panda", logo: "https://logo.clearbit.com/assetpanda.com", type: "Startup", link: "https://www.assetpanda.com/", tags: ["Cloud-native", "Business/Asset Management"] },
          { name: "TeamDynamix", logo: "https://logo.clearbit.com/teamdynamix.com", type: "Startup", link: "https://www.teamdynamix.com/", tags: ["Cloud-native", "Business/Asset Management"] }
        ]
      },
      {
        name: "Service Mapping",
        companies: [
          { name: "Device42", logo: "https://logo.clearbit.com/device42.com", type: "Startup", link: "https://www.device42.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "InsightFinder", logo: "https://logo.clearbit.com/insightfinder.com", type: "Startup", link: "https://insightfinder.com/", tags: ["Cloud-native", "Business/Asset Management"] },
          { name: "CloudFabrix", logo: "https://logo.clearbit.com/fabrix.ai", type: "Startup", link: "https://www.fabrix.ai/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "Virima", logo: "https://logo.clearbit.com/virima.com", type: "Startup", link: "https://virima.com/", tags: ["Cloud-native", "Business/Asset Management"] },
          { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com", type: "Enterprise", link: "https://www.servicenow.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "BMC", logo: "https://logo.clearbit.com/bmc.com", type: "Enterprise", link: "https://www.bmc.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Dynatrace", logo: "https://logo.clearbit.com/dynatrace.com", type: "Enterprise", link: "https://www.dynatrace.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "AppDynamics", logo: "https://logo.clearbit.com/appdynamics.com", type: "Enterprise", link: "https://www.appdynamics.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Azure Service Map", logo: "https://logo.clearbit.com/microsoft.com", type: "Enterprise", link: "https://azure.microsoft.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Micro Focus", logo: "https://logo.clearbit.com/microfocus.com", type: "Enterprise", link: "https://www.microfocus.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Cisco", logo: "https://logo.clearbit.com/cisco.com", type: "Enterprise", link: "https://www.cisco.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "VMware", logo: "https://logo.clearbit.com/vmware.com", type: "Enterprise", link: "https://www.vmware.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Zabbix", logo: "https://logo.clearbit.com/zabbix.com", type: "Startup", link: "https://www.zabbix.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Nagios", logo: "https://logo.clearbit.com/nagios.org", type: "Startup", link: "https://www.nagios.org/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "SolarWinds", logo: "https://logo.clearbit.com/solarwinds.com", type: "Enterprise", link: "https://www.solarwinds.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Moogsoft", logo: "https://logo.clearbit.com/moogsoft.com", type: "Startup", link: "https://www.moogsoft.com/", tags: ["Cloud-native", "Business/Asset Management"] },
          { name: "Panorama9", logo: "https://logo.clearbit.com/panorama9.com", type: "Startup", link: "https://www.panorama9.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "NwTopo", logo: "https://logo.clearbit.com/nwtopo.com", type: "Startup", link: "https://nwtopo.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] }
        ]
      },
      {
        name: "Monitoring",
        companies: [
          { name: "Datadog", logo: "https://logo.clearbit.com/datadoghq.com", type: "Enterprise", link: "https://www.datadoghq.com/", tags: ["Cloud-native", "Business/Asset Management"] },
          { name: "Better Stack", logo: "https://logo.clearbit.com/betterstack.com", type: "Startup", link: "https://betterstack.com/", tags: ["Cloud-native", "Business/Asset Management"] },
          { name: "Sematext", logo: "https://logo.clearbit.com/sematext.com", type: "Startup", link: "https://sematext.com/", tags: ["Cloud-native", "Business/Asset Management"] },
          { name: "Site24x7", logo: "https://logo.clearbit.com/site24x7.com", type: "Enterprise", link: "https://www.site24x7.com/", tags: ["Cloud-native", "Business/Asset Management"] },
          { name: "LogicMonitor", logo: "https://logo.clearbit.com/logicmonitor.com", type: "Enterprise", link: "https://www.logicmonitor.com/", tags: ["Cloud-native", "Business/Asset Management"] },
          { name: "Sumo Logic", logo: "https://logo.clearbit.com/sumologic.com", type: "Enterprise", link: "https://www.sumologic.com/", tags: ["Cloud-native", "Business/Asset Management"] },
          { name: "Google Cloud Monitoring", logo: "https://logo.clearbit.com/google.com", type: "Enterprise", link: "https://cloud.google.com/monitoring", tags: ["Cloud-native", "Business/Asset Management"] },
          { name: "Azure Monitor", logo: "https://logo.clearbit.com/microsoft.com", type: "Enterprise", link: "https://azure.microsoft.com/en-us/services/monitor/", tags: ["Cloud-native", "Business/Asset Management"] },
          { name: "Amazon CloudWatch", logo: "https://logo.clearbit.com/amazon.com", type: "Enterprise", link: "https://aws.amazon.com/cloudwatch/", tags: ["Cloud-native", "Business/Asset Management"] },
          { name: "Prometheus", logo: "https://logo.clearbit.com/prometheus.io", type: "Startup", link: "https://prometheus.io/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Grafana", logo: "https://logo.clearbit.com/grafana.com", type: "Startup", link: "https://grafana.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Nagios", logo: "https://logo.clearbit.com/nagios.org", type: "Startup", link: "https://www.nagios.org/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Zabbix", logo: "https://logo.clearbit.com/zabbix.com", type: "Startup", link: "https://www.zabbix.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "SolarWinds", logo: "https://logo.clearbit.com/solarwinds.com", type: "Enterprise", link: "https://www.solarwinds.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "PRTG", logo: "https://logo.clearbit.com/paessler.com", type: "Startup", link: "https://www.paessler.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "ManageEngine", logo: "https://logo.clearbit.com/manageengine.com", type: "Enterprise", link: "https://www.manageengine.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Icinga", logo: "https://logo.clearbit.com/icinga.com", type: "Startup", link: "https://icinga.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Checkmk", logo: "https://logo.clearbit.com/checkmk.com", type: "Startup", link: "https://checkmk.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "ScienceLogic", logo: "https://logo.clearbit.com/sciencelogic.com", type: "Enterprise", link: "https://www.sciencelogic.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "AppDynamics", logo: "https://logo.clearbit.com/appdynamics.com", type: "Enterprise", link: "https://www.appdynamics.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Dynatrace", logo: "https://logo.clearbit.com/dynatrace.com", type: "Enterprise", link: "https://www.dynatrace.com/", tags: ["Cloud-native", "Business/Asset Management"] },
          { name: "New Relic", logo: "https://logo.clearbit.com/newrelic.com", type: "Enterprise", link: "https://newrelic.com/", tags: ["Cloud-native", "Business/Asset Management"] },
          { name: "Splunk", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Elastic", logo: "https://logo.clearbit.com/elastic.co", type: "Enterprise", link: "https://www.elastic.co/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "eG Enterprise", logo: "https://logo.clearbit.com/eginnovations.com", type: "Enterprise", link: "https://www.eginnovations.com/", tags: ["Cloud-native", "Business/Asset Management"] }
        ]
      }
    ]
  },
  {
    category: "AIOps (Artificial Intelligence for IT Operations)",
    color: "#FF9F43",
    subcategories: [
      {
        name: "Predictive Alerts",
        companies: [
          { name: "BigPanda", logo: "https://logo.clearbit.com/bigpanda.io", type: "Startup", link: "https://www.bigpanda.io/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Coralogix", logo: "https://logo.clearbit.com/coralogix.com", type: "Startup", link: "https://coralogix.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "CloudFabrix", logo: "https://logo.clearbit.com/fabrix.ai", type: "Startup", link: "https://www.fabrix.ai/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Zluri", logo: "https://logo.clearbit.com/zluri.com", type: "Startup", link: "https://www.zluri.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Aisera", logo: "https://logo.clearbit.com/aisera.com", type: "Startup", link: "https://www.aisera.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Site24x7", logo: "https://logo.clearbit.com/site24x7.com", type: "Enterprise", link: "https://www.site24x7.com/", tags: ["Cloud-native", "Infrastructure/ITOps"] },
          { name: "OpsRamp", logo: "https://logo.clearbit.com/opsramp.com", type: "Startup", link: "https://www.opsramp.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Dynatrace", logo: "https://logo.clearbit.com/dynatrace.com", type: "Enterprise", link: "https://www.dynatrace.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Datadog", logo: "https://logo.clearbit.com/datadoghq.com", type: "Enterprise", link: "https://www.datadoghq.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Splunk ITSI", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/en_us/software/itsi.html", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "New Relic", logo: "https://logo.clearbit.com/newrelic.com", type: "Enterprise", link: "https://newrelic.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "AppDynamics", logo: "https://logo.clearbit.com/appdynamics.com", type: "Enterprise", link: "https://www.appdynamics.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "IBM Watson AIOps", logo: "https://logo.clearbit.com/ibm.com", type: "Enterprise", link: "https://www.ibm.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "BMC Helix", logo: "https://logo.clearbit.com/bmc.com", type: "Enterprise", link: "https://www.bmc.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "LogicMonitor", logo: "https://logo.clearbit.com/logicmonitor.com", type: "Enterprise", link: "https://www.logicmonitor.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] }
        ]
      },
      {
        name: "AI Insights",
        companies: [
          { name: "Aisera", logo: "https://logo.clearbit.com/aisera.com", type: "Startup", link: "https://www.aisera.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "CloudFabrix", logo: "https://logo.clearbit.com/fabrix.ai", type: "Startup", link: "https://www.fabrix.ai/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "InsightFinder", logo: "https://logo.clearbit.com/insightfinder.com", type: "Startup", link: "https://insightfinder.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Aporia", logo: "https://logo.clearbit.com/aporia.com", type: "Startup", link: "https://aporia.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Cribl", logo: "https://logo.clearbit.com/cribl.io", type: "Startup", link: "https://cribl.io/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Kentik", logo: "https://logo.clearbit.com/kentik.com", type: "Startup", link: "https://www.kentik.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Zluri", logo: "https://logo.clearbit.com/zluri.com", type: "Startup", link: "https://www.zluri.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Sematext", logo: "https://logo.clearbit.com/sematext.com", type: "Startup", link: "https://sematext.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Dynatrace", logo: "https://logo.clearbit.com/dynatrace.com", type: "Enterprise", link: "https://www.dynatrace.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Datadog", logo: "https://logo.clearbit.com/datadoghq.com", type: "Enterprise", link: "https://www.datadoghq.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Splunk", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "New Relic", logo: "https://logo.clearbit.com/newrelic.com", type: "Enterprise", link: "https://newrelic.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "AppDynamics", logo: "https://logo.clearbit.com/appdynamics.com", type: "Enterprise", link: "https://www.appdynamics.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "IBM", logo: "https://logo.clearbit.com/ibm.com", type: "Enterprise", link: "https://www.ibm.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "BMC", logo: "https://logo.clearbit.com/bmc.com", type: "Enterprise", link: "https://www.bmc.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "LogicMonitor", logo: "https://logo.clearbit.com/logicmonitor.com", type: "Enterprise", link: "https://www.logicmonitor.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com", type: "Enterprise", link: "https://www.servicenow.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] }
        ]
      },
      {
        name: "Remediation",
        companies: [
          { name: "Aisera", logo: "https://logo.clearbit.com/aisera.com", type: "Startup", link: "https://www.aisera.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "CloudFabrix", logo: "https://logo.clearbit.com/fabrix.ai", type: "Startup", link: "https://www.fabrix.ai/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Zluri", logo: "https://logo.clearbit.com/zluri.com", type: "Startup", link: "https://www.zluri.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Avantra", logo: "https://logo.clearbit.com/avantra.com", type: "Startup", link: "https://www.avantra.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "InsightFinder", logo: "https://logo.clearbit.com/insightfinder.com", type: "Startup", link: "https://insightfinder.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Sematext", logo: "https://logo.clearbit.com/sematext.com", type: "Startup", link: "https://sematext.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "ServicePilot", logo: "https://logo.clearbit.com/servicepilot.com", type: "Startup", link: "https://www.servicepilot.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Dynatrace", logo: "https://logo.clearbit.com/dynatrace.com", type: "Enterprise", link: "https://www.dynatrace.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Datadog", logo: "https://logo.clearbit.com/datadoghq.com", type: "Enterprise", link: "https://www.datadoghq.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Splunk ITSI", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/en_us/software/itsi.html", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "IBM", logo: "https://logo.clearbit.com/ibm.com", type: "Enterprise", link: "https://www.ibm.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "BMC", logo: "https://logo.clearbit.com/bmc.com", type: "Enterprise", link: "https://www.bmc.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "PagerDuty", logo: "https://logo.clearbit.com/pagerduty.com", type: "Enterprise", link: "https://www.pagerduty.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "LogicMonitor", logo: "https://logo.clearbit.com/logicmonitor.com", type: "Enterprise", link: "https://www.logicmonitor.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] }
        ]
      },
      {
        name: "Root Cause Analysis",
        companies: [
          { name: "Aporia", logo: "https://logo.clearbit.com/aporia.com", type: "Startup", link: "https://aporia.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "InsightFinder", logo: "https://logo.clearbit.com/insightfinder.com", type: "Startup", link: "https://insightfinder.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "CloudFabrix", logo: "https://logo.clearbit.com/fabrix.ai", type: "Startup", link: "https://www.fabrix.ai/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Cribl", logo: "https://logo.clearbit.com/cribl.io", type: "Startup", link: "https://cribl.io/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Kentik", logo: "https://logo.clearbit.com/kentik.com", type: "Startup", link: "https://www.kentik.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Site24x7", logo: "https://logo.clearbit.com/site24x7.com", type: "Enterprise", link: "https://www.site24x7.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Netreo", logo: "https://logo.clearbit.com/netreo.com", type: "Startup", link: "https://www.netreo.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Splunk ITSI", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/en_us/software/itsi.html", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Dynatrace", logo: "https://logo.clearbit.com/dynatrace.com", type: "Enterprise", link: "https://www.dynatrace.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Datadog", logo: "https://logo.clearbit.com/datadoghq.com", type: "Enterprise", link: "https://www.datadoghq.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "New Relic", logo: "https://logo.clearbit.com/newrelic.com", type: "Enterprise", link: "https://newrelic.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "AppDynamics", logo: "https://logo.clearbit.com/appdynamics.com", type: "Enterprise", link: "https://www.appdynamics.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "IBM", logo: "https://logo.clearbit.com/ibm.com", type: "Enterprise", link: "https://www.ibm.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com", type: "Enterprise", link: "https://www.servicenow.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "BMC", logo: "https://logo.clearbit.com/bmc.com", type: "Enterprise", link: "https://www.bmc.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] }
        ]
      },
      {
        name: "Anomaly Detection",
        companies: [
          { name: "BigPanda", logo: "https://logo.clearbit.com/bigpanda.io", type: "Startup", link: "https://www.bigpanda.io/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "CloudFabrix", logo: "https://logo.clearbit.com/fabrix.ai", type: "Startup", link: "https://www.fabrix.ai/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Cribl", logo: "https://logo.clearbit.com/cribl.io", type: "Startup", link: "https://cribl.io/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "InsightFinder", logo: "https://logo.clearbit.com/insightfinder.com", type: "Startup", link: "https://insightfinder.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Avantra", logo: "https://logo.clearbit.com/avantra.com", type: "Startup", link: "https://www.avantra.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Aisera", logo: "https://logo.clearbit.com/aisera.com", type: "Startup", link: "https://www.aisera.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Zluri", logo: "https://logo.clearbit.com/zluri.com", type: "Startup", link: "https://www.zluri.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Site24x7", logo: "https://logo.clearbit.com/site24x7.com", type: "Enterprise", link: "https://www.site24x7.com/", tags: ["Cloud-native", "Business/Cognitive Automation"] },
          { name: "Datadog", logo: "https://logo.clearbit.com/datadoghq.com", type: "Enterprise", link: "https://www.datadoghq.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Dynatrace", logo: "https://logo.clearbit.com/dynatrace.com", type: "Enterprise", link: "https://www.dynatrace.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "Splunk ITSI", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/en_us/software/itsi.html", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "New Relic", logo: "https://logo.clearbit.com/newrelic.com", type: "Enterprise", link: "https://newrelic.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "IBM", logo: "https://logo.clearbit.com/ibm.com", type: "Enterprise", link: "https://www.ibm.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "BMC", logo: "https://logo.clearbit.com/bmc.com", type: "Enterprise", link: "https://www.bmc.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] },
          { name: "LogicMonitor", logo: "https://logo.clearbit.com/logicmonitor.com", type: "Enterprise", link: "https://www.logicmonitor.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps"] }
        ]
      }
    ]
  },
  {
    category: "Digital Ops Management",
    color: "#6C5CE7",
    subcategories: [
      {
        name: "KPI Dashboards",
        companies: [
          { name: "Tableau Cloud", logo: "https://logo.clearbit.com/tableau.com", type: "Enterprise", link: "https://www.tableau.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Power BI (Cloud)", logo: "https://logo.clearbit.com/microsoft.com", type: "Enterprise", link: "https://powerbi.microsoft.com/", tags: ["Cloud-native", "IT/Operational Teams"] },
          { name: "Looker", logo: "https://logo.clearbit.com/looker.com", type: "Enterprise", link: "https://looker.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Domo", logo: "https://logo.clearbit.com/domo.com", type: "Enterprise", link: "https://www.domo.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Databox", logo: "https://logo.clearbit.com/databox.com", type: "Startup", link: "https://databox.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Geckoboard", logo: "https://logo.clearbit.com/geckoboard.com", type: "Startup", link: "https://www.geckoboard.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Mode", logo: "https://logo.clearbit.com/mode.com", type: "Startup", link: "https://mode.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Holistics", logo: "https://logo.clearbit.com/holistics.io", type: "Startup", link: "https://www.holistics.io/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Whatagraph", logo: "https://logo.clearbit.com/whatagraph.com", type: "Startup", link: "https://whatagraph.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "GoodData", logo: "https://logo.clearbit.com/gooddata.com", type: "Startup", link: "https://www.gooddata.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "MicroStrategy", logo: "https://logo.clearbit.com/microstrategy.com", type: "Enterprise", link: "https://www.microstrategy.com/", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] },
          { name: "IBM Cognos", logo: "https://logo.clearbit.com/ibm.com", type: "Enterprise", link: "https://www.ibm.com/", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] },
          { name: "Qlik", logo: "https://logo.clearbit.com/qlik.com", type: "Enterprise", link: "https://www.qlik.com/", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] },
          { name: "SAP Analytics Cloud", logo: "https://logo.clearbit.com/sap.com", type: "Enterprise", link: "https://www.sap.com/", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] },
          { name: "Oracle Analytics", logo: "https://logo.clearbit.com/oracle.com", type: "Enterprise", link: "https://www.oracle.com/", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] },
          { name: "TIBCO Spotfire", logo: "https://logo.clearbit.com/tibco.com", type: "Enterprise", link: "https://www.tibco.com/", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] }
        ]
      },
      {
        name: "Workflow Mapping",
        companies: [
          { name: "Lucidchart", logo: "https://logo.clearbit.com/lucidchart.com", type: "Enterprise", link: "https://www.lucidchart.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Process Street", logo: "https://logo.clearbit.com/process.st", type: "Startup", link: "https://www.process.st/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Monday.com", logo: "https://logo.clearbit.com/monday.com", type: "Startup", link: "https://monday.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "ClickUp", logo: "https://logo.clearbit.com/clickup.com", type: "Startup", link: "https://clickup.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Pipefy", logo: "https://logo.clearbit.com/pipefy.com", type: "Startup", link: "https://www.pipefy.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Qntrl", logo: "https://logo.clearbit.com/qntrl.com", type: "Startup", link: "https://qntrl.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Creately", logo: "https://logo.clearbit.com/creately.com", type: "Startup", link: "https://creately.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Miro", logo: "https://logo.clearbit.com/miro.com", type: "Startup", link: "https://miro.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Workato", logo: "https://logo.clearbit.com/workato.com", type: "Startup", link: "https://www.workato.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Microsoft Visio", logo: "https://logo.clearbit.com/microsoft.com", type: "Enterprise", link: "https://www.microsoft.com/", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] },
          { name: "IBM Blueworks Live", logo: "https://logo.clearbit.com/ibm.com", type: "Enterprise", link: "https://www.ibm.com/", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] },
          { name: "Oracle BPM", logo: "https://logo.clearbit.com/oracle.com", type: "Enterprise", link: "https://www.oracle.com/", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] },
          { name: "Appian", logo: "https://logo.clearbit.com/appian.com", type: "Enterprise", link: "https://www.appian.com/", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] },
          { name: "TIBCO BPM", logo: "https://logo.clearbit.com/tibco.com", type: "Enterprise", link: "https://www.tibco.com/", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] },
          { name: "Software AG", logo: "https://logo.clearbit.com/softwareag.com", type: "Enterprise", link: "https://www.softwareag.com/", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] },
          { name: "BMC Helix BPM", logo: "https://logo.clearbit.com/bmc.com", type: "Enterprise", link: "https://www.bmc.com/", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] }
        ]
      },
      {
        name: "Cross-Team Workflows",
        companies: [
          { name: "Asana", logo: "https://logo.clearbit.com/asana.com", type: "Startup", link: "https://asana.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Trello", logo: "https://logo.clearbit.com/trello.com", type: "Startup", link: "https://trello.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "ClickUp", logo: "https://logo.clearbit.com/clickup.com", type: "Startup", link: "https://clickup.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Airtable", logo: "https://logo.clearbit.com/airtable.com", type: "Startup", link: "https://airtable.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Monday.com", logo: "https://logo.clearbit.com/monday.com", type: "Startup", link: "https://monday.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Notion", logo: "https://logo.clearbit.com/notion.so", type: "Startup", link: "https://www.notion.so/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Wrike", logo: "https://logo.clearbit.com/wrike.com", type: "Startup", link: "https://www.wrike.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Google Workspace", logo: "https://logo.clearbit.com/google.com", type: "Enterprise", link: "https://workspace.google.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Zoom", logo: "https://logo.clearbit.com/zoom.us", type: "Enterprise", link: "https://zoom.us/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "Slack", logo: "https://logo.clearbit.com/slack.com", type: "Startup", link: "https://slack.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "ProofHub", logo: "https://logo.clearbit.com/proofhub.com", type: "Startup", link: "https://www.proofhub.com/", tags: ["Cloud-native", "Business/Collaboration"] },
          { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com", type: "Enterprise", link: "https://www.servicenow.com/", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] },
          { name: "Jira", logo: "https://logo.clearbit.com/atlassian.com", type: "Enterprise", link: "https://www.atlassian.com/", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] },
          { name: "Microsoft Teams", logo: "https://logo.clearbit.com/microsoft.com", type: "Enterprise", link: "https://www.microsoft.com/", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] },
          { name: "Citrix", logo: "https://logo.clearbit.com/citrix.com", type: "Enterprise", link: "https://www.citrix.com/", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] },
          { name: "SAP SuccessFactors", logo: "https://logo.clearbit.com/sap.com", type: "Enterprise", link: "https://www.sap.com/products/successfactors.html", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] },
          { name: "Oracle HCM", logo: "https://logo.clearbit.com/oracle.com", type: "Enterprise", link: "https://www.oracle.com/human-capital-management/", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] },
          { name: "IBM Cloud Pak", logo: "https://logo.clearbit.com/ibm.com", type: "Enterprise", link: "https://www.ibm.com/cloud/cloud-pak-for-business-automation", tags: ["On-Prem/Hybrid", "IT/Operational Teams"] }
        ]
      }
    ]
  },
  {
    category: "ITPA (IT Process Automation)",
    color: "#00B894",
    subcategories: [
      {
        name: "Runbooks",
        companies: [
          { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com", type: "Enterprise", link: "https://www.servicenow.com/", tags: ["Cloud-native", "IT/DevOps Focused"] },
          { name: "UiPath", logo: "https://logo.clearbit.com/uipath.com", type: "Enterprise", link: "https://www.uipath.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "AutomationEdge", logo: "https://logo.clearbit.com/automationedge.com", type: "Startup", link: "https://www.automationedge.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "Zluri", logo: "https://logo.clearbit.com/zluri.com", type: "Startup", link: "https://www.zluri.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "Jira Service Management", logo: "https://logo.clearbit.com/atlassian.com", type: "Enterprise", link: "https://www.atlassian.com/software/jira/service-management", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "Ignio", logo: "https://logo.clearbit.com/ignio.ai", type: "Startup", link: "https://ignio.ai/", tags: ["Cloud-native", "IT/DevOps Focused"] },
          { name: "Laserfiche", logo: "https://logo.clearbit.com/laserfiche.com", type: "Startup", link: "https://www.laserfiche.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "IBM Runbook Automation", logo: "https://logo.clearbit.com/ibm.com", type: "Enterprise", link: "https://www.ibm.com/automation/runbook-automation", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "ActiveBatch", logo: "https://logo.clearbit.com/redwood.com", type: "Enterprise", link: "https://www.advscheduler.com/activebatch/", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "Stonebranch", logo: "https://logo.clearbit.com/stonebranch.com", type: "Startup", link: "https://www.stonebranch.com/", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "BMC Control-M", logo: "https://logo.clearbit.com/bmc.com", type: "Enterprise", link: "https://www.bmc.com/it-solutions/control-m.html", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "Fortra JAMS", logo: "https://logo.clearbit.com/fortra.com", type: "Enterprise", link: "https://www.fortra.com/products/jams", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "AutoSys", logo: "https://logo.clearbit.com/broadcom.com", type: "Enterprise", link: "https://www.broadcom.com/products/software/automation/autosys-workload-automation", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] }
        ]
      },
      {
        name: "Orchestration",
        companies: [
          { name: "Pipefy", logo: "https://logo.clearbit.com/pipefy.com", type: "Startup", link: "https://www.pipefy.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "Workato", logo: "https://logo.clearbit.com/workato.com", type: "Startup", link: "https://www.workato.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "SnapLogic", logo: "https://logo.clearbit.com/snaplogic.com", type: "Startup", link: "https://www.snaplogic.com/", tags: ["Cloud-native", "IT/DevOps Focused"] },
          { name: "Qntrl", logo: "https://logo.clearbit.com/qntrl.com", type: "Startup", link: "https://qntrl.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "Appian (Cloud)", logo: "https://logo.clearbit.com/appian.com", type: "Enterprise", link: "https://www.appian.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "Camunda Cloud", logo: "https://logo.clearbit.com/camunda.com", type: "Startup", link: "https://camunda.com/products/cloud/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "Kissflow", logo: "https://logo.clearbit.com/kissflow.com", type: "Startup", link: "https://kissflow.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "BMC Control-M", logo: "https://logo.clearbit.com/bmc.com", type: "Enterprise", link: "https://www.bmc.com/it-solutions/control-m.html", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "AutoSys", logo: "https://logo.clearbit.com/broadcom.com", type: "Enterprise", link: "https://www.broadcom.com/products/software/automation/autosys-workload-automation", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "ActiveBatch", logo: "https://logo.clearbit.com/redwood.com", type: "Enterprise", link: "https://www.advscheduler.com/activebatch/", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "IBM RPA", logo: "https://logo.clearbit.com/ibm.com", type: "Enterprise", link: "https://www.ibm.com/products/robotic-process-automation", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "Oracle BPM", logo: "https://logo.clearbit.com/oracle.com", type: "Enterprise", link: "https://www.oracle.com/middleware/technologies/bpm.html", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "TIBCO BPM", logo: "https://logo.clearbit.com/tibco.com", type: "Enterprise", link: "https://www.tibco.com/products/businessworks", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "Stonebranch", logo: "https://logo.clearbit.com/stonebranch.com", type: "Startup", link: "https://www.stonebranch.com/", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "Nintex", logo: "https://logo.clearbit.com/nintex.com", type: "Enterprise", link: "https://www.nintex.com/", tags: ["On-Prem/Hybrid", "Business/Compliance Focused"] }
        ]
      },
      {
        name: "Self-Healing",
        companies: [
          { name: "Aisera", logo: "https://logo.clearbit.com/aisera.com", type: "Startup", link: "https://www.aisera.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "BigPanda", logo: "https://logo.clearbit.com/bigpanda.io", type: "Startup", link: "https://www.bigpanda.io/", tags: ["Cloud-native", "IT/DevOps Focused"] },
          { name: "CloudFabrix", logo: "https://logo.clearbit.com/fabrix.ai", type: "Startup", link: "https://www.fabrix.ai/", tags: ["Cloud-native", "IT/DevOps Focused"] },
          { name: "Site24x7", logo: "https://logo.clearbit.com/site24x7.com", type: "Enterprise", link: "https://www.site24x7.com/", tags: ["Cloud-native", "IT/DevOps Focused"] },
          { name: "Avantra", logo: "https://logo.clearbit.com/avantra.com", type: "Startup", link: "https://www.avantra.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "InsightFinder", logo: "https://logo.clearbit.com/insightfinder.com", type: "Startup", link: "https://insightfinder.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "Zluri", logo: "https://logo.clearbit.com/zluri.com", type: "Startup", link: "https://www.zluri.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "ServicePilot", logo: "https://logo.clearbit.com/servicepilot.com", type: "Startup", link: "https://www.servicepilot.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "Splunk ITSI", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/en_us/software/itsi.html", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "BMC Helix", logo: "https://logo.clearbit.com/bmc.com", type: "Enterprise", link: "https://www.bmc.com/", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "Dynatrace", logo: "https://logo.clearbit.com/dynatrace.com", type: "Enterprise", link: "https://www.dynatrace.com/", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "Datadog", logo: "https://logo.clearbit.com/datadoghq.com", type: "Enterprise", link: "https://www.datadoghq.com/", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "AppDynamics", logo: "https://logo.clearbit.com/appdynamics.com", type: "Enterprise", link: "https://www.appdynamics.com/", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "IBM RPA", logo: "https://logo.clearbit.com/ibm.com", type: "Enterprise", link: "https://www.ibm.com/products/robotic-process-automation", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "Resolve.io", logo: "https://logo.clearbit.com/resolve.io", type: "Startup", link: "https://resolve.io/", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] }
        ]
      },
      {
        name: "Policy Execution",
        companies: [
          { name: "UiPath", logo: "https://logo.clearbit.com/uipath.com", type: "Enterprise", link: "https://www.uipath.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "AutomationEdge", logo: "https://logo.clearbit.com/automationedge.com", type: "Startup", link: "https://www.automationedge.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com", type: "Enterprise", link: "https://www.salesforce.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "Decisions", logo: "https://logo.clearbit.com/decisions.com", type: "Startup", link: "https://decisions.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "InRule", logo: "https://logo.clearbit.com/inrule.com", type: "Startup", link: "https://www.inrule.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "Sparkling Logic", logo: "https://logo.clearbit.com/sparklinglogic.com", type: "Startup", link: "https://www.sparklinglogic.com/", tags: ["Cloud-native", "IT/DevOps Focused"] },
          { name: "Signavio", logo: "https://logo.clearbit.com/signavio.com", type: "Startup", link: "https://www.signavio.com/", tags: ["Cloud-native", "Business/Compliance Focused"] },
          { name: "IBM ODM", logo: "https://logo.clearbit.com/ibm.com", type: "Enterprise", link: "https://www.ibm.com/products/operational-decision-manager", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "Red Hat Decision Manager", logo: "https://logo.clearbit.com/redhat.com", type: "Enterprise", link: "https://www.redhat.com/en/technologies/jboss-middleware/decision-manager", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "Oracle Advisor", logo: "https://logo.clearbit.com/oracle.com", type: "Enterprise", link: "https://www.oracle.com/industries/financial-services/advisor.html", tags: ["On-Prem/Hybrid", "IT/DevOps Focused"] },
          { name: "SAP BRM", logo: "https://logo.clearbit.com/sap.com", type: "Enterprise", link: "https://www.sap.com/products/brm.html", tags: ["On-Prem/Hybrid", "Business/Compliance Focused"] },
          { name: "FICO", logo: "https://logo.clearbit.com/fico.com", type: "Enterprise", link: "https://www.fico.com/", tags: ["On-Prem/Hybrid", "Business/Compliance Focused"] },
          { name: "Pega", logo: "https://logo.clearbit.com/pega.com", type: "Enterprise", link: "https://www.pega.com/", tags: ["On-Prem/Hybrid", "Business/Compliance Focused"] },
          { name: "SAS", logo: "https://logo.clearbit.com/sas.com", type: "Enterprise", link: "https://www.sas.com/", tags: ["On-Prem/Hybrid", "Business/Compliance Focused"] },
          { name: "TIBCO", logo: "https://logo.clearbit.com/tibco.com", type: "Enterprise", link: "https://www.tibco.com/", tags: ["On-Prem/Hybrid", "Business/Compliance Focused"] }
        ]
      }
    ]
  },
  {
    category: "DevOps & SRE Enablement",
    color: "#E17055",
    subcategories: [
      {
        name: "Release Operations",
        companies: [
          // Cloud-native Tools
          { name: "GitHub Actions", logo: "https://logo.clearbit.com/github.com", type: "Startup", link: "https://github.com/", tags: ["Cloud-native", "Monitoring/Incident Ops"] },
          { name: "GitLab (Cloud)", logo: "https://logo.clearbit.com/gitlab.com", type: "Startup", link: "https://gitlab.com/", tags: ["Cloud-native", "DevOps/Platform Engineering"] },
          { name: "Bitbucket Pipelines", logo: "https://logo.clearbit.com/atlassian.com", type: "Enterprise", link: "https://bitbucket.org/product/features/pipelines", tags: ["Cloud-native", "DevOps/Platform Engineering"] },
          { name: "CircleCI", logo: "https://logo.clearbit.com/circleci.com", type: "Startup", link: "https://circleci.com/", tags: ["Cloud-native", "DevOps/Platform Engineering"] },
          { name: "Travis CI", logo: "https://logo.clearbit.com/travis-ci.com", type: "Startup", link: "https://travis-ci.com/", tags: ["Cloud-native", "DevOps/Platform Engineering"] },
          { name: "Codefresh", logo: "https://logo.clearbit.com/codefresh.io", type: "Startup", link: "https://codefresh.io/", tags: ["Cloud-native", "DevOps/Platform Engineering"] },
          { name: "Harness", logo: "https://logo.clearbit.com/harness.io", type: "Startup", link: "https://harness.io/", tags: ["Cloud-native", "CloudOps/IaC Focus"] },
          { name: "LaunchDarkly", logo: "https://logo.clearbit.com/launchdarkly.com", type: "Startup", link: "https://launchdarkly.com/", tags: ["Cloud-native", "Monitoring/Incident Ops"] },
          { name: "Split.io", logo: "https://logo.clearbit.com/split.io", type: "Startup", link: "https://split.io/", tags: ["Cloud-native", "Monitoring/Incident Ops"] },
          // On-Prem/Hybrid Tools
          { name: "Jenkins", logo: "https://logo.clearbit.com/jenkins.io", type: "Enterprise", link: "https://jenkins.io/", tags: ["On-Prem/Hybrid", "DevOps/Platform Engineering"] },
          { name: "TeamCity", logo: "https://logo.clearbit.com/jetbrains.com", type: "Enterprise", link: "https://www.jetbrains.com/teamcity/", tags: ["On-Prem/Hybrid", "DevOps/Platform Engineering"] },
          { name: "Bamboo", logo: "https://logo.clearbit.com/atlassian.com", type: "Enterprise", link: "https://www.atlassian.com/software/bamboo", tags: ["On-Prem/Hybrid", "DevOps/Platform Engineering"] },
          { name: "Spinnaker", logo: "https://logo.clearbit.com/spinnaker.io", type: "Startup", link: "https://spinnaker.io/", tags: ["On-Prem/Hybrid", "CloudOps/IaC Focus"] },
          { name: "Argo CD", logo: "https://logo.clearbit.com/argoproj.io", type: "Startup", link: "https://argoproj.github.io/argo-cd/", tags: ["On-Prem/Hybrid", "CloudOps/IaC Focus"] },
          { name: "Flux", logo: "https://logo.clearbit.com/fluxcd.io", type: "Startup", link: "https://fluxcd.io/", tags: ["On-Prem/Hybrid", "CloudOps/IaC Focus"] },
          { name: "UrbanCode Deploy", logo: "https://logo.clearbit.com/ibm.com", type: "Enterprise", link: "https://www.ibm.com/products/urbancode-deploy", tags: ["On-Prem/Hybrid", "CloudOps/IaC Focus"] },
          { name: "XebiaLabs", logo: "https://logo.clearbit.com/xebialabs.com", type: "Startup", link: "https://xebialabs.com/", tags: ["On-Prem/Hybrid", "CloudOps/IaC Focus"] },
          { name: "Inedo", logo: "https://logo.clearbit.com/inedo.com", type: "Startup", link: "https://inedo.com/", tags: ["On-Prem/Hybrid", "CloudOps/IaC Focus"] },
          // Established Enterprises
          { name: "Azure DevOps", logo: "https://logo.clearbit.com/microsoft.com", type: "Enterprise", link: "https://azure.microsoft.com/", tags: ["Cloud-native", "DevOps/Platform Engineering"] },
          { name: "AWS CodePipeline", logo: "https://logo.clearbit.com/amazon.com", type: "Enterprise", link: "https://aws.amazon.com/codepipeline/", tags: ["Cloud-native", "CloudOps/IaC Focus"] },
          { name: "Google Cloud Build", logo: "https://logo.clearbit.com/google.com", type: "Enterprise", link: "https://cloud.google.com/build", tags: ["Cloud-native", "DevOps/Platform Engineering"] },
          // Modern Vendors
          { name: "Buildkite", logo: "https://logo.clearbit.com/buildkite.com", type: "Startup", link: "https://buildkite.com/", tags: ["Cloud-native", "DevOps/Platform Engineering"] },
          { name: "Semaphore", logo: "https://logo.clearbit.com/semaphoreci.com", type: "Startup", link: "https://semaphoreci.com/", tags: ["Cloud-native", "DevOps/Platform Engineering"] },
          { name: "Buddy", logo: "https://logo.clearbit.com/buddy.works", type: "Startup", link: "https://buddy.works/", tags: ["Cloud-native", "DevOps/Platform Engineering"] },
          { name: "FeatureFlag", logo: "https://logo.clearbit.com/featureflag.com", type: "Startup", link: "https://featureflag.com/", tags: ["Cloud-native", "Monitoring/Incident Ops"] },
          { name: "Rollout.io", logo: "https://logo.clearbit.com/rollout.io", type: "Startup", link: "https://rollout.io/", tags: ["Cloud-native", "Monitoring/Incident Ops"] }
        ]
      },
      {
        name: "Toil Reduction",
        companies: [
          // Cloud-native Tools
          { name: "PagerDuty", logo: "https://logo.clearbit.com/pagerduty.com", type: "Enterprise", link: "https://www.pagerduty.com/", tags: ["Cloud-native", "DevOps/Platform Engineering"] },
          { name: "Opsgenie", logo: "https://logo.clearbit.com/opsgenie.com", type: "Enterprise", link: "https://www.opsgenie.com/", tags: ["Cloud-native", "DevOps/Platform Engineering"] },
          { name: "xMatters", logo: "https://logo.clearbit.com/xmatters.com", type: "Startup", link: "https://www.xmatters.com/", tags: ["Cloud-native", "DevOps/Platform Engineering"] },
          { name: "BigPanda", logo: "https://logo.clearbit.com/bigpanda.io", type: "Startup", link: "https://www.bigpanda.io/", tags: ["Cloud-native", "Monitoring/Incident Ops"] },
          { name: "Moogsoft", logo: "https://logo.clearbit.com/moogsoft.com", type: "Startup", link: "https://www.moogsoft.com/", tags: ["Cloud-native", "DevOps/Platform Engineering"] },
          { name: "Lightstep", logo: "https://logo.clearbit.com/lightstep.com", type: "Startup", link: "https://lightstep.com/", tags: ["Cloud-native", "DevOps/Platform Engineering"] },
          { name: "Honeycomb", logo: "https://logo.clearbit.com/honeycomb.io", type: "Startup", link: "https://www.honeycomb.io/", tags: ["Cloud-native", "DevOps/Platform Engineering"] },
          { name: "Site24x7", logo: "https://logo.clearbit.com/site24x7.com", type: "Enterprise", link: "https://www.site24x7.com/", tags: ["Cloud-native", "Monitoring/Incident Ops"] },
          { name: "Instana", logo: "https://logo.clearbit.com/instana.com", type: "Enterprise", link: "https://www.ibm.com/products/instana", tags: ["Cloud-native", "Monitoring/Incident Ops"] },
          // On-Prem/Hybrid Tools
          { name: "Splunk On-Call", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/", tags: ["On-Prem/Hybrid", "Monitoring/Incident Ops"] },
          { name: "AppDynamics", logo: "https://logo.clearbit.com/appdynamics.com", type: "Enterprise", link: "https://www.appdynamics.com/", tags: ["On-Prem/Hybrid", "Monitoring/Incident Ops"] },
          { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com", type: "Enterprise", link: "https://www.servicenow.com/", tags: ["On-Prem/Hybrid", "DevOps/Platform Engineering"] },
          { name: "Nagios", logo: "https://logo.clearbit.com/nagios.org", type: "Startup", link: "https://www.nagios.org/", tags: ["On-Prem/Hybrid", "Monitoring/Incident Ops"] },
          { name: "Zabbix", logo: "https://logo.clearbit.com/zabbix.com", type: "Startup", link: "https://www.zabbix.com/", tags: ["On-Prem/Hybrid", "Monitoring/Incident Ops"] },
          { name: "Icinga", logo: "https://logo.clearbit.com/icinga.com", type: "Startup", link: "https://icinga.com/", tags: ["On-Prem/Hybrid", "Monitoring/Incident Ops"] },
          { name: "Checkmk", logo: "https://logo.clearbit.com/checkmk.com", type: "Startup", link: "https://checkmk.com/", tags: ["On-Prem/Hybrid", "Monitoring/Incident Ops"] },
          { name: "Sensu", logo: "https://logo.clearbit.com/sensu.io", type: "Startup", link: "https://sensu.io/", tags: ["On-Prem/Hybrid", "Monitoring/Incident Ops"] },
          // Established Enterprises
          { name: "Splunk", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/", tags: ["On-Prem/Hybrid", "Monitoring/Incident Ops"] },
          { name: "Datadog", logo: "https://logo.clearbit.com/datadoghq.com", type: "Enterprise", link: "https://www.datadoghq.com/", tags: ["Cloud-native", "Monitoring/Incident Ops"] },
          { name: "New Relic", logo: "https://logo.clearbit.com/newrelic.com", type: "Enterprise", link: "https://newrelic.com/", tags: ["Cloud-native", "Monitoring/Incident Ops"] },
          { name: "LogicMonitor", logo: "https://logo.clearbit.com/logicmonitor.com", type: "Enterprise", link: "https://www.logicmonitor.com/", tags: ["Cloud-native", "Monitoring/Incident Ops"] },
          { name: "Elastic Stack", logo: "https://logo.clearbit.com/elastic.co", type: "Enterprise", link: "https://www.elastic.co/", tags: ["On-Prem/Hybrid", "Monitoring/Incident Ops"] },
          { name: "Sumo Logic", logo: "https://logo.clearbit.com/sumologic.com", type: "Enterprise", link: "https://www.sumologic.com/", tags: ["Cloud-native", "Monitoring/Incident Ops"] },
          { name: "Netdata", logo: "https://logo.clearbit.com/netdata.cloud", type: "Startup", link: "https://www.netdata.cloud/", tags: ["Cloud-native", "Monitoring/Incident Ops"] },
          { name: "SignalFx", logo: "https://logo.clearbit.com/splunk.com", type: "Enterprise", link: "https://www.splunk.com/", tags: ["Cloud-native", "Monitoring/Incident Ops"] }
        ]
      },
      {
        name: "Environment Automation",
        companies: [
          // Cloud-native Tools
          { name: "Terraform Cloud", logo: "https://logo.clearbit.com/hashicorp.com", type: "Startup", link: "https://www.terraform.io/cloud", tags: ["Cloud-native", "CloudOps/IaC Focus"] },
          { name: "Pulumi", logo: "https://logo.clearbit.com/pulumi.com", type: "Startup", link: "https://www.pulumi.com/", tags: ["Cloud-native", "CloudOps/IaC Focus"] },
          { name: "Crossplane", logo: "https://logo.clearbit.com/crossplane.io", type: "Startup", link: "https://crossplane.io/", tags: ["Cloud-native", "CloudOps/IaC Focus"] },
          { name: "Env0", logo: "https://logo.clearbit.com/env0.com", type: "Startup", link: "https://www.env0.com/", tags: ["Cloud-native", "CloudOps/IaC Focus"] },
          { name: "Scalr", logo: "https://logo.clearbit.com/scalr.com", type: "Startup", link: "https://www.scalr.com/", tags: ["Cloud-native", "CloudOps/IaC Focus"] },
          { name: "Google DM", logo: "https://logo.clearbit.com/google.com", type: "Enterprise", link: "https://cloud.google.com/deployment-manager", tags: ["Cloud-native", "CloudOps/IaC Focus"] },
          { name: "Azure ARM", logo: "https://logo.clearbit.com/microsoft.com", type: "Enterprise", link: "https://azure.microsoft.com/en-us/services/management/", tags: ["Cloud-native", "CloudOps/IaC Focus"] },
          { name: "AWS CDK", logo: "https://logo.clearbit.com/amazon.com", type: "Enterprise", link: "https://aws.amazon.com/cdk/", tags: ["Cloud-native", "CloudOps/IaC Focus"] },
          // On-Prem/Hybrid Tools
          { name: "Ansible", logo: "https://logo.clearbit.com/redhat.com", type: "Enterprise", link: "https://www.ansible.com/", tags: ["On-Prem/Hybrid", "DevOps/Platform Engineering"] },
          { name: "Chef", logo: "https://logo.clearbit.com/chef.io", type: "Startup", link: "https://www.chef.io/", tags: ["On-Prem/Hybrid", "DevOps/Platform Engineering"] },
          { name: "Puppet", logo: "https://logo.clearbit.com/puppet.com", type: "Startup", link: "https://puppet.com/", tags: ["On-Prem/Hybrid", "DevOps/Platform Engineering"] },
          { name: "SaltStack", logo: "https://logo.clearbit.com/saltstack.com", type: "Startup", link: "https://www.saltstack.com/", tags: ["On-Prem/Hybrid", "DevOps/Platform Engineering"] },
          { name: "CloudFormation", logo: "https://logo.clearbit.com/amazon.com", type: "Enterprise", link: "https://aws.amazon.com/cloudformation/", tags: ["On-Prem/Hybrid", "DevOps/Platform Engineering"] },
          { name: "Vagrant", logo: "https://logo.clearbit.com/hashicorp.com", type: "Startup", link: "https://www.vagrantup.com/", tags: ["On-Prem/Hybrid", "DevOps/Platform Engineering"] },
          { name: "BOSH", logo: "https://logo.clearbit.com/cloudfoundry.org", type: "Startup", link: "https://bosh.io/", tags: ["On-Prem/Hybrid", "DevOps/Platform Engineering"] },
          { name: "Nomad", logo: "https://logo.clearbit.com/hashicorp.com", type: "Startup", link: "https://www.nomadproject.io/", tags: ["On-Prem/Hybrid", "DevOps/Platform Engineering"] },
          { name: "Rancher", logo: "https://logo.clearbit.com/rancher.com", type: "Startup", link: "https://rancher.com/", tags: ["On-Prem/Hybrid", "DevOps/Platform Engineering"] },
          { name: "Juju", logo: "https://logo.clearbit.com/ubuntu.com", type: "Startup", link: "https://juju.is/", tags: ["On-Prem/Hybrid", "DevOps/Platform Engineering"] },
          { name: "OpenShift (on-prem)", logo: "https://logo.clearbit.com/redhat.com", type: "Enterprise", link: "https://www.redhat.com/en/technologies/cloud-computing/openshift", tags: ["On-Prem/Hybrid", "DevOps/Platform Engineering"] }
        ]
      }
    ]
  },
  {
    category: "ITSM (Supportive)",
    color: "#00B894",
    subcategories: [
      {
        name: "Service Enrichment",
        companies: [
          // Cloud-native Tools
          { name: "Freshservice", logo: "https://logo.clearbit.com/freshservice.com", type: "Startup", link: "https://freshservice.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          { name: "Zendesk", logo: "https://logo.clearbit.com/zendesk.com", type: "Enterprise", link: "https://www.zendesk.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          { name: "HappyFox", logo: "https://logo.clearbit.com/happyfox.com", type: "Startup", link: "https://www.happyfox.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          { name: "HaloITSM", logo: "https://logo.clearbit.com/haloitsm.com", type: "Startup", link: "https://www.haloitsm.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          { name: "Zoho Desk", logo: "https://logo.clearbit.com/zoho.com", type: "Enterprise", link: "https://www.zoho.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          { name: "4me", logo: "https://logo.clearbit.com/4me.com", type: "Startup", link: "https://www.4me.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          { name: "Help Scout", logo: "https://logo.clearbit.com/helpscout.com", type: "Startup", link: "https://www.helpscout.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          // On-Prem/Hybrid Tools
          { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com", type: "Enterprise", link: "https://www.servicenow.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "BMC Helix", logo: "https://logo.clearbit.com/bmc.com", type: "Enterprise", link: "https://www.bmc.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "Ivanti", logo: "https://logo.clearbit.com/ivanti.com", type: "Enterprise", link: "https://www.ivanti.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "ManageEngine", logo: "https://logo.clearbit.com/manageengine.com", type: "Enterprise", link: "https://www.manageengine.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "Cherwell", logo: "https://logo.clearbit.com/cherwell.com", type: "Enterprise", link: "https://www.cherwell.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "TOPdesk", logo: "https://logo.clearbit.com/topdesk.com", type: "Startup", link: "https://www.topdesk.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "GLPI", logo: "https://logo.clearbit.com/glpi-project.org", type: "Startup", link: "https://glpi-project.org/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "OTRS", logo: "https://logo.clearbit.com/otrs.com", type: "Startup", link: "https://www.otrs.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] }
        ]
      },
      {
        name: "Ticket Routing",
        companies: [
          // Cloud-native Tools
          { name: "Freshservice", logo: "https://logo.clearbit.com/freshservice.com", type: "Startup", link: "https://freshservice.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          { name: "Zoho Desk", logo: "https://logo.clearbit.com/zoho.com", type: "Enterprise", link: "https://www.zoho.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          { name: "HappyFox", logo: "https://logo.clearbit.com/happyfox.com", type: "Startup", link: "https://www.happyfox.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          { name: "Help Scout", logo: "https://logo.clearbit.com/helpscout.com", type: "Startup", link: "https://www.helpscout.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          { name: "Kayako", logo: "https://logo.clearbit.com/kayako.com", type: "Startup", link: "https://www.kayako.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          { name: "HaloITSM", logo: "https://logo.clearbit.com/haloitsm.com", type: "Startup", link: "https://www.haloitsm.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          { name: "4me", logo: "https://logo.clearbit.com/4me.com", type: "Startup", link: "https://www.4me.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          // On-Prem/Hybrid Tools
          { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com", type: "Enterprise", link: "https://www.servicenow.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "BMC", logo: "https://logo.clearbit.com/bmc.com", type: "Enterprise", link: "https://www.bmc.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "ManageEngine", logo: "https://logo.clearbit.com/manageengine.com", type: "Enterprise", link: "https://www.manageengine.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "Jira Service Management (self-hosted)", logo: "https://logo.clearbit.com/atlassian.com", type: "Enterprise", link: "https://www.atlassian.com/software/jira/service-management", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "TOPdesk", logo: "https://logo.clearbit.com/topdesk.com", type: "Startup", link: "https://www.topdesk.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "GLPI", logo: "https://logo.clearbit.com/glpi-project.org", type: "Startup", link: "https://glpi-project.org/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "OTRS", logo: "https://logo.clearbit.com/otrs.com", type: "Startup", link: "https://www.otrs.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "Ivanti", logo: "https://logo.clearbit.com/ivanti.com", type: "Enterprise", link: "https://www.ivanti.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] }
        ]
      },
      {
        name: "CMDB Sync",
        companies: [
          // Cloud-native Tools
          { name: "Freshservice", logo: "https://logo.clearbit.com/freshservice.com", type: "Startup", link: "https://freshservice.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          { name: "Device42", logo: "https://logo.clearbit.com/device42.com", type: "Startup", link: "https://www.device42.com/", tags: ["Cloud-native", "IT/Infrastructure-Centric"] },
          { name: "Lansweeper", logo: "https://logo.clearbit.com/lansweeper.com", type: "Startup", link: "https://www.lansweeper.com/", tags: ["Hybrid", "IT/Infrastructure-Centric"] },
          { name: "Snipe-IT", logo: "https://logo.clearbit.com/snipeitapp.com", type: "Startup", link: "https://snipeitapp.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          // On-Prem/Hybrid Tools
          { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com", type: "Enterprise", link: "https://www.servicenow.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "BMC", logo: "https://logo.clearbit.com/bmc.com", type: "Enterprise", link: "https://www.bmc.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "Ivanti", logo: "https://logo.clearbit.com/ivanti.com", type: "Enterprise", link: "https://www.ivanti.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "ManageEngine", logo: "https://logo.clearbit.com/manageengine.com", type: "Enterprise", link: "https://www.manageengine.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "i-doit", logo: "https://logo.clearbit.com/i-doit.com", type: "Startup", link: "https://www.i-doit.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "GLPI", logo: "https://logo.clearbit.com/glpi-project.org", type: "Startup", link: "https://glpi-project.org/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "Cherwell", logo: "https://logo.clearbit.com/cherwell.com", type: "Enterprise", link: "https://www.cherwell.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "CMDBuild", logo: "https://logo.clearbit.com/cmdbuild.org", type: "Startup", link: "https://www.cmdbuild.org/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] }
        ]
      },
      {
        name: "Policy Execution",
        companies: [
          // Cloud-native Tools
          { name: "Freshservice", logo: "https://logo.clearbit.com/freshservice.com", type: "Startup", link: "https://freshservice.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          { name: "Zoho Desk", logo: "https://logo.clearbit.com/zoho.com", type: "Enterprise", link: "https://www.zoho.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          { name: "HappyFox", logo: "https://logo.clearbit.com/happyfox.com", type: "Startup", link: "https://www.happyfox.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          { name: "4me", logo: "https://logo.clearbit.com/4me.com", type: "Startup", link: "https://www.4me.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          { name: "Help Scout", logo: "https://logo.clearbit.com/helpscout.com", type: "Startup", link: "https://www.helpscout.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          { name: "HaloITSM", logo: "https://logo.clearbit.com/haloitsm.com", type: "Startup", link: "https://www.haloitsm.com/", tags: ["Cloud-native", "Business/Customer Support-Centric"] },
          // On-Prem/Hybrid Tools
          { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com", type: "Enterprise", link: "https://www.servicenow.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "BMC", logo: "https://logo.clearbit.com/bmc.com", type: "Enterprise", link: "https://www.bmc.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "Ivanti", logo: "https://logo.clearbit.com/ivanti.com", type: "Enterprise", link: "https://www.ivanti.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "ManageEngine", logo: "https://logo.clearbit.com/manageengine.com", type: "Enterprise", link: "https://www.manageengine.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "Cherwell", logo: "https://logo.clearbit.com/cherwell.com", type: "Enterprise", link: "https://www.cherwell.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "TOPdesk", logo: "https://logo.clearbit.com/topdesk.com", type: "Startup", link: "https://www.topdesk.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "Agiloft", logo: "https://logo.clearbit.com/agiloft.com", type: "Startup", link: "https://www.agiloft.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] },
          { name: "SysAid", logo: "https://logo.clearbit.com/sysaid.com", type: "Startup", link: "https://www.sysaid.com/", tags: ["On-Prem/Hybrid", "IT/Infrastructure-Centric"] }
        ]
      }
    ]
  },
  {
    category: "Hybrid Cloud Management",
    color: "#6C5CE7",
    subcategories: [
      {
        name: "Multi-cloud Ops",
        companies: [
          // Cloud-native Tools
          { name: "CloudBolt", logo: "https://logo.clearbit.com/cloudbolt.io", type: "Startup", link: "https://www.cloudbolt.io/", tags: ["Cloud-native", "Infrastructure/ITOps Focus"] },
          { name: "Scalr", logo: "https://logo.clearbit.com/scalr.com", type: "Startup", link: "https://www.scalr.com/", tags: ["Cloud-native", "Infrastructure/ITOps Focus"] },
          { name: "CloudCheckr", logo: "https://logo.clearbit.com/cloudcheckr.com", type: "Startup", link: "https://cloudcheckr.com/", tags: ["Cloud-native", "Infrastructure/ITOps Focus"] },
          { name: "CloudSphere", logo: "https://logo.clearbit.com/cloudsphere.com", type: "Startup", link: "https://www.cloudsphere.com/", tags: ["Cloud-native", "Infrastructure/ITOps Focus"] },
          { name: "CloudHealth", logo: "https://logo.clearbit.com/vmware.com", type: "Enterprise", link: "https://www.vmware.com/products/cloudhealth.html", tags: ["Cloud-native", "Infrastructure/ITOps Focus"] },
          { name: "Cast AI", logo: "https://logo.clearbit.com/cast.ai", type: "Startup", link: "https://cast.ai/", tags: ["Cloud-native", "Infrastructure/ITOps Focus"] },
          { name: "CoreStack", logo: "https://logo.clearbit.com/corestack.io", type: "Startup", link: "https://www.corestack.io/", tags: ["Cloud-native", "Infrastructure/ITOps Focus"] },
          { name: "CloudZero", logo: "https://logo.clearbit.com/cloudzero.com", type: "Startup", link: "https://www.cloudzero.com/", tags: ["Cloud-native", "Infrastructure/ITOps Focus"] },
          { name: "Cloudify", logo: "https://logo.clearbit.com/cloudify.co", type: "Startup", link: "https://cloudify.co/", tags: ["Cloud-native", "Infrastructure/ITOps Focus"] },
          // On-Prem/Hybrid Tools
          { name: "VMware", logo: "https://logo.clearbit.com/vmware.com", type: "Enterprise", link: "https://www.vmware.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps Focus"] },
          { name: "Nutanix", logo: "https://logo.clearbit.com/nutanix.com", type: "Enterprise", link: "https://www.nutanix.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps Focus"] },
          { name: "Red Hat", logo: "https://logo.clearbit.com/redhat.com", type: "Enterprise", link: "https://www.redhat.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps Focus"] },
          { name: "Dell", logo: "https://logo.clearbit.com/dell.com", type: "Enterprise", link: "https://www.dell.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps Focus"] },
          { name: "Cisco", logo: "https://logo.clearbit.com/cisco.com", type: "Enterprise", link: "https://www.cisco.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps Focus"] },
          { name: "HPE", logo: "https://logo.clearbit.com/hpe.com", type: "Enterprise", link: "https://www.hpe.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps Focus"] },
          { name: "IBM", logo: "https://logo.clearbit.com/ibm.com", type: "Enterprise", link: "https://www.ibm.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps Focus"] },
          { name: "ManageIQ", logo: "https://logo.clearbit.com/manageiq.org", type: "Startup", link: "https://www.manageiq.org/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps Focus"] },
          { name: "Abiquo", logo: "https://logo.clearbit.com/abiquo.com", type: "Startup", link: "https://www.abiquo.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps Focus"] },
          { name: "Platform9", logo: "https://logo.clearbit.com/platform9.com", type: "Startup", link: "https://platform9.com/", tags: ["On-Prem/Hybrid", "Infrastructure/ITOps Focus"] }
        ]
      },
      {
        name: "Hybrid Workflows",
        companies: [
          // Cloud-native Tools
          { name: "Monday.com", logo: "https://logo.clearbit.com/monday.com", type: "Startup", link: "https://monday.com/", tags: ["Cloud-native", "Business/Productivity/Collaboration Focus"] },
          { name: "Wrike", logo: "https://logo.clearbit.com/wrike.com", type: "Startup", link: "https://www.wrike.com/", tags: ["Cloud-native", "Business/Productivity/Collaboration Focus"] },
          { name: "ClickUp", logo: "https://logo.clearbit.com/clickup.com", type: "Startup", link: "https://clickup.com/", tags: ["Cloud-native", "Business/Productivity/Collaboration Focus"] },
          { name: "Notion", logo: "https://logo.clearbit.com/notion.so", type: "Startup", link: "https://www.notion.so/", tags: ["Cloud-native", "Business/Productivity/Collaboration Focus"] },
          { name: "Asana", logo: "https://logo.clearbit.com/asana.com", type: "Startup", link: "https://asana.com/", tags: ["Cloud-native", "Business/Productivity/Collaboration Focus"] },
          { name: "Slack", logo: "https://logo.clearbit.com/slack.com", type: "Startup", link: "https://slack.com/", tags: ["Cloud-native", "Business/Productivity/Collaboration Focus"] },
          { name: "Zoom", logo: "https://logo.clearbit.com/zoom.us", type: "Startup", link: "https://zoom.us/", tags: ["Cloud-native", "Business/Productivity/Collaboration Focus"] },
          { name: "Zapier", logo: "https://logo.clearbit.com/zapier.com", type: "Startup", link: "https://zapier.com/", tags: ["Cloud-native", "Business/Productivity/Collaboration Focus"] },
          { name: "Airtable", logo: "https://logo.clearbit.com/airtable.com", type: "Startup", link: "https://airtable.com/", tags: ["Cloud-native", "Business/Productivity/Collaboration Focus"] },
          { name: "Workato", logo: "https://logo.clearbit.com/workato.com", type: "Startup", link: "https://www.workato.com/", tags: ["Cloud-native", "Business/Productivity/Collaboration Focus"] },
          { name: "Miro", logo: "https://logo.clearbit.com/miro.com", type: "Startup", link: "https://miro.com/", tags: ["Cloud-native", "Business/Productivity/Collaboration Focus"] },
          // On-Prem/Hybrid Tools
          { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com", type: "Enterprise", link: "https://www.servicenow.com/", tags: ["On-Prem/Hybrid", "Business/Productivity/Collaboration Focus"] },
          { name: "Citrix", logo: "https://logo.clearbit.com/citrix.com", type: "Enterprise", link: "https://www.citrix.com/", tags: ["On-Prem/Hybrid", "Business/Productivity/Collaboration Focus"] },
          { name: "VMware Workspace ONE", logo: "https://logo.clearbit.com/vmware.com", type: "Enterprise", link: "https://www.vmware.com/products/workspace-one.html", tags: ["On-Prem/Hybrid", "Business/Productivity/Collaboration Focus"] },
          { name: "SAP", logo: "https://logo.clearbit.com/sap.com", type: "Enterprise", link: "https://www.sap.com/", tags: ["On-Prem/Hybrid", "Business/Productivity/Collaboration Focus"] },
          { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com", type: "Enterprise", link: "https://www.oracle.com/", tags: ["On-Prem/Hybrid", "Business/Productivity/Collaboration Focus"] },
          { name: "IBM Cloud Pak", logo: "https://logo.clearbit.com/ibm.com", type: "Enterprise", link: "https://www.ibm.com/cloud/cloud-pak-for-integration", tags: ["On-Prem/Hybrid", "Business/Productivity/Collaboration Focus"] },
          { name: "Dell Boomi", logo: "https://logo.clearbit.com/dell.com", type: "Enterprise", link: "https://www.dell.com/en-us/dt/solutions/boomi.htm", tags: ["On-Prem/Hybrid", "Business/Productivity/Collaboration Focus"] }
        ]
      }
    ]
  }
]; 
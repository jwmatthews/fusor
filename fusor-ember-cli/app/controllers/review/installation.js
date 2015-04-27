import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application','rhci', 'deployment', 'satellite', 'configure-organization',
          'configure-environment', 'rhev-setup', 'hypervisor', 'hypervisor/discovered-host',
          'engine/discovered-host', 'storage',
          'networking', 'rhev-options', 'where-install',
          'cloudforms-storage-domain', 'cloudforms-vm', 'review'],

  // TODO - DRY and update while deployment is finished and button should say "Deployed"
  buttonDeployTitle: function() {
    if (this.get('controllers.deployment.isStarted')) {
      return 'Deploying ...';
    } else {
      return 'Deploy';
    }
  }.property('controllers.deployment.isStarted'),

  buttonDeployDisabled: function() {
    return this.get('controllers.deployment.isStarted');
  }.property('controllers.deployment.isStarted'),

  showErrorMessage: false,
  errorMsg: null,
  foremanTasksURL: null,
  skipContent: Ember.computed.alias("controllers.deployment.skipContent"),

  isRhevOpen: true,
  isOpenStackOpen: false,
  isCloudFormsOpen: false,

  engineHostAddressDefault: 'ovirt-hypervisor.rhci.redhat.com',
  hostAddress: Ember.computed.alias("controllers.rhev-options.hostAddress"),
  engineHostName: Ember.computed.alias("controllers.rhev-options.engineHostName"),

  nameDeployment: Ember.computed.alias("controllers.deployment.name"),
  selectedOrganization: Ember.computed.alias("controllers.deployment.selectedOrganzation"),
  selectedEnvironment: Ember.computed.alias("controllers.deployment.selectedEnvironment"),
  rhevSetup: Ember.computed.alias("controllers.deployment.rhevSetup"),

  isRhev: Ember.computed.alias("controllers.deployment.isRhev"),
  isOpenStack: Ember.computed.alias("controllers.deployment.isOpenStack"),
  isCloudForms: Ember.computed.alias("controllers.deployment.isCloudForms"),

  isSelfHosted: Ember.computed.alias("controllers.deployment.rhev_is_self_hosted"),
  selectedHypervisorHosts: Ember.computed.alias("controllers.deployment.discovered_hosts"),

  rhev_engine_host: Ember.computed.alias("controllers.deployment.discovered_host"),
  selectedRhevEngine: Ember.computed.alias("controllers.deployment.discovered_host"),

  nameRHCI: Ember.computed.alias("controllers.rhci.nameRHCI"),
  nameRhev: Ember.computed.alias("controllers.rhci.nameRhev"),
  nameOpenStack: Ember.computed.alias("controllers.rhci.nameOpenStack"),
  nameCloudForms: Ember.computed.alias("controllers.rhci.nameCloudForms"),
  nameSatellite: Ember.computed.alias("controllers.rhci.nameSatellite"),

});

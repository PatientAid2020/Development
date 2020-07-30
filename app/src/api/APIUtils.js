const DUMMY_FORM = {
  'title':'Demographic Information', 
  'fields':[
    {
      'id': 'sex',
      'prompt': "What is your sex?",
      'type': 'dropdown',
      'items':
        [
          'Male',
          'Female',
          'Transgender Male to Female',
          'Transgender Female to Male',
          'Intersex',
        ],
      'required':true,
    },
    {
      'id': 'age',
      'prompt': "What is your age range?",
      'type': 'dropdown',
      'items':
        [
          '<5',
          '5-17',
          '18-34',
          '35-49',
          '50-59',
          '60-64',
          '65-69',
          '70-74',
          '75-79',
          '80+',
        ],
      'required':true,
    },
    {
      'id': 'name',
      'prompt': "What is your name?",
      'type': 'text',
      'required':true,
    },
    {
      'id': 'address',
      'prompt': "What is your address?",
      'type': 'text',
      'required':true,
    },
  ]
};

const DUMMY_PRIVACY_POLICY = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur blandit scelerisque. Aliquam imperdiet nibh at eleifend sollicitudin. Nam ut magna nec nisl rhoncus tincidunt. Nullam imperdiet mauris laoreet, tincidunt est rutrum, hendrerit erat. Sed volutpat libero sit amet risus auctor pretium. Nam lectus elit, pretium vel nulla elementum, posuere efficitur ex. Pellentesque dictum, metus id feugiat hendrerit, justo neque eleifend mauris, at fermentum sapien eros vel velit. Phasellus vitae pretium ex. Curabitur et ultricies libero. Cras at semper erat. Nunc sollicitudin turpis a elit eleifend rutrum. Phasellus ut erat vel libero tempor commodo at non enim.

Praesent non nisl quis sem condimentum molestie. Donec justo erat, ullamcorper nec lacinia eget, rutrum vitae orci. Fusce sed justo risus. Aenean maximus nunc purus, id tristique nibh feugiat a. Morbi id commodo velit, auctor semper odio. Sed sodales metus augue, id malesuada justo tincidunt vitae. In hac habitasse platea dictumst. Aliquam erat volutpat. Nunc mauris orci, gravida vel faucibus in, pulvinar non urna. Fusce vitae consequat lectus. Aliquam nec arcu at ipsum ullamcorper efficitur. Donec tincidunt ultrices pulvinar. Integer nisl ex, blandit et suscipit nec, aliquam in urna. Aenean volutpat nulla nec eleifend pulvinar.

Nulla finibus tincidunt vulputate. Curabitur hendrerit ante dui, in tincidunt tortor egestas in. Etiam nulla diam, aliquam at ipsum eu, dignissim euismod ligula. Aliquam eget tellus vel sem ornare dictum. Phasellus ultrices faucibus augue, quis dapibus diam. Mauris neque ex, mollis non tempor sit amet, feugiat fermentum quam. Nullam nec felis consectetur dolor vehicula imperdiet. Curabitur augue arcu, placerat a est sed, varius euismod diam. Proin ut nulla felis. Maecenas viverra nisi ut est vehicula, ac ultricies massa ultricies. Vestibulum sit amet justo sit amet dui pulvinar fringilla. Sed molestie convallis mauris nec vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Donec fermentum massa porttitor, accumsan orci in, efficitur nisi. Suspendisse efficitur sem libero, in fringilla dolor vulputate sed. Sed vel lorem et purus dapibus ullamcorper. Donec vel orci ipsum. Curabitur suscipit odio arcu. Maecenas finibus tincidunt mauris, ornare varius purus commodo a. Morbi tincidunt turpis elit, quis venenatis lorem tempor vitae. Pellentesque sodales ac sem non eleifend. Sed a lectus eget dui tempus congue eget elementum sem. Sed vulputate tortor vitae nunc sagittis semper. Etiam condimentum ligula ex, pharetra gravida lorem vestibulum sit amet. Donec interdum laoreet viverra. Quisque nec quam eu tellus convallis interdum non ut lectus. Sed sagittis ipsum vitae arcu laoreet lobortis. Ut et dui eu magna tincidunt maximus.

Donec iaculis leo id iaculis luctus. Cras malesuada consequat nibh nec eleifend. Phasellus consequat quam sem, sit amet pharetra elit bibendum a. Duis sed diam consectetur, molestie orci non, rutrum mi. Nullam lorem nunc, volutpat nec bibendum vel, pellentesque et dui. Proin vel magna eget magna dignissim fringilla eu ut dolor. Quisque porttitor sollicitudin leo ut porttitor.
`;

const DUMMY_PROVIDER_INFO = {
  'name':'Sequoia Hospital', 
  'address':'170 Alameda de las Pulgas, Redwood City, CA 94062'
};

export default class APIUtils {
  static getPolicy(providerId) {
    return DUMMY_PRIVACY_POLICY;
  }

  static getForm(providerId) {
    return DUMMY_FORM;
  }

  //could also hardcode basic provider info along with the ID
  static getProviderInfo(providerId) {
    return DUMMY_PROVIDER_INFO;
  }
  
  static postFormData(providerId, userId, state) {
    fetch('http://localhost:5000/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Provider-Id': providerId,
        'User-Id': userId,
      },
      body: JSON.stringify(state),
    });
  }
}
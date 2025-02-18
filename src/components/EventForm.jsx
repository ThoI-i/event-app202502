import styles from './EventForm.module.scss';

const EventForm = () => {

  // 서버로 데이터 보내기
  const handleSubmit = e => { 
    e.preventDefault();

    // form에 입력한 값 가져오기
    const formData = new FormData(e.target);

    // 서버에 보낼 데이터 만들기
    const payload = {
      title: formData.get('title'),
      desc: formData.get('description'),
      imageUrl: formData.get('image'),
      beginDate: formData.get('date')
    };
    console.log(payload);
    
    
  };

  return (
    <form
      className={styles.form}
      noValidate
      onSubmit={handleSubmit}
    >
      <p>
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          type='text'
          name='title'
          required
        />
      </p>
      <p>
        <label htmlFor='image'>Image</label>
        <input
          id='image'
          type='url'
          name='image'
          required
        />
      </p>
      <p>
        <label htmlFor='date'>Date</label>
        <input
          id='date'
          type='date'
          name='date'
          required
        />
      </p>
      <p>
        <label htmlFor='description'>Description</label>
        <textarea
          id='description'
          name='description'
          rows='5'
          required
        />
      </p>
      <div className={styles.actions}>
        <button type='button'>Cancel</button>
        <button>Save</button>
      </div>
    </form>
  );
};

export default EventForm;
